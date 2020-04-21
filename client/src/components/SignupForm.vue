<template>
  <div class="signup">
    <label for="name">
      <b>Username</b>
    </label>
    <input v-model="user.name" />

    <label for="email">
      <b>Email</b>
    </label>
    <input v-model="user.email" />

    <label for="password">
      <b>Password</b>
    </label>
    <input v-model="user.password" />
    <input value="Submit" type="button" v-on:click="submitForm" />
  </div>
</template>

<script>
export default {
  name: "signup-form",
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: ""
      }
    };
  },
  methods: {
    submitForm() {
      const output = JSON.stringify(this.user);
      console.log(output);
      var xhr = new XMLHttpRequest();
      var url = "http://localhost:3000/api/users";
      xhr.open("POST", url, true);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.send(output);
      console.log(xhr.response);
    }
  }
};
</script>

<style>
</style>