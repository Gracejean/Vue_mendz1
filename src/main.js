import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from 'router';
import  Sidebar from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
// Vue.use(VueSidebarMenu)
// import VueSidebarMenu from 'vue-sidebar-menu'

Vue.use(Sidebar)




Vue.config.productionTip = false
Vue.use(BootstrapVue)

new Vue({
  //router: router,
  render: h => h(App),
  router: router,
  template: '<router-view></router-view>'
}).$mount('#app')