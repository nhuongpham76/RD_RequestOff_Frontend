<template>
  <div id="page-wrapper">
    <div class="header">
      <h1 class="page-header">
        Users
      </h1>
      <ol class="breadcrumb">
        <li>
          <!--<a>Dashboard</a>-->
          <router-link :to="{ path: 'dashboard' }">Dashboard</router-link>
        </li>
        <li class="active">Users</li>
      </ol>

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
                      <div class="col-md-6 color-green" style="padding-bottom: 5px"><i class="fa fa-users"></i> REGISTER USER</div>
                      <div class="col-md-6 text-right">
                        <router-link :to="{name: 'list-users'}" class="custom-button btn no-radius link-directive"><i class="fa fa-list"></i> Show list</router-link>
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
                    Team
                    <span class="required">*</span>
                  </label>
                  <div class="col-sm-6">
                    <select class="form-control" id="team" name="team" v-model="formData.team" v-validate="rules.team">
                      <option value="1">Fintech1</option>
                      <option value="2">MI1</option>
                    </select>
                    <div class="validation-error" v-if="errors.has('team')">{{ errors.first('team') }}</div>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="email" class="col-md-2 col-md-offset-1 control-label text-right">
                    Email
                    <span class="required">*</span>
                  </label>
                  <div class="col-sm-6">
                    <input type="text" class="form-control" id="email" name="email" placeholder="Email"  v-model="formData.email" v-validate="rules.email">
                    <div class="validation-error" v-if="errors.has('email')">{{ errors.first('email') }}</div>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="name" class="col-md-2 col-md-offset-1 control-label text-right">
                    Name
                    <span class="required">*</span>
                  </label>
                  <div class="col-sm-6">
                    <input type="text" class="form-control" id="name" name="name" placeholder="Name" v-model="formData.name" v-validate="rules.name">
                    <div class="validation-error" v-if="errors.has('name')">{{ errors.first('name') }}</div>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="password" class="col-md-2 col-md-offset-1 control-label text-right">
                    Password
                    <span class="required">*</span>
                  </label>
                  <div class="col-sm-6">
                    <input type="password" class="form-control" id="password" name="password" placeholder="Password"  v-model="formData.password" v-validate="rules.password" ref="password">
                    <div class="validation-error" v-if="errors.has('password')">{{ errors.first('password') }}</div>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="password-confirmation" class="col-md-2 col-md-offset-1 control-label text-right">
                    Password confirmation
                    <span class="required">*</span>
                  </label>
                  <div class="col-sm-6">
                    <input type="password" class="form-control" id="password-confirmation" name="password_confirmation" placeholder="Password confirmation" v-model="formData.password_confirmation" v-validate="rules.password_confirmation">
                    <div class="validation-error" v-if="errors.has('password_confirmation')">{{ errors.first('password_confirmation') }}</div>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="role" class="col-md-2 col-md-offset-1 control-label text-right">
                    Role
                    <span class="required">*</span>
                  </label>
                  <div class="col-sm-2">
                    <select class="form-control" id="role" v-model="formData.role">
                      <option value="1">Admin</option>
                      <option value="2">Veiwer</option>
                    </select>
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-md-offset-3 col-md-6">
                    <button class="custom-button btn no-radius outline-none" :disabled="isDisabledSubmit"><i class="fa fa-check"></i> Create</button>
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
  import rules from '../../validate/rules/user';
  import helper from '../../utilities/helper';

  export default {
    name: "List",
    components: {
      Pagination
    },
    data: function () {
      return {
        rules: rules,
        formData: {
          team: 1,
          email: null,
          name: '',
          password: '',
          password_confirmation: '',
          role: 1,
        }
      }
    },
    computed: {
      isDisabledSubmit: function () {
        return !helper.isFilledForm(this.formData);
      }
    },
    methods: {
      createUser: function () {
        console.log(this.formData)
      },
    }
  }
</script>

<style scoped>

</style>