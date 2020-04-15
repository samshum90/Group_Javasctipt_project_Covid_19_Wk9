<template>
    <div class="map-container">
      <h1 class="h1">Map</h1>
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
          <p v-if="errorStr">{{ errorStr }}</p>
          </l-control>
        <div v-for="(need, index) in needs" :need="need" :key="index">
          <l-marker :lat-lng="[need.contactDetails.lat, need.contactDetails.lon]" :need="need" :key="index">
            <l-tooltip>
              <need-item :need="need" :key="index">        
            </need-item>
            </l-tooltip>

            <l-popup id="popup">            
                <need-detail :need="need" :key="index">        
                </need-detail>
            </l-popup>

          </l-marker>
          <l-marker v-if="location" 
          :lat-lng="[location.coords.latitude, location.coords.longitude]">
            <l-icon
              :icon-anchor="staticAnchor"
            >
            <div class="icon-container">
              <img src="@/assets/user-circle-solid.png"/>
              <p>You are here</p>
            </div>
              
            </l-icon>
          </l-marker>
        </div>
    </l-map>
    </div>
</template>

<script>
import {LMap, LTileLayer, LMarker, LTooltip, LPopup, LControl, LIcon} from 'vue2-leaflet';
import { latLng, Icon, icon } from 'leaflet';
import NeedItem from './NeedItem.vue';
import NeedDetail from './NeedDetail.vue';
import { eventBus } from '@/main.js'

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LTooltip,
    LPopup,
    LControl,
    "need-item": NeedItem,
    "need-detail": NeedDetail
  },
  props: ['needs'],
  data () {
    return {
      name: "map",
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 13,
      center: [55.94100, -3.20356],
      currentZoom: 12.5,
      currentCenter: latLng(55.94100, -3.20356),
      bounds: null,
      location:null,
      latitude:null,
      longitude:null,
      gettingLocation: false,
      errorStr:null,
      staticAnchor: [16, 37],
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
    computed:{
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
    
      },
      err => {
        this.gettingLocation = false;
        this.errorStr = err.message;
      })
    },
    selectAPopNeed(need) {
      eventBus.$emit('select-a-need', need); 
      console.log("emit")   
    }
  }
  }

</script>

<style>
.leaflet-popup-content {
    max-width: 100%;
    height: 250px;
    overflow-y: scroll;
}
.icon-container img{
  width: 35px;
  margin-left: 18px;
  filter: invert(47%) sepia(87%) saturate(1935%) hue-rotate(185deg) brightness(85%) contrast(85%);
}
.icon-container p{
  white-space: nowrap;
  font-size: 1em;
  text-align: center;
  margin: 0;
  color: #2B82CB;
}
.icon-container{
  display: flex;
  flex-direction: column;
}
#findme{
  text-align: right;
  margin-right: 50px;
  z-index: 200;
  top: 100px;
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