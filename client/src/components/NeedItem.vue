<template>
<div>
  <div v-on:click="selectANeed" class="needitem">
      <p >{{ need.content }}</p>
      <p >{{ need.category }}</p>
      <p >{{ need.needStatus }}</p>
  </div>
</div>
</template>

<script>
import { eventBus } from '@/main.js';

export default {
    name: "need-item",
    props: ['need'],
    components:{
    },
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
        border-radius: 10px;
        margin: 10px
    }

</style>