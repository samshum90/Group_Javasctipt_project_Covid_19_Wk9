<template>
  <div>
      <h1 class="h1">{{ countNeedsWaiting }} people need your help</h1>
      <h2 class="need-done" data-toggle="tooltip" title="requests completed">
        Together we have completed {{ countNeedsDone }} requests</h2>
    <span class="main-container">
    <span class="list-container">
      <need-item v-for="(need, index) in needs" :need="need" :key="index">        
      </need-item>
    </span>
    <span class="detail-container">
    <need-detail></need-detail>
    </span>
    </span>
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
    computed: {
      countNeedsDone(){
        let needsDone = 0;
        for(const need of this.needs){
          if(need.needStatus === false ){
            needsDone ++;
          }
        }
        return needsDone;
      },
      countNeedsWaiting(){
        let needsWait = 0;
        for(const need of this.needs){
          if(need.needStatus === true ){
            needsWait ++;
          }
        }
        return needsWait;
      }
    },
    mounted(){
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
      eventBus.$on('status-change', needToChange => {
       const updateNeed = {...needToChange, needStatus: !needToChange.needStatus}
       NeedService.updateNeed(updateNeed);
       const index = this.needs.findIndex(need => need._id === needToChange._id);
      this.needs.splice(index, 1, updateNeed);
      })
    }
}
</script>

<style lang="css">
.need-done{
  background-color: #4CAF50;
  color: white;
  padding: 10px;
  font-size: 18px;
  margin: 10px;
  cursor: pointer;
  text-align: center; 
   opacity: 0.9;
}

.main-container{
  display: grid;
  grid-template-columns: 50% 50%;
}
.needslist{
  display: flex;
  flex-direction: column;
}
.title{
  background-color:#b3daff;
  padding: 20px;
  text-align: center;
  width: 100%
}
.list-container{
  display: flex;
  flex-direction: column;
  font-family: Arial, Helvetica, sans-serif;
  background-color: white;
  margin: 5px;
}
.detail-container{
  margin: 10px 20px 10px 10px;

}
</style>