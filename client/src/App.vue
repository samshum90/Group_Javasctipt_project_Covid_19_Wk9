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

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

/* Style the side navigation */
.sidenav {
  height: 100%;
  width: 200px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
}


/* Side navigation links */
.sidenav a {
  color: white;
  padding: 16px;
  text-decoration: none;
  display: block;
}

/* Change color on hover */
.sidenav a:hover {
  background-color: #ddd;
  color: black;
}

/* Style the content */
.content {
  margin-left: 200px;
  padding-left: 20px;
}

</style>
