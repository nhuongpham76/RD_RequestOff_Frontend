<template>
  <div id="page-wrapper">
    <div class="header">
      <breadcrumbs subject_name="users" :breadcrumbs="[{name: 'dashboard', pathName: 'dashboard'}, {name: 'users'}]"></breadcrumbs>
    </div>
    <div id="page-inner">
      <div class="row">
        <div class="col-md-12">
          <div class="panel panel-default">
            <div class="panel-heading">
              <div class="row">
                <div class="col-md-12">
                  <div class="title-list">
                    <div class="row">
                      <div class="col-md-12 color-green"><i class="fa fa-search"></i> {{ $t('search_user') }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="panel-body">
              <form class="row form-horizontal">
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="name" class="col-md-2 control-label text-right">Name</label>
                    <div class="col-md-10">
                      <input type="text" class="form-control" placeholder="">
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="name" class="col-md-2 control-label text-right">Name</label>
                    <div class="col-md-10">
                      <input type="text" class="form-control" id="name" placeholder="">
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="name" class="col-md-2 control-label text-right">Name</label>
                    <div class="col-md-10">
                      <input type="text" class="form-control" id="name" placeholder="">
                    </div>
                  </div>
                </div>
                <div class="col-md-12 text-center search">
                  <button class="clear-button btn no-radius outline-none"><i class="fa fa-eraser"></i><span class="hidden-xs"> {{ $t('clear_button') }}</span></button>
                  <button class="search-button btn no-radius outline-none"><i class="fa fa-search"></i><span class="hidden-xs"> {{ $t('search_button') }}</span></button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <!-- /. ROW  -->
      <div class="row">
        <div class="col-md-12">
          <div class="panel panel-default">
            <div class="panel-heading">
              <div class="row">
                <div class="col-md-12">
                  <div class="title-list">
                    <div class="row">
                      <div class="col-md-6 color-green" style="padding-bottom: 5px"><i class="fa fa-users"></i> {{ $t('list_user') }}</div>
                      <div class="col-md-6 text-right">
                        <router-link :to="{name: 'create-user'}" class="custom-button btn link-directive no-radius"><i class="fa fa-plus"></i> {{ $t('create_new') }}</router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="panel-body">
              <div class="table-responsive">
                <table class="table table-striped table-bordered table-hover">
                  <thead>
                    <tr>
                      <th class="number-column">No</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Username</th>
                      <th class="action-column">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="number-value">1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>
                        <a class="action-button show-button"><i class="fa fa-search"></i><span class="hidden-xs"> {{ $t('show_button') }}</span></a>
                        <a class="action-button edit-button"><i class="fa fa-edit"></i><span class="hidden-xs"> {{ $t('edit_button') }}</span></a>
                        <a class="action-button delete-button"><i class="fa fa-times"></i><span class="hidden-xs"> {{ $t('delete_button') }}</span></a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <pagination></pagination>
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
  export default {
    name: "List",
    components: {
      Pagination,
      Breadcrumbs
    }
  }
</script>

<style scoped>

</style>