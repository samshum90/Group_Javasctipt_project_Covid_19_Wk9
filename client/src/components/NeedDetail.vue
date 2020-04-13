<template>
  <div class="need-detail" v-if="need!=null">
        <form v-on:submit="updateNeed" class="detailform">
            <h2 class="h1">More details</h2>
                
                <label for="name">Name:
                    <input type="text" placeholder="John Doe" id="name" name="name" v-model="need.name" required/>
                </label>

                <label for="content">Content:
                    <input type="text" placeholder="Milk, Oats & Painkillers... " id="content" name="content" v-model="need.content"/>
                </label>

                <label for="needDescription">Description:
                    <input type="text" placeholder="specific requirements..." id="needDescription" name="needDescription" v-model="need.needDescription" />
                </label>

                <label for="category">Category:
                    <input type="text" id="category" name="category" v-model="category" required/>
                </label>

                <label for="contactnumber">Contact Number:
                    <input type="number" placeholder="07711667566" id="contactnumber" name="contactnumber" v-model="need.contactDetails.contactnumber" required/>
                </label>

                <label for="email">Email:
                    <input type="text" placeholder="johndoe@hotmail.com" id="email" name="email" v-model="need.contactDetails.email" required/>
                </label>

                <label for="address">Address:
                    <input type="text" placeholder="10 Featherhall Avenue, Corstorphine" id="address" name="address" v-model="need.contactDetails.address" required/>
                </label>

                <label for="postcode">Postcode:
                    <input type="text" placeholder="EH12 7TQ" id="postcode" name="postcode" v-model="need.contactDetails.postCode" required/>
                </label>

                <label for="posttime">Post Time:
                    <input type="time" id="posttime" name="posttime" v-model="need.contactDetails.time" />
                </label>

                <label for="postdate">Post Date:
                    <input type="date" id="postdate" name="postdate" v-model="need.contactDetails.date" />
                </label>

            <input type="submit" value="Update" id="update"/>
            <input type="submit" value="Delete" v-on:click="deleteNeed"/>
            <input type="submit" value="I will fulill the request" v-if="need.needStatus" v-on:click="handleUpdate"/>
            
          </form>
      </div>
</template>

<script>
import { eventBus } from '@/main.js';
import NeedService from '@/services/NeedService.js';
export default {
    name: "need-detail",
    data(){
        return {
            need: null
        }
    },
    mounted(){
        eventBus.$on('select-a-need', selectedNeed => this.need = selectedNeed);
    },
    methods:{
        updateNeed(event){
            event.preventDefault();
            eventBus.$emit('update-a-need', this.need);
        },
        deleteNeed(){
            NeedService.deleteNeed(this.need._id)
            .then(() => {
                eventBus.$emit('delete-a-need', this.need._id );
                this.need = null;
            })
        },
        handleUpdate: function() {
            eventBus.$emit("status-change", this.need);
        },
    }
}
</script>

<style >
.need-detail{
    width: 100%;
    display: flex;
    font-family: Arial, Helvetica, sans-serif;
    background-color: white;
    justify-content: center;
}

.detailform{
  padding: 16px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  width: 100%;
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