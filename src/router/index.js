import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Auth from "../views/Auth.vue";
import Centers from "../views/Centers.vue";
import Center from "../views/Center.vue";
import Yoga from "../views/Yoga.vue";
import Maps from "../views/Maps.vue";
import Perfil from "../views/Perfil.vue";

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
  },
  {
    path: "/center/:id",
    name: "Centro",
    component: Center
  },
  {
    path: "/yoga",
    name: "Yoga",
    component: Yoga
  },
  {
    path: "/maps",
    name: "Maps",
    component: Maps
  },
  {
    path: "/perfil",
    name: "Perfil",
    component: Perfil
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
