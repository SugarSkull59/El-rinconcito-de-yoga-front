import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Auth from "../views/Auth.vue";
import Centers from "../views/Centers.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/auth",
    name: "Auth",
    component: Auth
  },
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/centers",
    name: "Centros",
    component: Centers
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
