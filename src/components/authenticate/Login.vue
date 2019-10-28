<template>
    <div>
      <div class="row" id="login">
        <div class="col-md-offset-5 col-md-2 login-page">
          <form @submit.prevent="login">
            <h3 class="title text-center">
              {{ $t('login.title') }}
            </h3>
            <div class="form-group">
              <input type="email" name="email" class="form-control" :placeholder="$t('login.input_text.email')" v-model="formData.email" v-validate="rules.email">
              <small class="form-text text-muted" v-if="errors.has('email') || errorsResponse.email">{{errors.first('email') || errorsResponse.email[0]}}</small>
            </div>
            <div class="form-group">
              <input type="password" name="password" class="form-control" :placeholder="$t('login.input_text.password')" v-model="formData.password" v-validate="rules.password">
              <small class="form-text text-muted" v-if="errors.has('password') || errorsResponse.password">{{errors.first('password') || errorsResponse.password[0]}}</small>
            </div>
            <div class="form-group submit-button">
              <button class="btn no-radius outline-none custom-button" :disabled="isDisabledForm">
                <span v-if="!isLoading">{{ $t("login.button_login") }}</span>
                <clip-loader :loading="isLoading" size="25px" color="white" style="margin-bottom: -7px"></clip-loader>
              </button>
              <router-link class="pull-right forget-password" :to="{name: 'forget-password'}">{{ $t('login.forgot_password') }}</router-link>
            </div>
          </form>
        </div>
      </div>
      <div class="row text-center copyright" style="color: white">
        <span>© 2019 Request-off Co.,LTD |</span>
        <change-language></change-language>
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
  import rules from '../../validator/rules/login';
  import helper from '../../utilities/helper';
  import ChangeLanguage from '../layout/ChangeLanguage';

  export default {
    name: "Login",
    components: {
      ClipLoader,
      'change-language': ChangeLanguage,
    },
    data () {
      return {
        formData: {
          email: '',
          password: '',
        },
        rules: rules,
        isLoading: false,
        errorsResponse: {},
      }
    },
    beforeCreate: function() {
      document.body.className = 'login';
    },
    computed: {
      isDisabledForm: function () {
        return !helper.isFilledForm(this.formData) || this.errors.any();
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
      isFilledForm: function () {
        return this.email && this.password;
      }
    }
  }
</script>

<style scoped>
</style>