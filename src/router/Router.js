import VueRouter from "vue-router";
import HomeView from "@/views/HomeView.vue";
import NewsView from "@/views/NewsView.vue";
import RolesView from "@/views/RolesView.vue";
import Discourse from "@/views/DiscourseView.vue";

import Vue from "vue";

Vue.use(VueRouter);
const route = new VueRouter({
  routes: [
    { path: "/", redirect: "/Home" },
    { path: "/Home", component: HomeView },
    { path: "/News", component: NewsView },
    { path: "/Roles", component: RolesView },
    { path: "/Discourse", component: Discourse },
  ],
  mode: "hash",
});
export default route;
