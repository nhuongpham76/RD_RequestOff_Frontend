<template>
  <div>
    <div class="row">
      <div class="col-md-offset-5 col-md-2 login-page">
        <form @submit.prevent="login">
          <h3 class="title text-center">
            {{ $t('login.forgot_password_title') }}
          </h3>
          <div class="form-group">
            <input type="email" name="email" class="form-control" :placeholder="$t('login.input_text.email')" v-model="formData.email" v-validate="rules.email">
            <small class="form-text text-muted" v-if="errors.has('email') || errorsResponse.email">{{errors.first('email') || errorsResponse.email[0]}}</small>
          </div>
          <div class="form-group submit-button">
            <button class="btn no-radius outline-none custom-button" :disabled="isDisabledForm">
              <span v-if="!isLoading">{{ $t("common.send") }}</span>
              <clip-loader :loading="isLoading" size="25px" color="white" style="margin-bottom: -7px"></clip-loader>
            </button>
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
  import rules from '../../validator/rules/login';
  import ChangeLanguage from '../layout/ChangeLanguage';
  import { ClipLoader } from 'vue-spinner/dist/vue-spinner.min.js';
  import  help from '../../utilities/helper';
  export default {
    name: "ForgetPassword",
    components: {
      'change-language': ChangeLanguage,
      ClipLoader,
    },
    data: function () {
      return {
        formData: {
          email: '',
        },
        rules: rules,
        errorsResponse: [],
        isLoading: false,
      }
    },
    beforeCreate: function() {
      document.body.className = 'login';
    },
    computed: {
      isDisabledForm: function () {
        return !help.isFilledForm(this.formData) || this.errors.any();
      }
    },
  }
</script>

<style scoped>

</style>