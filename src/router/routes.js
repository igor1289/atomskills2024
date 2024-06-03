const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/page1", component: () => import("src/pages/Page1.vue") },
      { path: "/page2", component: () => import("src/pages/Page2.vue") },
      { path: "/LK", component: () => import("src/pages/LK.vue") },
      {
        path: "/LoginForm",
        component: () => import("src/pages/LoginForm.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
  {
    path: "/start",
    component: () => import("src/layouts/Start.vue"),
  },
];

export default routes;
