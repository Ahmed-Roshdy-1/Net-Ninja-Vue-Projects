<template>
  <div class="container chatroom">
    <navbar />
    <ChatWindow />
    <NewChatForm />
  </div>
</template>

<script setup>
import NewChatForm from "@/components/NewChatForm.vue";
import navbar from "@/components/navbar.vue";
import ChatWindow from "@/components/ChatWindow.vue";
import getUser from "@/composables/getUser";
import { watch } from "vue";
import { useRouter } from "vue-router";

const { user } = getUser();
const router = useRouter();

watch(user, () => {
  if (!user.value) {
    router.push("/");
  }
});
</script>

<style scoped>
.chatroom {
  background: transparent;
}
@media only screen and (max-width: 600px) {
  .chatroom {
    width: 100%;
    height: 100%;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    bottom: 0;
    box-shadow: none;
  }
}
</style>
