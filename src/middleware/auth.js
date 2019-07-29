import {TokenService} from "../service/StorageService";
import router from "../router";

export default function () {
  router.beforeEach((to, from, next) => {
    let isAuthenticated = TokenService.getToken();
    let pathName = to.name;
    if (!isAuthenticated) {
      if (pathName == 'login') {
        next();
      } else {
        next({name: 'login'});
      }
    } else if (pathName == 'login' && isAuthenticated) {
      next({name: 'dashboard'});
    } else {
      next();
    }
  })
}