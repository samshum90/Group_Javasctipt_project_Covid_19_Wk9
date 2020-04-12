<template>
  <div>
    <need-list :needs="needs"></need-list>
    <need-detail></need-detail>
    <nav-bar> </nav-bar>
<<<<<<< HEAD
    <map-item> </map-item>
    
=======
    <router-view/>
>>>>>>> feature/navbar
  </div>
</template>

<script>
import MapItem from "@/components/MapItem.vue"
import NavBar from "@/components/NavBar.vue"
import NeedsList from "@/components/NeedsList.vue"
import NeedDetail from "@/components/NeedDetail.vue"


export default {
  name: 'App',
  data(){
    return {
      needs: []
    }
  },
  components: {
    "map-item": MapItem,
<<<<<<< HEAD
    "nav-bar": NavBar,
    "need-list": NeedsList,
    "need-detail": NeedDetail
  },
  mounted(){
    fetch('http://localhost:3000/api/needs')
    .then( res => res.json())
    .then( needs => this.needs = needs )
=======
    "nav-bar": NavBar
>>>>>>> feature/navbar
  }
}
</script>

<style>

</style>
