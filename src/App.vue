<template>
    <div id="app">
      <Header></Header>
      <AppBody></AppBody>
    </div>
  </template>

  

  <script>
  import Header from "components/Frame/Header.vue";
  import AppBody from 'components/Frame/Body.vue';
  // import  SidebarMenu  from 'vue-sidebar-menu';
  import Slider from 'components/Frame/Sidebar'





  export default {
    name: "app",
    components: {
      Header,
      AppBody,
      'slider':Slider
    }
  };
  </script>