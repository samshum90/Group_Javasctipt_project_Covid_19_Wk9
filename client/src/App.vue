<template>
  <div>
    <nav-bar> </nav-bar>
    <map-item> </map-item>
  </div>
</template>

<script>
import MapItem from "@/components/MapItem.vue"
import NavBar from "@/components/NavBar.vue"

export default {
  name: 'App',
  components: {
    "map-item": MapItem,
    "nav-bar": NavBar

  }
}
</script>

<style>

</style>
