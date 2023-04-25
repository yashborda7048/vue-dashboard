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
    path: '/customers',
    name: 'customers-map-view',
    component: () => import("../views/customers-map-view/index.vue"),
    meta: { authRequired: true },
  },
  {
    path: '/reseller',
    name: 'reseller',
    component: () => import("../views/reseller/index.vue"),
    meta: { authRequired: true },
  },
  {
    path: '/userIpList',
    name: 'userIpList',
    component: () => import("../views/Ip/index.vue"),
    meta: { authRequired: true },
  },
  {
    path: '/leads',
    name: 'leads',
    component: () => import("../views/marketing/leads/index.vue"),
    meta: { authRequired: true },
  },
  {
    path: '/admin',
    name: 'admin',
    meta: { authRequired: true },
    children: [
      {
        path: 'proposal',
        name: 'proposal',
        component: () => import("../views/admin/marketing/proposal/index.vue"),
      },
      {
        path: 'contract',
        name: 'contract',
        component: () => import("../views/admin/sales/contract/index.vue"),
      },
      {
        path: 'installation',
        name: 'installation',
        component: () => import("../views/admin/support/installation/index.vue"),
      },
    ]
  },
  {
    path: '/subscription',
    name: 'subscription',
    meta: { authRequired: true },
    children: [
      {
        path: 'subscriptions',
        name: 'subscriptions',
        component: () => import("../views/subscription/subscriptions/index.vue"),
      },
    ]
  },
  {
    path: '/invoices',
    name: 'old-invoices',
    component: () => import("../views/sales/old-invoices/index.vue"),
    meta: { authRequired: true },
  },
  {
    path: '/invoice',
    name: 'invoice',
    component: () => import("../views/sales/invoice/index.vue"),
    meta: { authRequired: true },
  },
  {
    path: '/allTicketList',
    name: 'ticket',
    component: () => import("../views/support/ticket/index.vue"),
    meta: { authRequired: true },
  },
  {
    path: '/trainings',
    name: 'trainings',
    component: () => import("../views/support/trainings/index.vue"),
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
