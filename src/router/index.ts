import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { HomeView } from "@/views";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/cities",
    name: "cities",
    component: () =>
      import(/* webpackChunkName: "cities" */ "../views/Cities/CitiesView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
