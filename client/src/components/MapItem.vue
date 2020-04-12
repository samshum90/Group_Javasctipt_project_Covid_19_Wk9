<template>
    <div class="map-container">
      <l-map class="map"
        :zoom="zoom"
        :center="center"
        @update:zoom="zoomUpdated"
        @update:center="centerUpdated"
        @update:bounds="boundsUpdated"
      >
        <l-tile-layer :url="url"></l-tile-layer>
        <l-marker :lat-lng="markerLatLng" ></l-marker>
        <div v-for="(location, index) in needsLocations" :location="location" :key="index">
          <l-marker :lat-lng="location"></l-marker>
        </div>
        
      </l-map>
    
    </div>
 
   
</template>

<script>
import {LMap, LTileLayer, LMarker} from 'vue2-leaflet';
import { Icon } from 'leaflet';

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  props: ['needs'],
  data () {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 13,
      center: [55.94100, -3.20356],
      bounds: null,
      markerLatLng: [55.94100, -3.20356],
      needsLocations: [
        [55.9423682,-3.2683761],
        [55.94692396000001,-3.20235642]
      ],
      tmpLatLng: null
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
    getLatLng: function(address){
      const url = 'https://nominatim.openstreetmap.org/search?format=json&q='+address;
      let location;
      let result = fetch(url)
      .then( res => res.json())
      .then( location => {
        location = "["+location[0].lat + ", "+location[0].lon + "]";
        this.tmpLatLng = location;
        console.log(location);
        // return location;
      });
      // console.log(result);
        // console.log(`location outside:${location}`);
      return this.tmpLatLng;    
    },
    getName: function(name){
      return "Hello "+name;
    }
    
  }
}
</script>

<style>
.map-container{
  height: 1000px;
}
.map {
z-index: 0;
height: 80%; 
width: 100%;
}
</style>