<template>
  <div class="limiter">
    <div class="container-login100">
      <div class="wrap-login100">
        <div class="login100-form-title" style="background-image: url(/public/images/bg-01.jpg);">
          <span class="login100-form-title-1">
              {{ $t("login.title") }}
          </span>
        </div>
        <form class="login100-form validate-form" @submit.prevent="login">
          <div class="wrap-input100 validate-input m-b-26">
            <span class="label-input100">{{ $t("login.input_text.email") }}</span>
            <input class="input100" type="text" name="username" placeholder="" v-model="email">
            <span class="focus-input100"></span>
          </div>
          <p style="color: red; margin-top: -24px;">{{errors.email && errors.email[0]}}</p>
          <div class="wrap-input100 validate-input m-b-18">
            <span class="label-input100">{{ $t("login.input_text.password") }}</span>
            <input class="input100" type="password" name="pass" placeholder="" v-model="password">
            <span class="focus-input100"></span>
          </div>
          <p style="color: red; margin-top: -16px;">{{errors.password && errors.password[0]}}</p>
            <div class="flex-sb-m w-full p-b-30">
              <div class="contact100-form-checkbox">

              </div>
              <div>
                <a href="#" class="txt1">
                    {{ $t('login.forgot_password') }}
                </a>
              </div>
            </div>
            <div class="container-login100-form-btn">
              <button class="login100-form-btn" :disabled="isLoading" :style="isLoading ? 'cursor: not-allowed' : ''">
                <span v-if="!isLoading">
                  {{ $t("login.button_login") }}
                </span>
                <clip-loader :loading="isLoading" size="25px" color="white" style="margin-bottom: -7px"></clip-loader>
              </button>
            </div>
        </form>
        <div style="color: #808080; font-size: 15px; margin-bottom: 10px" class="text-center">© 2019 Request off Co.,LTD |
         <button style="color: #1e7e34" @click="changeLanguage">{{ $t('common.select_lang')}}</button></div>
      </div>
    </div>
  </div>
</template>

<script>
  import AuthApiRequest from "../../service/AuthApiRequest";
  import {STATUS_CODE} from "../../utilities/constant";
  import Awn from "../../utilities/awn";
  import { ClipLoader } from 'vue-spinner/dist/vue-spinner.min.js';
  import { TokenService } from '../../service/StorageService';

  export default {
    name: "Login",
    components: {
      ClipLoader
    },
    data () {
      return {
        email: '',
        password: '',
        isLoading: false,
        errors: {},
      }
    },
    created () {

    },
    methods: {
      login () {
        this.isLoading = true;
        AuthApiRequest.login({email: this.email, password: this.password})
          .then(response => {
            let status = response.status_code;
            let message = response.message;
            if (status == STATUS_CODE.SUCCESS) {
              TokenService.saveToken(response.data.token);
              setTimeout(() => {
                Awn.success(this, this.$t('authorized'), message);
                this.$router.push({name: 'dashboard'});
                this.isLoading = false;
              }, 1000);
            } else if (status == STATUS_CODE.VALIDATION_FAIL) {
              Awn.error(this, this.$t('input_data'), message);
              this.errors = response.errors;
              this.isLoading = false;
            } else if (status == STATUS_CODE.UNAUTHORIZED) {
              Awn.error(this, this.$t('error'), message);
              this.isLoading = false;
            } else {
              Awn.error(this, this.$t('error'), message);
              this.isLoading = false;
            }
          })
          .catch(error => console.log(error));
      },
      changeLanguage() {
        let currentLanguage = localStorage.getItem('language') ? localStorage.getItem('language') : 'en';
        let lang = currentLanguage == 'en' ? 'vi' : 'en';
        localStorage.setItem('language', lang);
        this.$root.$i18n.locale = lang;
      }
    }
  }
</script>

<style scoped>

</style>