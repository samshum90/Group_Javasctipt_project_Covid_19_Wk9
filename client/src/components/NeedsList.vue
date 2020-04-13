<template>
  <div class="list-container">
    <span class="title">
      <h2>These people need your help</h2>
    </span>
      <need-item v-for="(need, index) in needs" :need="need" :key="index">        
      </need-item>
         <need-detail></need-detail>
  </div>
</template>

<script>
import { eventBus } from '@/main.js';
import NeedItem from './NeedItem.vue';
import NeedService from '@/services/NeedService.js';
import NeedDetail from "@/components/NeedDetail.vue"
export default {
    name: "needs-list",
    props: ['needs'],
    components: {
      "need-item": NeedItem,
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
        this.$router.push({ name: 'home' });
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
.title{
  background-color:#b3daff;
  padding: 20px;
  text-align: center;
  width: 100%
}
  
.column {
  float: left;
  width: 33.33%;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

.list-container{
  display: flex;
  flex-direction: column;
  font-family: Arial, Helvetica, sans-serif;
  background-color: white;
  justify-content: center;
}
</style>
