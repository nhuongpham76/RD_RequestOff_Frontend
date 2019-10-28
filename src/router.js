import Vue from 'vue';
import Router from 'vue-router';
import Login from './components/authenticate/Login';
import ForgetPassword from './components/authenticate/ForgetPassword';
import Master from './components/layout/Master';
import NotFound from './components/NotFound';
import Dashboard from './components/Dashboard';
import ListUser from './components/users/List';
import CreateUser from './components/users/Create';

Vue.use(Router);
export default new Router({
  mode: 'history',
  base: process.env.MIX_BASE_URI,
  routes: [
    {
      path: '/',
      name: 'sign-up',
      component: Login,
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: '/password/email',
      name: 'forget-password',
      component: ForgetPassword,
      meta: {
        requiresAuth: false,
      },
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
          path: 'users/list',
          name: 'list-users',
          component: ListUser,
        },
        {
          path: 'users/create',
          name: 'create-user',
          component: CreateUser,
        },
        {
          path: '*',
          name: 'not-found',
          component: NotFound,
        },
      ],
      meta: {
        requiresAuth: true,
      },
    },
  ],
  redirect: {
    '*' : '/'
  }
});
