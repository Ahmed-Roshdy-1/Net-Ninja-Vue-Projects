<template>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  background: #c59090;
  color: #444;
  font-family: Arial, Helvetica, sans-serif;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.container {
  /* width: 100%; */
  max-width: 960px;
  margin: 20px auto;
  border-radius: 20px;
  box-shadow: 2px 4px 6px rgba(28, 6, 49, 0.1);
  background: #fff;
}

.error {
  color: #fc2b3c;
  font-size: 14px;
}

.button {
  text-decoration: none;
  background: #f45;
  color: #fff;
  font-weight: bold;
  border-radius: 20px;
  padding: 10px 20px;
  border: none;
}

@media only screen and (max-width: 600px) {
  body {
    background: #ececec;
  }
}
</style>
