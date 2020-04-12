<template>
    <div class="map-container">
      <ul v-for="(need, index) in needs" :need="need" :key="index">
        <li>{{ getLatLng(need.contactDetails.address) }}</li>
      </ul>
      <l-map class="map"
        :zoom="zoom"
        :center="center"
        @update:zoom="zoomUpdated"
        @update:center="centerUpdated"
        @update:bounds="boundsUpdated"
      >
        <l-tile-layer :url="url"></l-tile-layer>
        <l-marker :lat-lng="markerLatLng" ></l-marker>
<<<<<<< HEAD
        <div v-for="(location, index) in needsLocations" :location="location" :key="index">
          <l-marker :lat-lng="location"></l-marker>
        </div>
        
      </l-map>
    
=======
        <div v-for="(need, index) in needs" :need="need" :key="index">
          <p>hello</p>
        </div>
    </l-map>
>>>>>>> 291d1d5c084fa1a9c5455710d5df5f4926d3f80b
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
      name: "map",
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 13,
      center: [55.94100, -3.20356],
      bounds: null,
      markerLatLng: [55.94100, -3.20356],
      needsLocations: [
        [55.9423682,-3.2683761],
        [55.94692396000001,-3.20235642]
      ]
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
    // convertPostcode(postcode) {
    //   for( need in this.need ){
        
    //   }
    // }
  },
  computed: {
    getLatLng: function(address){
      const url = 'https://nominatim.openstreetmap.org/search?format=json&q='+address;
      let latlng;
      fetch(url)
      .then( res => res.json())
      .then( location => {
        latlng = `[${location[0].lat},${location[0].lon}]`
        console.log(latlng);
      });
      return latlng;
    }
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