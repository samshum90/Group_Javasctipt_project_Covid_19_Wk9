<template>
  <div v-on:click="selectANeed" class="needitem">
    <h3>{{need.name}}'s Requests</h3>
    <p >Content: {{ need.content }}</p>
    <p >Category: {{ need.category }}</p>
    <p>Postcode: {{ need.contactDetails.postCode }}</p>
    <p>Request date: {{ need.contactDetails.date}}</p>
    <p v-if="need.needStatus" class="help">Awaiting your help</p>
    <p v-if="!need.needStatus" class="helped">Thank you for your help</p>
    <P>Click on me for more details on how to help</P>

  </div>
</template>

<script>
import { eventBus } from '@/main.js';
export default {
    name: "need-item",
    props: ['need'],
    methods: {
        selectANeed() {
            eventBus.$emit('select-a-need',this.need);    
        }
    }
}
</script>

<style>
.needitem p{
    margin: 7px 0px;
    } 
.needitem{
    border: 1px solid;
    border-radius: 5px;
    margin: 5px;
    padding: 10px;
    cursor: pointer;
    box-shadow: 2.5px 5px 10px #888888;
} 
.help{
    padding: 10px;
    background-color: #FFEB3B;
    border-radius: 5px;
}
.helped{
    padding: 10px;
    background-color: #4CAF50;
    border-radius: 5px;
}
.needitem h3{
    background-color:#b3daff;
    padding: 2%;
    text-align: center; 
}

</style>