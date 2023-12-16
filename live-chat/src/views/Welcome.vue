<template>
  <div class="welcome container">
    <div v-if="showLogin">
      <h2>Login</h2>
      <LoginForm @login="enterChat" />
      <p>No account yet ? <span @click="showLogin = false">Signup</span> instead</p>
    </div>
    <div v-else>
      <h2>Sing up</h2>
      <SignupForm @signup="enterChat" />
      <p>Already registered ? <span @click="showLogin = true">Login</span> instead</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import LoginForm from "@/components/LoginForm.vue";
import SignupForm from "@/components/SignupForm.vue";
import { useRouter } from "vue-router";
const showLogin = ref(true);
const router = useRouter();
function enterChat() {
  router.push({ name: "Chatroom" });
}
</script>

<style>
.welcome {
  text-align: center;
  padding: 20px 0;
  max-width: 450px;
}

.welcome form {
  margin: 20px auto;
}

.welcome label {
  display: block;
  margin: 20px 0 10px;
}

.welcome input {
  width: 90%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #eee;
  outline: none;
  color: #999;
  margin: 15px 0;
}
.welcome span {
  font-weight: bold;
  cursor: pointer;
  text-decoration: underline;
}
.welcome .button {
  width: 100px;
  margin: 20px auto;
}
</style>
