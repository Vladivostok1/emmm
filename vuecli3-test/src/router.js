import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Mine from './views/Mine';
import test1 from './views/test1'
import test2 from './views/test2'
import Error from './views/error'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path:'/mine',
      name:'mine',
      component:Mine,
      children:[
        {
          path:'test1',
          name:'test1',
          component:test1
        },
        {
          path:'test2',
          name:'test2',
          component:test2
        },
      ]
    },
    {
      path:'*',
      name:'error',
      component:Error
    },{
      path:'/aaa',
      redirect:'/'
    }
  ]
})
