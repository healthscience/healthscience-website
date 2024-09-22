// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/Home.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
    ],
  },
  {
    path: '/lab',
    component: () => import('@/views/lab.vue'),
    children: [
      {
        path: '',
        name: 'Lab',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/lab.vue'),
      },
    ],
  },
  {
    path: '/labnetwork/:id',
    component: () => import('@/views/labNetwork.vue'),
    children: [
      {
        path: '',
        name: 'Labnetwork',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/labNetwork.vue'),
      },
    ],
  },
  {
    path: '/terms',
    component: () => import('@/views/Terms.vue'),
    children: [
      {
        path: '',
        name: 'Health',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Terms.vue'),
      },
    ],
  },
  {
    path: '/checksum',
    component: () => import('@/views/Checksum.vue'),
    children: [
      {
        path: '',
        name: 'Creators',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Checksum.vue'),
      },
    ],
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router