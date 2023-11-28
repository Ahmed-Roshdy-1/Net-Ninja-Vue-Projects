<template>
  <h1>Reaction Timer</h1>
  <button @click="start" :disabled="isPlaying">Play</button>
  <Block v-if="isPlaying" :delay="delay" @end="endGame" />
  <Results :score="result" v-if="showresult" />
</template>

<script>
import Block from "./components/Block.vue";
import Results from "./components/Results.vue";

export default {
  name: "app",
  data() {
    return {
      isPlaying: false,
      delay: null,
      result: null,
      showresult: false,
    };
  },
  components: { Block, Results },
  methods: {
    start() {
      this.delay = 2000 + Math.random() * 5000;
      this.isPlaying = true;
      this.showresult = false;
    },
    endGame(reactionTime) {
      this.result = reactionTime;
      this.isPlaying = false;
      this.showresult = true;
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
}
button {
  padding: 0.5rem 1rem;
  font-size: 2rem;
  outline: none;
  background: transparent;
  border: none;
  border-radius: 0.3rem;
  box-shadow: 0 0 1rem #fff;
  color: #fff;
  transition: all linear 1s;
}
button:active {
  transform: scale(0.5);
}

button:disabled {
  background: #7e7e7e;
}

button:disabled:active {
  transform: none;
}
</style>
