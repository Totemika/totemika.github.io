import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _a6d8791c = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _2c7fc491 = () => interopDefault(import('../pages/cv.vue' /* webpackChunkName: "pages/cv" */))
const _d235b232 = () => interopDefault(import('../pages/lists.vue' /* webpackChunkName: "pages/lists" */))
const _27f8e3fb = () => interopDefault(import('../pages/blog/_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _a2a3f4b8 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/contact",
    component: _a6d8791c,
    name: "contact"
  }, {
    path: "/cv",
    component: _2c7fc491,
    name: "cv"
  }, {
    path: "/lists",
    component: _d235b232,
    name: "lists"
  }, {
    path: "/blog/:slug?",
    component: _27f8e3fb,
    name: "blog-slug"
  }, {
    path: "/",
    component: _a2a3f4b8,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}