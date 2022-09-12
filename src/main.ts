import { createApp } from "vue";
import VueFeather from "vue-feather";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/styles/global.scss";

createApp(App)
  .component(VueFeather.name, VueFeather)
  .use(store)
  .use(router)
  .mount("#app");
