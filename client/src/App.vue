<template>
  <div>
    <nav-bar> </nav-bar>
    <router-view/>

  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue"
export default {
  name: 'App',
  data(){
    return {
      needs: []
    }
  },
  components: {
    "nav-bar": NavBar,
  }
}
</script>

<style>
.h1{
  background-color:#b3daff;
 padding: 30px;
  text-align: center; 
}


</style>