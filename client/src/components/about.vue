<template>

<div class="about-container"><br>
  <h1 class="h1">The Team</h1><br><br>
  <div class="column">
    <img class ="jun" src="@/assets/jun_profile.jpeg" alt="jun profile">
    <h2>Jun</h2>
    <p><a href="https://github.com/junwu1976">Visit Jun on github</a></p>
  </div>
  
  <div class="column">
    <img class ="andrew" src="@/assets/andrew_profile.jpeg" alt="andrew profile">
    <h2>Andrew</h2>
    <p><a href="https://github.com/atrp87">Visit Andrew on github</a></p>
  </div>

  
  <div class="column">
    <img class ="sam" src="@/assets/sam_profile.jpeg" alt="sam profile">
    <h2>Sam</h2>
    <p><a href="https://github.com/samshum90">Visit Sam on github</a></p>
  </div>

</div>


</template>

<script>
export default {
    name:"about"
}
</script>

<style>
.about-container{
  padding: 20px;
  text-align: center;
}
  
.column {
  float: left;
  width: 33.33%;
}

img{
  width: 200px;

}

</style>