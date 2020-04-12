<template>
  <div>
    <form v-on:submit.prevent="HandleSubmitNeed">
      <h2>request help:</h2>
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" v-model="name" required/>
          
          <label for="content">Content:</label>
          <input type="text" id="content" name="content" v-model="content"/>
          
          <label for="needDescription">Description:</label>
          <input type="text" id="needDescription" name="needDescription" v-model="needDescription"/>
          
          <label for="category">Category:</label>
          <input type="text" id="category" name="category" v-model="category"/>
          
          <label for="contactnumber">Contact Number:</label>
          <input type="number" id="contactnumber" name="contactnumber" v-model="contactDetails.contactnumber" />
          
          <label for="email">Email:</label>
          <input type="text" id="email" name="email" v-model="contactDetails.email" />
          
          <label for="address">Address:</label>
          <input type="text" id="address" name="address" v-model="contactDetails.address" />
          
          <label for="postcode">Postcode:</label>
          <input type="text" id="postcode" name="postcode" v-model="contactDetails.postCode" />
          
          <label for="posttime">Post Time:</label>
          <input type="time" id="posttime" name="posttime" v-model="contactDetails.time" />
          
          <label for="postdate">Post Date:</label>
          <input type="date" id="postdate" name="postdate" v-model="contactDetails.date" />

           <input type="submit" name="submit" value="Save" />
    </form>
  </div>
</template>

<script>
import { eventBus } from "@/main.js";
export default {
  name: "need-form",
  components: {
  },
  props: {

  },
  data() {
    return {
      name: "",
      content: "",
      needDescription: "",
      needStatus: true,
      category: "",
      contactDetails:{
        contactnumber: "",
        email: "",
        address: "",
        postCode: "",
        time: "",
        date: "",
      }
    };
  },
    methods: {
    HandleSubmitNeed() {
		  event.preventDefault()
      eventBus.$emit("submit-need", this.$data);
      this.content = this.description = "";
      this.status = true;
    }
  }
};
</script>

<style>

</style>