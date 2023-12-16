<template>
  <nav v-if="user">
    <div>
      <p>{{ user.displayName }}</p>
      <!-- <p class="email">{{ user.email }}</p> -->
    </div>
    <button class="button" @click="handleClick">Logout</button>
  </nav>
</template>

<script setup>
import useLogout from "@/composables/useLogout";
import getUser from "@/composables/getUser";

const { error, logout } = useLogout();
const { user } = getUser();

async function handleClick() {
  await logout();
  if (!error.value) {
    console.log("user logout");
  }
}
</script>

<style scoped>
nav {
  padding: 12px 10px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fdfdfd;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;

  /* min-width: 300px; */
}
nav p {
  margin: 2px auto;
  font-size: 16px;
  color: #444;
}
nav p.email {
  font-size: 14px;
  color: #999;
}

@media only screen and (max-width: 600px) {
  nav {
    width: 90%;
  }
}
</style>
