<template>
  <div>
      <need-list :needs="needs"></need-list>
      <need-detail></need-detail>
    <map-item :needs="needs"> </map-item>
  </div>
</template>

<script>
import MapItem from "@/components/MapItem.vue"
import NeedsList from "@/components/NeedsList.vue"
import NeedDetail from "@/components/NeedDetail.vue"
import NeedAdd from "@/components/NeedAdd.vue"

export default {
  name: "home",
    data(){
    return {
      needs: []
    }
  },
    components: {
    "map-item": MapItem,
    "need-list": NeedsList,
    "need-detail": NeedDetail,
    "need-add": NeedAdd
  },
  mounted(){
    fetch('http://localhost:3000/api/needs')
    .then( res => res.json())
    .then( needs => this.needs = needs )
  }
}
</script>

<style>

</style>