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
        <div v-for="(need, index) in needs" :need="need" :key="index">
          <p>hello</p>
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
      name: "map",
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 13,
      center: [55.94100, -3.20356],
      bounds: null,
      markerLatLng: [55.94100, -3.20356]
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