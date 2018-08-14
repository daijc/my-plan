import Vue from 'vue'
import Router from 'vue-router'
const landing = resolve => require(['@/components/landing'], resolve);
const homePage = resolve => require(['@/views/homePage'], resolve);
const planList = resolve => require(['@/views/planList'], resolve);

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing',
      component: landing
    },
    {
      path: '/homePage',
      name: 'homePage',
      component: homePage
    },
    ,
    {
      path: '/planList',
      name: 'planList',
      component: planList
    },
  ]
})
