const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/recordBook",
        component: () => import("src/pages/recordBook.vue"),
      },
      {
        path: "/materials",
        component: () => import("src/pages/materials.vue"),
      },
      {
        path: "/tasks",
        component: () => import("src/pages/tasks.vue"),
      },
      {
        path: "/rating",
        component: () => import("src/pages/rating.vue"),
      },
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
    path: "/startPage",
    component: () => import("src/layouts/startPage.vue"),
  },
];

export default routes;
