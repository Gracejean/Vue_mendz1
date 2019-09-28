<template>
    <div id="app">
      <Header></Header>
      <AppBody></AppBody>
      <Sidebar></Sidebar>
    </div>
  </template>

  

  <script>
  import Header from "components/Frame/Header.vue";
  import AppBody from 'components/Frame/Body.vue';
  // import  SidebarMenu  from 'vue-sidebar-menu';
  import Sidebar from 'components/Frame/Sidebar.vue';





  export default {
    name: "app",
    components: {
      Header,
      AppBody,
      Sidebar

    }
  };
  </script>