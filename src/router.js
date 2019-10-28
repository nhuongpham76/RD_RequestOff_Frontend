import Vue from 'vue';
import Router from 'vue-router';
import Login from './components/authenticate/Login';
import Master from './components/layout/Master';
import NotFound from './components/NotFound';
import Dashboard from './components/Dashboard';
import ListUser from './components/users/List';

Vue.use(Router);
export default new Router({
  mode: 'history',
  base: process.env.MIX_BASE_URI,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/',
      component: Master,
      children: [
        {
          path: 'dashboard',
          name: 'dashboard',
          component: Dashboard,
        },
        {
          path: 'users',
          name: 'users',
          component: ListUser,
        },
        {
          path: '*',
          name: 'not-found',
          component: NotFound,
        },
      ]
    },
  ],
  redirect: {
    '*' : '/'
  }
});
