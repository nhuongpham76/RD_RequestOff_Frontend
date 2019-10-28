import {TokenService} from "../service/StorageService";
import router from "../router";

export default function () {
  router.beforeEach((to, from, next) => {
    let isAuthenticated = TokenService.getToken();
    if (to.matched.some(record => record.meta.requiresAuth)) {
      if (!isAuthenticated) {
        next({name: 'sign-up'});
      } else {
        next();
      }
    } else {
      if (isAuthenticated && to.name == 'sign-up') {
        next({name: 'dashboard'});
      } else {
        next();
      }
    }
  })
}