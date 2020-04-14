<template>
    <div class="map-container">
      <h1 class="h1">Map</h1>

      <p v-if="errorStr">{{ errorStr }}</p>
      <l-map class="map" id="map"
        :zoom="zoom"
        :center="center"
        @update:zoom="zoomUpdated"
        @update:center="centerUpdated"
        @update:bounds="boundsUpdated"
      >   

        <l-tile-layer :url="url"></l-tile-layer>
          <l-control id="findme" class="sticky-top">
            <button v-on:click="geoFindMe">
              Show my location
            </button>
          </l-control>
        <div v-for="(need, index) in needs" :need="need" :key="index">
          <l-marker :lat-lng="[need.contactDetails.lat, need.contactDetails.lon]" >
            <l-tooltip>
              Name: {{ need.name }} <br>
              Content: {{ need.content }}<br>
              Description: {{ need.needDescription }}<br>
              Status: {{ need.needStatus }}<br>
              Category: {{ need.category }}<br>
            </l-tooltip>
          </l-marker>
          <l-marker v-if="location" :lat-lng="[location.coords.latitude, location.coords.longitude]"/>
        </div>
    </l-map>
    </div>
</template>

<script>
import {LMap, LTileLayer, LMarker, LTooltip, LPopup, LControl} from 'vue2-leaflet';
import { Icon } from 'leaflet';
export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LTooltip,
    LPopup,
    LControl
  },
  props: ['needs'],
  data () {
    return {
      name: "map",
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 13,
      center: [55.94100, -3.20356],
      bounds: null,
      location:null,
      latitude:null,
      longitude:null,
      gettingLocation: false,
      errorStr:null
    };
  },
  mounted() {
        delete Icon.Default.prototype._getIconUrl;
        Icon.Default.mergeOptions({
        iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
        iconUrl: require('leaflet/dist/images/marker-icon.png'),
        shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
        });
  },
  computed() {

  },
  computed: {
    
  },
  methods: {
    zoomUpdated (zoom) {
      this.zoom = zoom;
    },
    centerUpdated (center) {
      this.center = center;
    },
    boundsUpdated (bounds) {
      this.bounds = bounds;
    },
        geoFindMe(){
      if(!("geolocation" in navigator)) {
        this.errorStr = 'Geolocation is not available.';
        return;
      }
      this.gettingLocation = true;
      navigator.geolocation.getCurrentPosition(pos => {
        this.gettingLocation = false;
        this.location = pos;
        this.latitude = this.location.coords.latitude;
        this.longitude = this.location.coords.longitude;
        this.center = [this.latitude, this.longitude];
      }, err => {
        this.gettingLocation = false;
        this.errorStr = err.message;
      })
    },

  }
}
</script>

<style>

#findme{
  position: sticky;
  text-align: right;
  margin-right: 50px;
  z-index: 200;
}
#findme button{
  border:black 10px;
  padding: 10px 20px;
  background-color: #80A1D4;
  color: #F7F4EA;
}
#findme button:hover{
  padding: 10px 20px;
  background-color: #5A7296;
  color: #F7F4EA;
}
.map-container{
  z-index: 0;
  height: 100vh;
}
.map {
z-index: 0;
}
</style>