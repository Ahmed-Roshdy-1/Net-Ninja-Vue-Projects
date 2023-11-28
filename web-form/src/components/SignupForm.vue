<template>
  <form @submit.prevent="handleSubmit">
    <label> Email: </label>
    <input
      type="email"
      required
      v-model="email" />
    <label> Password: </label>
    <input
      type="password"
      required
      v-model="password" />
    <div
      v-if="passwordError"
      class="error">
      {{ passwordError }}
    </div>
    <label> Role: </label>
    <select v-model="role">
      <option value="developer">Web Developer</option>
      <option value="designer">Web Designer</option>
    </select>
    <label> skills: </label>
    <input
      type="text"
      v-model="tempSkill"
      @keyup="addSkill" />

    <div>
      <span
        v-for="(skill, i) in skills"
        :key="i"
        @click="deleteFun(i)"
        >{{ skill }}</span
      >
    </div>

    <div class="terms">
      <input
        type="checkbox"
        v-model="terms"
        required />
      <label>Accept terms and conditions</label>
    </div>
    <div class="submit">
      <button>Create an Account</button>
    </div>
  </form>
  <!-- <p>Email: {{ email }}</p>
  <p>password: {{ password }}</p>
  <p>role: {{ role }}</p>
  <p>terms: {{ terms }}</p>
  <p>skills {{ skills }}</p> -->
  <!-- <p>names: {{ names }}</p> -->
</template>

<script>
  export default {
    data() {
      return {
        email: "",
        password: "",
        role: "",
        terms: false,
        //   names: [],
        tempSkill: "",
        skills: [],
        passwordError: "",
      };
    },
    methods: {
      addSkill(e) {
        //   console.log(e);
        if (e.key == "," && this.tempSkill) {
          console.log(e.key);
          let value = this.tempSkill.slice(0, this.tempSkill.length - 1);
          value = value.trim();
          if (!this.skills.includes(value) && value != "" && value != " ") {
            this.skills.push(value);
          }

          console.log(this.skills);
          this.tempSkill = "";
        }
        if (e.key == "Enter" && this.tempSkill) {
          console.log(e.key);
          let value = this.tempSkill;
          value = value.trim();
          console.log("value\n" + value);
          if (!this.skills.includes(value) && value != "" && value != " ") {
            this.skills.push(value);
          }

          console.log(this.skills);
          this.tempSkill = "";
        }
      },
      deleteFun(i) {
        this.skills.splice(i, 1);
      },
      handleSubmit() {
        console.log("hi");
        this.passwordError =
          this.password.length > 5 ? "" : "Password must be at least 6 chars long";

        if (!this.passwordError) {
          console.log("email : " + this.email);
          console.log("password : " + this.password);
          console.log("role : " + this.role);
          console.log("skills : " + this.skills);
          console.log("terms : " + this.terms);
          this.email = "";
          this.password = "";
          this.role = "";
          this.skills = [];
          this.terms = false;
        }
      },
    },
  };
</script>

<style scoped>
  form {
    max-width: 420px;
    margin: 30px auto;
    background: #fff;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 0 1.2rem 1.2rem #18919157;
    transition: all linear 0.4s;
  }

  label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 5px;
    font-size: 0.8em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
  }

  input,
  select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    border: none;
    border-bottom: 3px solid #dddddd00;
    color: #555;
    outline: none;
    transition: all linear 0.3s;
  }
  input:focus,
  select:focus {
    border-bottom: 3px solid #189191;
  }
  .error {
    color: rgb(104, 41, 41);
    font-size: 0.8rem;
  }
  input[type="checkbox"] {
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
  }
  div {
    display: flex;

    gap: 0.5rem;
    margin-top: 0.5rem;
    color: #fff;
    font-weight: bold;
    flex-wrap: wrap;
  }
  span {
    background: #189191;
    padding: 0 0.7rem;
    border-radius: 0.4rem;
    cursor: pointer;
  }
  .submit {
    text-align: center;
    align-content: center;
  }
  button {
    width: 100%;
    background: #189191;
    border: none;
    padding: 10px 20px;
    margin-top: 20px;
    color: #fff;
    border-radius: 20px;
    box-shadow: 0 0 1rem 0.2rem #0e4d48b4;
    transition: all linear 0.3s;
  }
  button:active {
    transform: scale(0.9);
  }
  /* .names {
  display: flex;
  gap: 1rem;
} */
</style>
