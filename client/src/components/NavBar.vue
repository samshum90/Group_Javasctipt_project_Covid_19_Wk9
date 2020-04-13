
<template>
  <div>
    <b-button v-b-toggle.sidebar-no-header>Toggle Sidebar</b-button>
    <b-sidebar id="sidebar-no-header" aria-labelledby="sidebar-no-header-title" no-header shadow>
      <template v-slot:default="{ hide }">
        <div class="p-3">
          <h4 id="sidebar-no-header-title">COVID-19</h4>
          <p>
            The COVID-19 virus spreads primarily through droplets of saliva or 
            discharge from the nose when an infected person coughs or sneezes, so it’s 
            important that you also practice respiratory etiquette (for example, by 
            coughing into a flexed elbow).
          </p>
          <nav class="mb-3">
            <b-nav vertical> 
              <b-nav-item @click="hide">   
               <router-link :to="{ name: 'home' }">
                 <h3>Map</h3>
               </router-link>
               <router-link :to="{ name: 'requesthelp' }">
                <h3>Make a request</h3>
               </router-link>
               <router-link :to="{ name: 'about' }">
                 <h3>About</h3>
               </router-link>
              </b-nav-item>
            </b-nav>
          </nav>
          <b-button variant="primary" block @click="hide">Close Sidebar</b-button>
        </div>
      </template>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: 'nav-bar'

}

</script>

<style>
.btn-cancel {
  color: #111;
  background-color: #111;
  border-color: #111;
}
#clbut{
    color: #818181;
    font-size: 2em;
    margin: 3px
}
#bbutton{
  border: none;
   position: absolute;
   z-index: 70;
  background-color: none;

}

#navbut{
  /* position: absolute; */
  top: 0;
  right: 25px;
  font-size: 36px;
  cursor: pointer;
}
.sidenav {
  text-align: right;
  height: 100%;
  width: 20%;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  background-color: #111;
  transition: 0.5s;
  transition: all 0.3s;
  opacity: 0.99;
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
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}
</style>
