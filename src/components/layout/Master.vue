<template>
  <div id="wrapper">
    <header-component></header-component>
    <sidebar-component></sidebar-component>
    <transition name="slide-fade">
      <router-view/>
    </transition>
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
<style scoped>
  .slide-fade-enter-active {
    transition-duration: 1s;
    transition-property: height, opacity, transform;
    transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  }
  .slide-fade-enter{
    transform: translate(1em, 0);
  }
</style>