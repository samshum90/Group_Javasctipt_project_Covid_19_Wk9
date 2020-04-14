<template>

<div class="info-container"><br>
  <h1 class="h1">Information</h1><br><br>
  <div class="column">
    <h2>GOV.UK</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, 
      purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis.</p>
    <a href="https://www.gov.uk/coronavirus">www.gov.uk</a>
  </div>
  
  <div class="column">
    <h2>NHS</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis.</p>
    <a href="https://www.nhs.uk/news/">www.nhs.uk/news/</a>
  </div>

  
  <div class="column">
    <h2>World Health Organization</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis.</p>
    <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/donate">coronavirus-2019/donate</a>
  </div>
</div>

</template>

<script>
export default {
    name:"info"
}
</script>

<style>
.info-container{
  padding: 20px;
  text-align: center;
}
  
.column {
  float: left;
  width: 33.33%;
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
</style>
