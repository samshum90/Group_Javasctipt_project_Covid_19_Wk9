<template>
  <div class="project-container">    
    <h1 class="h1">{{ $t('message.projectInfo.title') }}</h1><br><br>
    <div>
    <img src="@/assets/angel.jpg" alt="Ask angel for help" align="left">
      <p>{{ $t('message.projectInfo.content') }}</p>
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
    height: 350px;
    width: auto;
    padding: 20px;
}

p{
    padding: 20px;
    text-align: left;
    font-size: 20px;
}
</style>