<template>
  <div>
    <nav-bar> </nav-bar>
    <map-item> </map-item>
    <need-list></need-list>
  </div>
</template>

<script>
import MapItem from "@/components/MapItem.vue"
import NavBar from "@/components/NavBar.vue"
import NeedsList from "@/components/NeedsList.vue"



export default {
  name: 'App',
  components: {
    "map-item": MapItem,
    "nav-bar": NavBar,
    "need-list": NeedsList
  }
}
</script>

<style>

</style>
