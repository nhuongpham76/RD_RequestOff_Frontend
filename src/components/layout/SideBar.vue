<template>
  <nav class="navbar-default navbar-side" role="navigation">
    <div class="sidebar-collapse">
      <ul class="nav" id="main-menu">

        <li>
          <router-link :to="{ name: 'dashboard'}" class="active-menu"><i class="fa fa-dashboard"></i>Dashboard</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'users'}"><i class="fa fa-users"></i>Users</router-link>
        </li>
        <li>
          <a href="https://webthemez.com/demo/brilliant-free-bootstrap-admin-template/ui-elements.html"><i class="fa fa-desktop"></i> UI Elements</a>
        </li>

        <li>
          <a href="https://webthemez.com/demo/brilliant-free-bootstrap-admin-template/index.html#"><i class="fa fa-sitemap"></i> Charts<span class="fa arrow"></span></a>
          <ul class="nav nav-second-level collapse">
            <li>
              <a href="https://webthemez.com/demo/brilliant-free-bootstrap-admin-template/chart.html">Charts JS</a>
            </li>
            <li>
              <a href="https://webthemez.com/demo/brilliant-free-bootstrap-admin-template/morris-chart.html">Morris Chart</a>
            </li>
          </ul>
        </li>

        <li>
          <a href="https://webthemez.com/demo/brilliant-free-bootstrap-admin-template/tab-panel.html"><i class="fa fa-qrcode"></i> Tabs &amp; Panels</a>
        </li>

        <li>
          <a href="https://webthemez.com/demo/brilliant-free-bootstrap-admin-template/table.html"><i class="fa fa-table"></i> Responsive Tables</a>
        </li>
        <li>
          <a href="https://webthemez.com/demo/brilliant-free-bootstrap-admin-template/form.html"><i class="fa fa-edit"></i> Forms </a>
        </li>

        <li>
          <a href="https://webthemez.com/demo/brilliant-free-bootstrap-admin-template/index.html#"><i class="fa fa-sitemap"></i> Multi-Level Dropdown<span class="fa arrow"></span></a>
          <ul class="nav nav-second-level collapse">
            <li>
              <a href="https://webthemez.com/demo/brilliant-free-bootstrap-admin-template/index.html#">Second Level Link</a>
            </li>
            <li>
              <a href="https://webthemez.com/demo/brilliant-free-bootstrap-admin-template/index.html#">Second Level Link</a>
            </li>
            <li>
              <a href="https://webthemez.com/demo/brilliant-free-bootstrap-admin-template/index.html#">Second Level Link<span class="fa arrow"></span></a>
              <ul class="nav nav-third-level collapse">
                <li>
                  <a href="https://webthemez.com/demo/brilliant-free-bootstrap-admin-template/index.html#">Third Level Link</a>
                </li>
                <li>
                  <a href="https://webthemez.com/demo/brilliant-free-bootstrap-admin-template/index.html#">Third Level Link</a>
                </li>
                <li>
                  <a href="https://webthemez.com/demo/brilliant-free-bootstrap-admin-template/index.html#">Third Level Link</a>
                </li>

              </ul>

            </li>
          </ul>
        </li>
        <li>
          <a href="https://webthemez.com/demo/brilliant-free-bootstrap-admin-template/empty.html"><i class="fa fa-fw fa-file"></i> Empty Page</a>
        </li>
      </ul>

    </div>
  </nav>
</template>

<script>
  export default {
    name: "SideBar"
  }
</script>

<style scoped>

</style>