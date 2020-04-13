<template>
  <div>
    <div class="button-container">
      <button v-on:click="mapHidden = !mapHidden">Map </button>
      <button v-on:click="listHidden = !listHidden">list </button>
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
  mounted(){
    fetch('http://localhost:3000/api/needs')
    .then( res => res.json())
    .then( needs => this.needs = needs )

  },
  methods: {

  }
}
</script>

<style>
.button-container{
  text-align: right;
}
</style>