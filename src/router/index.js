import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  base: process.env.NODE_ENV === 'production'?'/portfolio': '',
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'home',
          component: HomeView,
          meta: {
            title: 'Home'
          },
        },
        {
          path: '/about',
          name: 'about',
          meta: {
            title: 'About Me'
          },
          component: () => import('../views/AboutView.vue')
        },
        {
          path: '/contact',
          name: 'contact',
          meta: {
            title: 'Contact Me'
          },
          component: () => import('../views/Contact.vue')
        },
      ]
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   meta: {
    //     title: 'About Me'
    //   },
    //   component: () => import('../views/AboutView.vue')
    // },
    // {
    //   path: '/contact',
    //   name: 'contact',
    //   meta: {
    //     title: 'About Me'
    //   },
      
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/Contact.vue')
    // },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: () => import("../views/NotFound.vue"),
    },
  ]
})

router.beforeEach((to, from, next) => {
  // Get the page title from the route meta data that we have defined
  // See further down below for how we setup this data
  const title = to.meta.title
  // If the route has a title, set it as the page title of the document/page
  if (title) {
    document.title = title
  }
  // Continue resolving the route
  next()
})
export default router
