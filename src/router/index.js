import Vue from 'vue';
import Router from 'vue-router';

const ListDashboard = () => import('@/components/Dashboard/ListDashboard');
const ListItem = () => import('@/components/ListItem/ListItem');

Vue.use(Router);

const routes = [
  {
    path: '/list',
    name: 'ListDashboard',
    component: ListDashboard,
  },
  {
    path: '/list/:id',
    name: 'ListItem',
    component: ListItem,
  },
  {
    path: '*',
    beforeEnter: (to, from, next) => {
      next({ path: '/list' });
    },
  },
];

const router = new Router({ routes, mode: 'history' });

export default router;
