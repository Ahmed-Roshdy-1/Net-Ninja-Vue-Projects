<template>
  <div class="chat-window" ref="chat">
    <div v-if="error">{{ error }}</div>
    <div class="messages" ref="chatMessages">
      <div v-for="doc in formattedDocuments" :key="doc.id" class="single">
        <span class="name" style="font-size: 12px"
          >{{ doc.email == user.email ? "you" : doc.name }}
        </span>
        <span class="message" :class="{ active: doc.email == user.email }">{{ doc.message }}</span>
        <span class="created-at">{{ doc.createdAt }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import getCollection from "@/composables/getCollection";
import { formatDistanceToNow } from "date-fns";
import { computed, onUpdated, ref } from "vue";
import getUser from "@/composables/getUser";

const chatMessages = ref(null);

const { error, documents } = getCollection("messages");
const formattedDocuments = computed(() => {
  if (documents.value) {
    return documents.value.map((doc) => {
      let time = formatDistanceToNow(doc.createdAt.toDate());
      return { ...doc, createdAt: time };
    });
  }
});
onUpdated(() => {
  chatMessages.value.scrollTop = chatMessages.value.scrollHeight;
});

//

const { user } = getUser();
</script>

<style scoped>
.chat-window {
  background: #e6e6e6;
  padding: 30px 20px;
}

.messages::-webkit-scrollbar {
  width: 10px;
}

/* Track */
.messages::-webkit-scrollbar-track {
  background: rgb(141, 141, 141);
  border-radius: 5px;
}

/* Handle */
.messages::-webkit-scrollbar-thumb {
  background: #f45;
  border-radius: 5px;
}

/* Handle on hover */
.messages::-webkit-scrollbar-thumb:hover {
  background: #b30000;
}
.single {
  margin: 18px 0;
}

.created-at {
  display: block;
  color: #999;
  font-size: 12px;
  margin-bottom: 4px;
}

.name {
  font-weight: bold;
  margin-right: 6px;
}

.messages {
  max-height: 400px;
  overflow: auto;
  /* width: 100%; */
}
.message {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #616161;
  padding: 4px 15px;
  color: #fff;
  width: fit-content;
  max-width: 90%;
  text-align: center;
  border-radius: 20px;
  line-height: 1.4rem;
}

.active {
  background: #f45;
}

@media only screen and (max-width: 600px) {
  .chat-window {
    width: 90%;
  }
}
</style>
