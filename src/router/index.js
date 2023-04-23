import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: "/dashboard",
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import("../views/dashboard/index.vue"),
    meta: { authRequired: true },
  },
  {
    path: '/customer',
    name: 'customer',
    component: () => import("../views/customer/index.vue"),
    meta: { authRequired: true },
  },
  {
    name: "PageNotFound",
    path: "/:pathMatch(.*)*",
    component: () => import("../views/PageNotFound.vue"),
    meta: { authRequired: true },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "",
  linkExactActiveClass: "",
})

// router.beforeEach((routeTo, routefrom, next) => {
//   const authRequired = routeTo.matched.some((route) => route.meta.authRequired);
//   const loggedIn = localStorage.getItem("user");
//   if (authRequired && !loggedIn) {
//     next("/login");
//   } else {
//     next();
//   }
// });

export default router
