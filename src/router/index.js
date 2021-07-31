import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home"),
  },
  {
    path: "/notice",
    name: "Notice",
    component: () => import("@/views/Notice"),
  },
  {
    path: "/market",
    name: "Market",
    component: () => import("@/views/Supermarket/Market"),
  },
  {
    path: "/noticeDetail",
    name: "noticeDetail",
    component: () => import("@/views/NoticeDetail"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
