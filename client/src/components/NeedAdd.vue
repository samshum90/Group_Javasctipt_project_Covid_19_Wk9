<template>

  <div class="form-container">
    <form v-on:submit.prevent="HandleSubmitNeed" class="form">

       <h1 class="h1">Post a request</h1>
        <p>Please fill in this form to create a request.</p>
        
          <label for="name">Name:
            <input type="text" placeholder="John Doe" id="name" name="name" v-model="name" required/>
          </label>

          <label for="content">Content:
            <input type="text" placeholder="Milk, Oats & Painkillers... " id="content" name="content" v-model="content"/>
          </label>

          <label for="needDescription">Description:
            <input type="text" placeholder="specific requirements..." id="needDescription" name="needDescription" v-model="needDescription" />
          </label>

          <label for="category">Category:
            <input type="text" id="category" name="category" v-model="category" required/>
          </label>

          <label for="contactnumber">Contact Number:
            <input type="number" placeholder="07711667566" id="contactnumber" name="contactnumber" v-model="contactDetails.contactnumber" required/>
          </label>

          <label for="email">Email:
            <input type="text" placeholder="johndoe@hotmail.com" id="email" name="email" v-model="contactDetails.email" required/>
          </label>

          <label for="address">Address:
            <input type="text" placeholder="10 Featherhall Avenue, Corstorphine" id="address" name="address" v-model="contactDetails.address" required/>
          </label>

          <label for="postcode">Postcode:
            <input type="text" placeholder="EH12 7TQ" id="postcode" name="postcode" v-model="contactDetails.postCode" required/>
          </label>

          <label for="posttime">Post Time:
            <input type="time" id="posttime" name="posttime" v-model="contactDetails.time" />
          </label>

          <label for="postdate">Post Date:
            <input type="date" id="postdate" name="postdate" v-model="contactDetails.date" />
          </label>
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
      locations: null,
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
        lat: "",
        lon: ""
      }
    };
  },
    methods: {
    async HandleSubmitNeed() {
      event.preventDefault();
      const url = 'https://nominatim.openstreetmap.org/search?format=json&q='+this.contactDetails.address;
      await fetch(url)
      .then( res => res.json())
      .then( location => {
        this.contactDetails.lat = location[0].lat;
        this.contactDetails.lon = location[0].lon;
        console.log(`inside then:${this.contactDetails.lat}`);
      });
      
      const payload = {
        name: this.name,
        content: this.content,
        needDescription: this.needDescription,
        needStatus: this.needStatus,
        category: this.category,
        contactDetails:{
          contactnumber: this.contactDetails.contactnumber,
          email: this.contactDetails.email,
          address: this.contactDetails.address,
          postCode: this.contactDetails.postCode,
          time: this.contactDetails.time,
          date: this.contactDetails.date,
          lat: this.contactDetails.lat,
          lon: this.contactDetails.lon
       }
      }
      eventBus.$emit("submit-need", payload);

    }
  }
};
</script>

<style>
.form-container{
  display: flex;
  font-family: Arial, Helvetica, sans-serif;
  background-color: white;
  justify-content: center;
}

.form{
  padding: 16px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 60%;
  align-content: center;
}

.savebtn:hover {
  opacity: 1;
}

input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

/* Full-width input fields */
input[type=text], input[type=password], input[type=number] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type=text]:focus, input[type=password]:focus, input[type=number]:focus {
  background-color: #ddd;
  outline: none;
}

</style>