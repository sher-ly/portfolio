import axios from '../plugins/axios';
import MockAdapter from 'axios-mock-adapter';

const moduleFiles = require.context('./modules', true, /\.js$/);
const modules = moduleFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
  const value = moduleFiles(modulePath);
  modules[moduleName] = value.default;
  return modules;
}, {});

const mock = new MockAdapter(axios);

Object.keys(modules).forEach(key => {
  modules[key](mock);
});

export default mock;
