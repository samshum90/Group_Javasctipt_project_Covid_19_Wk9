<template>

<div class="about-container"><br>
  <h1 class="h1">The Team</h1><br><br>
  <div class="column">
    <img class ="jun" src="https://media.istockphoto.com/photos/cheeta-picture-id945521030" alt="dog test">
    <h2>Jun</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, 
      purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis.</p>
  </div>
  
  <div class="column">
    <img class ="andrew" src="https://media.istockphoto.com/photos/cheeta-picture-id945521030" alt="dog test">
    <h2>Andrew</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis.</p>
  </div>

  
  <div class="column">
    <img class ="sam" src="https://media.istockphoto.com/photos/cheeta-picture-id945521030" alt="dog test">
    <h2>Sam</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis.</p>
  </div>

  <div style = "position:relative; left:550px;" class="angela">
    <img class ="angela" src="https://i.pinimg.com/originals/3a/4f/70/3a4f702c1a3e138125e99ae7e4aa7b40.jpg" alt="dog test">
    <h2>Angela</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis.</p>
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

.h1{
  background-color:#b3daff;
 padding: 50px;
  text-align: center; 
}
  
.column {
  float: left;
  width: 33.33%;
}

.angela {
  padding: 20px;
  text-align: center;
  max-width:40%;
  height:auto;
  align-content: center;

}

.row:after {
  content: "";
  display: table;
  clear: both;
}

.form-container{
  display: flex;
  font-family: Arial, Helvetica, sans-serif;
  background-color: white;
  justify-content: center;
}

.andrew {
    max-width:40%;
    height:auto;
}

.sam {
    max-width:40%;
    height:auto;
}

.jun {
    max-width:40%;
    height:auto;
}

</style>