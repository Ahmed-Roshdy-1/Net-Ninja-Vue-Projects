<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" required placeholder="user name" v-model="userName" />
    <input type="email" required placeholder="email" v-model="email" />
    <input type="password" required placeholder="password" v-model="password" />
    <div class="error">{{ error }}</div>
    <button class="button">Sign up</button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import useSignup from "../composables/useSignup.js";

const { error, signup } = useSignup();

const userName = ref("");
const email = ref("");
const password = ref("");

const emits = defineEmits();

async function handleSubmit() {
  // console.log(userName.value, email.value, password.value);
  await signup(email.value, password.value, userName.value);
  if (!error.value) {
    console.log("user logged in");
    emits("signup");
  }
}
</script>

<style scoped></style>
