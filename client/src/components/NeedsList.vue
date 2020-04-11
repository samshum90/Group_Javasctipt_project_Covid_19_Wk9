<template>
  <div class="list-container">
      <h2>All the Needs Info</h2>
      <ul>
          <need-item v-for="(need, index) in needs" :need="need" :key="index"></need-item>
      </ul>
  </div>
</template>

<script>
import { eventBus } from '@/main.js'
import NeedItem from './NeedItem.vue'

export default {
    name: "needs-list",
    props: ['needs'],
    components: {
      "need-item": NeedItem
    },
    mounted(){
      eventBus.$on('delete-a-need', (id) => {
        let index = this.needs.findIndex(need => need._id === id);
        this.needs.splice(index,1);
      })
    }
}

</script>

<style lang="css" scoped>
.list-container{background-color: darkgray;
    border: darkslategrey;
    border-radius: 12px;
    padding: 2%;
    margin: 4%;
    width: 80%;
    position: relative;
    top: 20%;
}
</style>