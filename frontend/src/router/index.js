import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import App from "@/App";
import Login from "@/views/Login";
import Layout from "@/views/Layout";

const routes = [
  { path: "/", name: "app", component: App },
  { path: "/login", name: "login", component: Login },
  { path: "/layout", name: "layout", component: Layout },
];

const router = new VueRouter({
  routes,
});

export default router;
