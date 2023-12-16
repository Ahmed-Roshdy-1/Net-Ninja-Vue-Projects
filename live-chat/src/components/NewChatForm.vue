<template>
  <form style="position: relative">
    <textarea
      placeholder="Type a message and hit enter to send ..."
      v-model="message"
      @keypress.enter.prevent="handleSubmit"
    ></textarea>
    <div class="error">{{ error }}</div>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 24 24"
      :class="{ active: message != '' }"
      @click="handleSubmit"
    >
      <path
        d="m21.426 11.095-17-8A.999.999 0 0 0 3.03 4.242L4.969 12 3.03 19.758a.998.998 0 0 0 1.396 1.147l17-8a1 1 0 0 0 0-1.81zM5.481 18.197l.839-3.357L12 12 6.32 9.16l-.839-3.357L18.651 12l-13.17 6.197z"
      ></path>
    </svg>
  </form>
</template>

<script setup>
import getUser from "@/composables/getUser";
import { ref } from "vue";
import { serverTimestamp } from "firebase/firestore";
import useCollection from "../composables/useCollection";

const { error, addDoc2 } = useCollection("messages");

const message = ref("");
const { user } = getUser();

async function handleSubmit() {
  if (message.value) {
    const chat = {
      name: user.value.displayName,
      message: message.value,
      createdAt: serverTimestamp(),
      email: user.value.email,
    };
    if (!error.value) {
      message.value = "";
    }

    await addDoc2(chat);
  }
}
</script>

<style scoped>
/* form {
  margin: 10px; 
 background: #e6e6e6; 
  border-radius: 20px;
} */
textarea {
  /* margin-top: 20px; */
  width: 103%;
  max-width: 100%;
  /* margin-bottom: 6px; */
  padding: 15px 10px;
  box-sizing: border-box;
  border: 0;
  border-radius: 5px;
  font-family: inherit;
  outline: none;
  border: #f45 solid 2px;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
}

svg {
  fill: #868686;
  position: absolute;
  right: 0;
  top: 12px;
  transition: all linear 0.2s;
}
.active {
  fill: #f45;
}
@media only screen and (max-width: 600px) {
  form {
    width: 90%;
  }
}
</style>
