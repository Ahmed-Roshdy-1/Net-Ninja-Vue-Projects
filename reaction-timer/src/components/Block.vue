<template>
  <div class="block" v-if="showBox" @click="stopTimer">Click Me</div>
</template>

<script>
export default {
  name: "block",
  props: ["delay"],

  data() {
    return {
      showBox: false,
      timer: null,
      reactionTime: 0,
    };
  },
  mounted() {
    console.log("block\n" + this.delay);
    setTimeout(() => {
      this.showBox = true;
      this.startTimer();
    }, this.delay);
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.reactionTime += 10;
      }, 10);
    },
    stopTimer() {
      clearInterval(this.timer);
      console.log(this.reactionTime);
      this.$emit("end", this.reactionTime);
    },
  },
};
</script>

<style scoped>
.block {
  width: 50%;
  border-radius: 20px;
  background: #0faf87;
  color: #fff;
  text-align: center;
  padding: 100px 0;
  margin: 40px auto;
}
</style>
