<template>
  <div>
    <h1>Reaction time {{ score }}ms</h1>
    <p class="rank">{{ rank }}</p>
  </div>
</template>

<script>
export default {
  name: "Results",
  props: ["score"],
  data() {
    return {
      rank: null,
    };
  },
  mounted() {
    if (this.score < 250) {
      this.rank = "Ninija Fingers";
    } else if (this.score < 400) {
      this.rank = "Rapid Reflexes";
    } else {
      this.rank = "Snail pace...";
    }
  },
};
</script>

<style scoped>
h1 {
  color: #fff;
  font-size: 2rem;
}
.rank {
  font-size: 1.4rem;
  color: #0faf87;
  font-weight: bold;
  text-align: center;
}
</style>
