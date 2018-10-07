import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home';
import NotFound from '@/error-pages/NotFound';
import OwnerList from '@/components/owner/OwnerList';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/owner',
      name: 'OwnerList',
      component: OwnerList
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
