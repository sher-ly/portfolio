import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "./plugins/axios";
import apiservice from "./service/apiservice";
import store from "./store";

import "./assets/css/cursor.css";
import "./index.css";
import "./assets/js/cursor.js";


import mitt from "mitt";

// import "./mock";

const emitter = mitt();

const app = createApp(App);
app.config.globalProperties.axios = axios;
app.config.globalProperties.emitter = emitter;
app.use(router).use(store).use(apiservice).mount("#app");
