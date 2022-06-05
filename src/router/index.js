import { createRouter, createWebHistory } from 'vue-router';
import HomeLayout from '../components/HomeLayout.vue';
import HomeView from '../views/home/HomeView.vue';
import ProjectList from '../views/project/ProjectList.vue';
import ProjectView from '../views/project/ProjectView.vue';
import ContactView from '../views/home/ContactView.vue';
import AboutView from '../views/home/AboutView.vue';

const routes = [
  {
    path: '/',
    name: 'HomeLayout',
    component: HomeLayout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'HomeView',
        component: HomeView,
      },
      {
        path: '/about',
        name: 'AboutView',
        component: AboutView,
      },
      {
        path: '/project/list',
        name: 'ProjectList',
        component: ProjectList,
      },
      {
        path: '/project/view',
        name: 'ProjectView',
        component: ProjectView,
      },
      {
        path: '/contact',
        name: 'ContactView',
        component: ContactView,
      },
    ],
  },
];
const router = createRouter( {
  history: createWebHistory(),
  routes,
})
export default router;
