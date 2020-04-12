<template>
  <div>
      <h2>Add need:</h2>
      <div>
            <form v-on:submit="addNeed">
              <label for="name">Name:</label>
              <input type="text" id="name" v-model="need.name"><br/>
              <label for="content">Content:</label>
              <input type="text" id="content" v-model="need.content"><br/>
              <label for="description">Description:</label>
              <input type="text" id="description" v-model="need.needDescription"><br/>
              <label for="category">Category:</label>
              <input type="text" id="category" v-model="need.category"><br/>
              <label for="number">Contact Number:</label>
              <input type="text" id="number" v-model="need.contactDetails.contactNumber"><br/>
              <label for="email">Email:</label>
              <input type="text" id="email" v-model="need.contactDetails.email"><br/>
              <label for="address">Address:</label>
              <input type="text" id="address" v-model="need.contactDetails.address"><br/>
              <label for="postcode">Postcode:</label>
              <input type="text" id="postcode" v-model="need.contactDetails.postCode"><br/>
              <label for="time">Post Time:</label>
              <input type="text" id="time" v-model="need.contactDetails.time"><br/>
              <label for="date">Post Date:</label>
              <input type="text" id="date" v-model="need.contactDetails.date"><br/>
              <input type="submit" value="add" id="add"/>
              
          </form>
          <button v-on:click="addNeed">ADD</button>
      
      </div>
  </div>
</template>

<script>
import { eventBus } from "@/main.js";

export default {
  name: "need-form",
  data() {
    return {
      status: true
    };
  },
  methods: {
    addNeed() {
		  event.preventDefault()
      eventBus.$emit("submit-need", this.$data);
      this.content = this.description = "";
      this.status = true;
    }
  }
};
</script>

<style scoped>

</style>