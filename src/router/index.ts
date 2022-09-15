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
  {
    path: "/cities/:id",
    name: "city",
    component: () =>
      import(/* webpackChunkName: "city" */ "../views/City/CityView.vue"),
    props: true,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
