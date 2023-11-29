<template>
  <div class="web">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink :to="{ name: 'about' }">About</RouterLink>
      <RouterLink :to="{ name: 'jobs' }">Jobs</RouterLink>
    </nav>

    <div class="mt" style="margin-top: 5rem">
      <div class="row">
        <button @click="redirect">Redirect</button>
        <button @click="back">Go back</button>
        <button @click="forward">Go forward</button>
      </div>
      <RouterView />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    redirect() {
      this.$router.push({ name: "home" });
    },
    back() {
      this.$router.go(-1);
    },
    forward() {
      this.$router.go(1);
    },
  },
};
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
.web {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
button {
  background: #adadad;
  padding: 0.5rem 0.8rem;
  border: none;
}
.mt {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  display: inline-block;
  position: fixed;
  top: 0rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}
.row {
  display: flex;
  gap: 2rem;
  margin-bottom: 4rem;
}
nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
