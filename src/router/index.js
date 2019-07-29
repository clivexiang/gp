import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home/home'
import Cpt_detail from '@/components/Home/Cpt_detail'
import Mark from '@/components/Mark/Mark'
import News from '@/components/News/News'
import Me from '@/components/Me/Me'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
     redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/detail',
      name: 'Cptdetail',
      component: Cpt_detail
    },
    {
      path: '/mark',
      name: 'mark',
      component: Mark
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/me',
      name: 'me',
      component: Me
    }
  ]
})
