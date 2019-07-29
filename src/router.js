import Vue from 'vue';
import Router from 'vue-router';
import Login from './components/authenticate/Login';
import Master from './components/layout/Master';
import NotFound from './components/NotFound';
import Dashboard from './components/Dashboard';

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
