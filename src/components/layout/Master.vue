<template>
  <div>
    <header-component></header-component>
    <sidebar-component></sidebar-component>
    <router-view/>
    <footer-component></footer-component>
  </div>
</template>

<script>
  import Header from './Header';
  import SideBar from './SideBar';
  import Footer from './Footer';

  export default {
    name: "Master",
    data () {
      return {
        route: '',
      }
    },
    components: {
      'header-component': Header,
      'sidebar-component': SideBar,
      'footer-component': Footer,
    },
  }
</script>