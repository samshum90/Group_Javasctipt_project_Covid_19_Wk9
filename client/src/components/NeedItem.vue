<template>
  <div v-on:click="selectANeed" class="needitem">
    <h2>{{need.name}}'s requests</h2>
    <p >Content: {{ need.content }}</p>
    <p >Category: {{ need.category }}</p>
    <p>Postcode: {{ need.contactDetails.postCode }}</p>
    <p>Request date: {{ need.contactDetails.date}}</p>
    <p v-if="need.needStatus" class="help">Awaiting your help</p>
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
    } 
.help{
    padding: 10px;
    /* border:1px solid; */
    background-color: #FFEB3B;
    border-radius: 5px;
}
.needitem h2{
    background-color:#b3daff;
    padding: 2%;
    text-align: center; 
}

</style>