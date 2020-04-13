<template>
  <div v-on:click="selectANeed" class="needitem">
      <p >Content: {{ need.content }}</p>
      <p >Category: {{ need.category }}</p>
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
    .needitem{
        border: 1px solid;
        border-radius: 5px;
        margin: 10px;
        padding: 10px;
        cursor: pointer;
    } 
.help{
    padding: 10px;
    /* border:1px solid; */
    background-color: #FFEB3B;
    border-radius: 5px;

}

</style>