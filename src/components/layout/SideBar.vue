<template>
  <nav class="navbar-default navbar-side" role="navigation">
    <div class="sidebar-collapse">
      <ul class="nav" id="main-menu">

        <li @click="clickCat('dashboard')">
          <router-link :to="{ name: 'dashboard'}" :class="currentRouteName == 'dashboard' ? 'active-menu' : ''"><i class="fa fa-dashboard"></i>{{ $t('dashboard') }}</router-link>
        </li>
        <li @click="clickCat('user-list')">
          <router-link :to="{ name: 'list-users'}" :class="currentRouteName == 'user-list' ? 'active-menu' : ''"><i class="fa fa-users"></i>{{ $t('users') }}</router-link>
        </li>
        <li>
          <a href=""><i class="fa fa-qrcode"></i>{{ $t('teams') }}</a>
        </li>
        <li>
          <a href=""><i class="fa fa-qrcode"></i> Employees</a>
        </li>
        <li>
          <a href=""><i class="fa fa-sitemap"></i>Requests off<span class="fa arrow"></span></a>
          <ul class="nav nav-second-level collapse">
            <li>
              <a href="">Charts JS</a>
            </li>
            <li>
              <a href="">Morris Chart</a>
            </li>
          </ul>
        </li>

        <li>
          <a href=""><i class="fa fa-sitemap"></i>Report requests off<span class="fa arrow"></span></a>
          <ul class="nav nav-second-level collapse">
            <li>
              <a href="">Second Level Link</a>
            </li>
            <li>
              <a href="">Second Level Link</a>
            </li>
            <li>
              <a href="">Second Level Link<span class="fa arrow"></span></a>
              <ul class="nav nav-third-level collapse">
                <li>
                  <a href="">Third Level Link</a>
                </li>
                <li>
                  <a href="">Third Level Link</a>
                </li>
                <li>
                  <a href="">Third Level Link</a>
                </li>

              </ul>

            </li>
          </ul>
        </li>
      </ul>

    </div>
  </nav>
</template>

<script>
  export default {
    name: "SideBar",
    data: function () {
      return {
        currentRouteName: 'dashboard',
      }
    },
    methods: {
      clickCat: function (routeName) {
        this.currentRouteName = routeName;
      }
    }
  }
</script>

<style scoped>

</style>