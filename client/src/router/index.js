import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Home from '@/components/Home'
import Thread from '@/components/Thread'
import Login from '@/components/Login'
import ThreadDetail from '@/components/ThreadDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'Hello',
    //   component: Hello
    // },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/thread',
      component: Home,
      children: [
        {
          path: '',
          component: Thread
        },
        {
          path: ':id',
          component: ThreadDetail,
          props: true
        }
      ]
    },
    {
      path: '/',
      component: Login
    }
  ]
})
