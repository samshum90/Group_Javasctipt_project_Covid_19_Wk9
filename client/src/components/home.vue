<template>
  <div>
    <div id="button-container" class="sticky-top">
      <button v-on:click="mapHidden = !mapHidden, listHidden = !listHidden">
        <font-awesome-icon icon="map-marked-alt" id="icon"/>  Map 
        </button>
      <button v-on:click="listHidden = !listHidden, mapHidden = !mapHidden">
        <font-awesome-icon icon="list-ul" id="icon"/> List 
      </button>
    </div>
      <need-list v-if="!listHidden"
      :needs="needs"></need-list>
        <map-item
        v-if="!mapHidden"
        :needs="needs"
      ></map-item>
  </div>
</template>

<script>
import MapItem from "@/components/MapItem.vue"
import NeedsList from "@/components/NeedsList.vue"
import NeedAdd from "@/components/NeedAdd.vue"

import { eventBus } from '@/main.js'
export default {
  name: "home",
    data(){
    return {
      needs: [],
      mapHidden: true,
      listHidden: false
    }
  },
    components: {
    "map-item": MapItem,
    "need-list": NeedsList,
    "need-add": NeedAdd
  },
  created(){
    console.log('Created is being triggered!')
  },
  mounted(){
    console.log('Mounted is being triggered!')
    fetch('http://localhost:3000/api/needs')
    .then( res => res.json())
    .then( needs => this.needs = needs )
    }
  }

</script>

<style>
#icon{
  margin-right: 10px;
}
#button-container{
  text-align: right;
  margin-right: 50px;
  z-index: 10;
}
#button-container button{
  border:black 10px;
  padding: 10px 20px;
  background-color: #80A1D4;
  color: #F7F4EA;
}
#button-container button:hover{
  padding: 10px 20px;
  background-color: #5A7296;
  color: #F7F4EA;
}
</style>