<template>
  <div class="list-container">
      <h2>All the Needs Info</h2>
      <ul>
          <need-item v-for="(need, index) in needs" :need="need" :key="index"></need-item>
      </ul>
      <need-detail></need-detail>
  </div>
</template>

<script>
import { eventBus } from '@/main.js';
import NeedItem from './NeedItem.vue';
import NeedService from '@/services/NeedService.js';
import AddNeed from '@/components/AddNeed.vue';
import NeedDetail from "@/components/NeedDetail.vue"

export default {
    name: "needs-list",
    props: ['needs'],
    components: {
      "need-item": NeedItem,
      "add-need" : AddNeed,
      "need-detail": NeedDetail,
    },
    data(){
      return {
    
      }
    },
    mounted(){
      eventBus.$on('submit-need', (need) => {
        NeedService.addNeed(need)
        .then(needWithId => this.needs.push(needWithId))
    })
      eventBus.$on('delete-a-need', (id) => {
        let index = this.needs.findIndex(need => need._id === id);
        this.needs.splice(index,1);
      })
      eventBus.$on('update-a-need', needToUpdate => {
        const updateNeed = {...needToUpdate};
        NeedService.updateNeed(updateNeed);
        const index = this.needs.findIndex(need => need._id === needToUpdate._id);
        this.needs.splice(index, 1, updateNeed);
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
