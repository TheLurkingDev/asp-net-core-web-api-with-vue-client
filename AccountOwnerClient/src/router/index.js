import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home';
import NotFound from '@/error-pages/NotFound';
import OwnerList from '@/components/owner/OwnerList';
import OwnerDetails from '@/components/owner/OwnerDetails';
import OwnerCreate from '@/components/owner/OwnerCreate';
import OwnerUpdate from '@/components/owner/OwnerUpdate';

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
      path: '/owner/create',
      name: 'OwnerCreate',
      component: OwnerCreate
    },
    {
      path: '/owner/update/:id',
      name: 'OwnerUpdate',
      component: OwnerUpdate
    },
    {
      path: '/owner/:id',
      name: 'OwnerDetails',
      component: OwnerDetails
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
