<template>
  <Navbar />
  <RouterView />
</template>

<script>
  import { RouterLink, RouterView } from "vue-router";
  import Navbar from "./components/Navbar.vue";
  export default {
    components: { Navbar },
  };
</script>

<style>
  body {
    background: #f2f2f2;
  }
  #app {
    max-width: 600px;
    margin: 0 auto;
    color: #555;
    font-family: Arial, Helvetica, sans-serif;
  }
</style>
