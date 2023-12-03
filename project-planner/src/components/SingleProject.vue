<template>
  <div
    class="project"
    :class="{ complete: project.complete }">
    <div class="actions">
      <h3 @click="showDetails = !showDetails">{{ project.title }}</h3>
      <div class="icona">
        <router-link :to="{ name: 'EditProject', params: { id: project.id } }">
          <span class="material-icons">edit</span>
          <!-- sds -->
        </router-link>
        <span
          class="material-icons"
          @click="deleteProject"
          >delete</span
        >
        <span
          @click="toggleComplete"
          class="material-icons done"
          >done</span
        >
      </div>
    </div>
    <div
      class="details"
      v-show="showDetails">
      <p>{{ project.details }}</p>
    </div>
  </div>
</template>

<script>
  import { RouterLink, RouterView } from "vue-router";
  export default {
    props: ["project"],
    data() {
      return {
        showDetails: false,
        url: "  http://localhost:3000/projects/" + this.project.id,
      };
    },
    methods: {
      deleteProject() {
        fetch(this.url, { method: "DELETE" })
          .then(() => this.$emit("delete", this.project.id))
          .catch((err) => console.log(err.message));
      },
      toggleComplete() {
        fetch(this.url, {
          method: "PATCH",
          headers: { "content-Type": "application/json" },
          body: JSON.stringify({ complete: !this.project.complete }),
        })
          .then(() => this.$emit("complete", this.project.id))
          .catch((err) => console.log(err.message));
      },
    },
  };
</script>

<style scoped>
  .project {
    width: 100%;
    margin: 20px auto;
    background: white;
    padding: 10px 20px;
    border-radius: 4px;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.05);
    border-left: 4px solid #e90074;
    transition: all linear 0.3s;
  }
  .complete {
    border-left: 4px solid #00ce89;
    transition: all linear 0.3s;
  }
  .complete .done {
    color: #00ce89;
  }
  h3 {
    cursor: pointer;
    transition: all linear 0.3s;
  }
  .actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .material-icons {
    font-size: 24px;
    margin-left: 10px;
    color: #bbb;
    cursor: pointer;
  }
  .material-icons:hover {
    color: #777;
  }
  .details {
    transition: all linear 0.3s;
  }
</style>
