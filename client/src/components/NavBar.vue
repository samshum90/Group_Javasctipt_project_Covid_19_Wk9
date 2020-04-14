<template>
<div class="sticky-top">
  <b-button v-b-toggle.sidebar-no-header id="bbutton">
    <font-awesome-icon icon="bars" id="navbut"/>
  </b-button>
    <b-sidebar class="sidenav" id="sidebar-no-header" no-header shadow>
      <b-button v-b-toggle.sidebar-no-header id="closebbutton">
        <font-awesome-icon icon="window-close" id="clbut"/>
      </b-button>
      <h1>Covid19</h1>
      <router-link :to="{ name: 'projectinfo' }">
        <h3>Project Info</h3>
      </router-link>
      <router-link :to="{ name: 'home' }">
          <h3>Map</h3>
      </router-link>
      <router-link :to="{ name: 'requesthelp' }">
          <h3>Make a request</h3>
      </router-link>
      <router-link :to="{ name: 'info' }">
          <h3>Information</h3>
      </router-link>
      <router-link :to="{ name: 'about' }">
          <h3>About</h3>
      </router-link>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: 'nav-bar'
}
</script>

<style>
#clbut{
    /* color: #818181; */
    font-size: 2em;
    /* margin: 3px; */
    cursor: pointer;
}
#closebbutton{
  color: #818181;
  background-color: inherit;
  border-color: inherit;
  border: inherit;
}
#bbutton{
  z-index: 70;

  position: absolute;
  cursor: pointer;
}
#navbut{
  top: 0;
  right: 25px;
  font-size: 36px;
}

.sidenav{
  text-align: right;
  height: 100%;
  width: 20%;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  transition: all 0.3s;

}
.sidenav a {
  text-align: left;
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}
.sidenav a:hover{
  color:white;
  background-color: #818181;
}
.sidenav h1 {
  text-align: left;
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 3em;
  color: #818181;
  display: block;
  transition: 0.3s;
}
</style>