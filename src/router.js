import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/Home.vue'
import Login from './views/login/login.vue'
import Main from './views/home/main.vue'
Vue.use(Router)
export default new Router({
  routes: [{
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    children: [{
      path: '',
      component: Main
    },
    {
      path: '/home/comment',
      component: () =>
                        import('./views/comment/index.vue')
    }
    ]
  }
  ]
})
