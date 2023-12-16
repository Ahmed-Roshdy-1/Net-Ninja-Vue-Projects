<template>
  <form @submit.prevent="handleSubmot">
    <input type="email" required placeholder="email" v-model="email" />
    <input type="password" required placeholder="password" v-model="password" />
    <div class="error">{{ error }}</div>
    <button class="button">Log In</button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import useLogin from "../composables/useLogin.js";

const emits = defineEmits();

const email = ref("");
const password = ref("");
const { error, login } = useLogin();

async function handleSubmot() {
  await login(email.value, password.value);
  if (!error.value) {
    console.log("user logged in");
    emits("login");
  }
}
</script>

<style scoped></style>
