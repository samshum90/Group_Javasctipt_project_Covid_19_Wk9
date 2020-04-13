<template>
  <div>
      <li v-on:click="selectANeed">{{ need.name }}</li>
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

<style scoped>

</style>