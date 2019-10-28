<template>
  <div id="page-wrapper">
    <div class="header">
      <breadcrumbs subject_name="users" :breadcrumbs="[{name: 'dashboard', pathName: 'dashboard'}, {name: 'users'}]"></breadcrumbs>
    </div>
    <div id="page-inner">
      <!-- /. ROW  -->
      <div class="row">
        <div class="col-md-12">
          <div class="panel panel-default">
            <div class="panel-heading">
              <div class="row">
                <div class="col-md-12">
                  <div class="title-list">
                    <div class="row">
                      <div class="col-md-6 color-green" style="padding-bottom: 5px"><i class="fa fa-users"></i> {{ $t('register_user') }}</div>
                      <div class="col-md-6 text-right">
                        <router-link :to="{name: 'list-users'}" class="custom-button btn no-radius link-directive"><i class="fa fa-list"></i> {{ $t('show_list') }}</router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="panel-body">
              <form class="form-create-edit" @submit.prevent="createUser()">
                <div class="form-group row">
                  <label for="role" class="col-md-2 col-md-offset-1 control-label text-right">
                    {{ $t('team') }}
                    <span class="required">*</span>
                  </label>
                  <div class="col-sm-6">
                    <select class="form-control" id="team" name="team_id" v-model="formData.required.team_id" v-validate="rules.team_id">
                      <option value="1">Fintech1</option>
                      <option value="2">MI1</option>
                    </select>
                    <div class="validation-error" v-if="errors.has('team_id')">{{ errors.first('team_id') }}</div>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="code" class="col-md-2 col-md-offset-1 control-label text-right">
                    {{ $t('code') }}
                    <span class="required">*</span>
                  </label>
                  <div class="col-sm-6">
                    <input type="text" class="form-control" id="code" name="code" placeholder="" v-model="formData.required.code" v-validate="rules.code">
                    <div class="validation-error" v-if="errors.has('code')">{{ errors.first('code') }}</div>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="email" class="col-md-2 col-md-offset-1 control-label text-right">
                    {{ $t('email') }}
                    <span class="required">*</span>
                  </label>
                  <div class="col-sm-6">
                    <input type="text" class="form-control" id="email" name="email" placeholder=""  v-model="formData.required.email" v-validate="rules.email">
                    <div class="validation-error" v-if="errors.has('email')">{{ errors.first('email') }}</div>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="name" class="col-md-2 col-md-offset-1 control-label text-right">
                    {{ $t('name') }}
                    <span class="required">*</span>
                  </label>
                  <div class="col-sm-6">
                    <input type="text" class="form-control" id="name" name="name" placeholder="" v-model="formData.required.name" v-validate="rules.name">
                    <div class="validation-error" v-if="errors.has('name')">{{ errors.first('name') }}</div>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="password" class="col-md-2 col-md-offset-1 control-label text-right">
                    {{ $t('password') }}
                    <span class="required">*</span>
                  </label>
                  <div class="col-sm-6">
                    <input type="password" class="form-control" id="password" name="password" placeholder=""  v-model="formData.required.password" v-validate="rules.password" ref="password">
                    <div class="validation-error" v-if="errors.has('password')">{{ errors.first('password') }}</div>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="password-confirmation" class="col-md-2 col-md-offset-1 control-label text-right">
                    {{ $t('password_confirmation') }}
                    <span class="required">*</span>
                  </label>
                  <div class="col-sm-6">
                    <input type="password" class="form-control" id="password-confirmation" name="password_confirmation" placeholder="" v-model="formData.required.password_confirmation" v-validate="rules.password_confirmation">
                    <div class="validation-error" v-if="errors.has('password_confirmation')">{{ errors.first('password_confirmation') }}</div>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="phone" class="col-md-2 col-md-offset-1 control-label text-right">
                    {{ $t('phone') }}
                    <span class="required">*</span>
                  </label>
                  <div class="col-sm-6">
                    <input type="text" class="form-control" id="phone" name="phone" placeholder="" v-model="formData.required.phone" v-validate="rules.phone">
                    <div class="validation-error" v-if="errors.has('phone')">{{ errors.first('phone') }}</div>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="role_id" class="col-md-2 col-md-offset-1 control-label text-right">
                    {{ $t('role') }}
                    <span class="required">*</span>
                  </label>
                  <div class="col-sm-2">
                    <select class="form-control" id="role_id" v-model="formData.required.role_id">
                      <option value="1">Admin</option>
                      <option value="2">Veiwer</option>
                    </select>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="address" class="col-md-2 col-md-offset-1 control-label text-right">
                    {{ $t('address') }}
                    <span class="required">*</span>
                  </label>
                  <div class="col-sm-6">
                    <input type="text" class="form-control" id="address" name="address" placeholder="" v-model="formData.required.address" v-validate="rules.address">
                    <div class="validation-error" v-if="errors.has('address')">{{ errors.first('address') }}</div>
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-md-offset-3 col-md-6">
                    <button class="custom-button btn no-radius outline-none" :disabled="isDisabledSubmit"><i class="fa fa-check"></i><span> Create</span></button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <!-- End  Kitchen Sink -->
        </div>
      </div>
    </div>
    <!-- /. PAGE INNER  -->
  </div>
</template>

<script>
  import Pagination from '../layout/Pagination';
  import Breadcrumbs from '../layout/Breadcrumbs';
  import rules from '../../validator/rules/user';
  import helper from '../../utilities/helper';
  import UserApiRequest from '../../service/UserApiRequest';
  import CommonApiRequest from '../../service/CommonApiRequest';
  import Awn from '../../utilities/awn';
  import {STATUS_CODE} from '../../utilities/constant';

  export default {
    name: "List",
    components: {
      Pagination,
      Breadcrumbs
    },
    data: function () {
      return {
        rules: rules,
        formData: {
          required: {
            team_id: 1,
            name: '',
            code: '',
            email: '',
            password: '',
            password_confirmation: '',
            phone: '',
            address: '',
            role_id: 1,
          },
          notRequired: {
          }
        },
        responseErrors: [],
      }
    },
    created: function () {
    },
    computed: {
      isDisabledSubmit: function () {
        return !helper.isFilledForm(this.formData.required) || this.errors.any();
      }
    },
    methods: {
      createUser: function () {
        let formData = {...this.formData.required, ...this.formData.notRequired};
        UserApiRequest.createUser(formData)
          .then(response => {
            let status = response.status_code;
            let message = response.message;
            if (status == STATUS_CODE.SUCCESS_CREATE) {
              setTimeout(() => {
                Awn.success(this, this.$t('create_success'), message);
                this.$router.push({name: 'list-users'});
              }, 1000);
            } else if (status == STATUS_CODE.VALIDATION_FAIL) {
              Awn.error(this, this.$t('input_data'), message);
              this.responseErrors = response.errors;
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
    }
  }
</script>

<style scoped>

</style>