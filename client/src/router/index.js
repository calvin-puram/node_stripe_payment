import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import BookSales from "../views/BookSales.vue";
import checkout from "../views/Checkout.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/bookSales",
    name: "BookSales",
    component: BookSales
  },
  {
    path: "/checkout_success/:id",
    name: "checkout",
    component: checkout
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
