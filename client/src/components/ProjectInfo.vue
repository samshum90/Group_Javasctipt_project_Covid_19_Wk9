<template>
  <div class="project-container">    
    <h1 class="h1">Ask angela for help</h1><br><br>
    <div>
         <!-- <img class ="project_angela" src="https://i.pinimg.com/originals/3a/4f/70/3a4f702c1a3e138125e99ae7e4aa7b40.jpg" alt="dog test"> -->
    <img src="@/assets/angel.jpg" alt="Ask angel for help" align="left">
    <p>As the COVID-19 has seriously damaged human’s lives and the economy. Lots of 
        families are losing their lovers, lots of isolating people need help but lots 
        of key workers feel tired when they fight with the virus for long hours. 
        To reduce the burden of our key workers, lots of volunteers stand out and say 
        they can help. But how do the volunteers know who needs help, where are them 
        and what kind of needs are? Here we can build an app to do this job.</p>  
    </div>
    
  </div>
</template>

<script>
export default {
    name:"project_info"
}

</script>

<style lang="css" scoped>
.project-container{
    
    padding: 20px;
    text-align: center;
}

img{
    width: 20%;
    padding: 20px;
}

p{

    padding: 20px;
    text-align: left;
    font-size: 20px;
}
</style>