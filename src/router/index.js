import Vue from 'vue'
import VueRouter from 'vue-router'

import auth from 'services/auth'

import Home from 'components/Home'
import Login from 'components/Login'
import Movie from 'components/Movie'

Vue.use(VueRouter)

const MusicLazy = resolve => require(['components/Music'], resolve)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/',
      component: Home,
      meta: { loginRequired: true },
      children: [
        { path: 'movies', component: Movie },
        { path: 'musics', component: MusicLazy }
      ]
    },
    { path: '/login', component: Login }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.loginRequired)) {
    if (!auth.loggedIn()) {
      next({ path: '/login', query: { redirect: to.fullPath } })
      return
    }
  }
  next()
})

export default router
