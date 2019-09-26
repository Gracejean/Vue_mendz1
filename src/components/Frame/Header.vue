<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand id="title" href="#">JM APP</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item v-on:click="redirect('/Login')">Login</b-nav-item>
          <b-nav-item v-on:click="redirect('/Register')">Register</b-nav-item>

          <b-navbar-nav class="ml-auto">
          <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" id = "search" type="submit">Search</b-button>
        </b-nav-form>
      </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/colors.scss";

#nav-collapse {
  color: $secondary;
}
#title {
  color: $danger;
}

#search {
  background-color: crimson;
}

b-nav-item {
  color: darksalmon;
}
</style>
<script>
import ROUTER from "router";
export default {
  methods: {
    redirect(router) {
      ROUTER.push(router);
    }
  }
};
</script>