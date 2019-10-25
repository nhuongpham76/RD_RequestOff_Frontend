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
            <input class="input100" type="text" name="email" placeholder="" v-model="email" v-validate="rules.email">
            <span class="focus-input100"></span>
          </div>
          <p v-if="errors.has('email')" style="color: red; margin-top: -24px;" >{{errors.first('email')}}</p>
          <p style="color: red; margin-top: -24px;" >{{errorsResponse.email && errorsResponse.email[0]}}</p>
          <div class="wrap-input100 validate-input m-b-18">
            <span class="label-input100">{{ $t("login.input_text.password") }}</span>
            <input class="input100" type="password" name="password" placeholder="" v-model="password" v-validate="rules.password">
            <span class="focus-input100"></span>
          </div>
          <p v-if="errors.has('password')" style="color: red; margin-top: -16px;" >{{errors.first('password')}}</p>
          <p style="color: red; margin-top: -16px;">{{errorsResponse.password && errorsResponse.password[0]}}</p>
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
              <button :disabled="isDisabled" class="login-button">
                <span v-if="!isLoading">{{ $t("login.button_login") }}</span>
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
  import ApiService from "../../service/ApiService";
  import {STATUS_CODE} from "../../utilities/constant";
  import Awn from "../../utilities/awn";
  import { ClipLoader } from 'vue-spinner/dist/vue-spinner.min.js';
  import { TokenService } from '../../service/StorageService';
  import rules from '../../validate/rules/login';

  export default {
    name: "Login",
    components: {
      ClipLoader
    },
    data () {
      return {
        email: '',
        password: '',
        rules: rules,
        isLoading: false,
        errorsResponse: {},
      }
    },
    computed: {
      isDisabled: function () {
        return !this.isFilledForm() || this.errors.any();
      }
    },
    methods: {
      login () {
        this.isLoading = true;
        AuthApiRequest.login({email: this.email, password: this.password})
          .then(response => {
            let status = response.status_code;
            let message = response.message;
            if (status == STATUS_CODE.SUCCESS) {
              let tokenAccess = response.data.token;
              TokenService.saveToken(tokenAccess);
              ApiService.setToken();
              setTimeout(() => {
                Awn.success(this, this.$t('authorized'), message);
                this.isLoading = false;
                this.$router.push({name: 'dashboard'});
              }, 1000);
            } else if (status == STATUS_CODE.VALIDATION_FAIL) {
              Awn.error(this, this.$t('input_data'), message);
              this.errorsResponse = response.errors;
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
      },
      isFilledForm: function () {
        return this.email && this.password;
      }
    }
  }
</script>

<style scoped>

  .login-button {
    background-color: #0c757f;
    border-color: #32c5d2;
    padding: 8px;
    color: #ffffff;
  }

  .login-button:disabled {
    background-color: #85c0c7;
  }

</style>