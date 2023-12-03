<template>
  <div v-if="projects.length">
    <filterNav
      @filterChange="current = $event"
      :current="current" />
    <div
      v-for="project in filterProjects"
      :key="project.id">
      <SingleProject
        :project="project"
        @delete="handleDelete"
        @complete="handleComplete" />
    </div>
  </div>
  <!-- {{ projects }} -->
</template>

<script>
  import SingleProject from "../components/SingleProject.vue";
  import FilterNav from "../components/FilterNav.vue";
  export default {
    name: "Home",
    components: { SingleProject, FilterNav },

    data() {
      return {
        projects: [],
        current: "all",
      };
    },
    methods: {
      handleDelete(id) {
        this.projects = this.projects.filter((project) => project.id != id);
      },
      handleComplete(id) {
        this.projects.every((project) => {
          console.log(project);
          if (project.id === id) {
            project.complete = !project.complete;
            return false;
          }
          return true;
        });
      },
      filterChange(by) {},
    },
    mounted() {
      fetch("http://localhost:3000/projects")
        .then((res) => res.json())
        .then((data) => (this.projects = data))
        .catch((err) => console.log(err.message));
    },
    computed: {
      filterProjects() {
        if (this.current === "completed") {
          return this.projects.filter((project) => project.complete);
        } else if (this.current === "ongoing") {
          return this.projects.filter((project) => !project.complete);
        }
        return this.projects;
      },
    },
  };
</script>

<style scoped></style>
