import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    alias: ['/all'],
    name: 'All',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/All-Item.vue'),
  },
  {
    path: '/active',
    name: 'Active',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Active-Item.vue'),
  },
  {
    path: '/completed',
    name: 'Completed',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Completed-Item.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
