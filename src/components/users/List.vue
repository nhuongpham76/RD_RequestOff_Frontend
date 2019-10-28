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
                      <div class="col-md-6 color-green"><i class="fa fa-users"></i> USER LIST</div>
                      <div class="col-md-6 text-right">
                        <button class="" style="color: #FFFFFF;
    background: #1f858e;
    border-color: #18666d;
    border: none;">Create new</button>
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
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                  </tbody>
                </table>
              </div>
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
  export default {
    name: "List"
  }
</script>

<style scoped>

</style>