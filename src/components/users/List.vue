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
          <!--   Kitchen Sink -->
          <div class="panel panel-default">
            <div class="panel-heading">
              <div class="row">
                <div class="col-md-12">
                  <div class="title-list">
                    <div class="row">
                      <div class="col-md-6 color-green" style="padding-bottom: 5px"><i class="fa fa-users"></i> USER LIST</div>
                      <div class="col-md-6 text-right">
                        <button class="button" style=""><i class="fa fa-plus"></i> Create new</button>
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
                        <a class="action-button show-button"><i class="fa fa-search"></i><span class="hidden-xs">Show</span></a>
                        <a class="action-button edit-button"><i class="fa fa-edit"></i><span class="hidden-xs">Edit</span></a>
                        <a class="action-button delete-button"><i class="fa fa-times"></i><span class="hidden-xs">Delete</span></a>
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
  export default {
    name: "List",
    components: {
      Pagination
    }
  }
</script>

<style scoped>

</style>