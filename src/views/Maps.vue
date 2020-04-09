<template>
  <div>
    <h1>Vista de mapa</h1>
    <div id="map"></div>
  </div>
</template>

<script>
import ApiMaps from "@/Services/ApiMaps";
export default {
  methods: {
    initMap() {
      // The location of Uluru
      var uluru = { lat: -25.344, lng: 131.036 };
      // The map, centered at Uluru
      var map = ApiMaps.Map(document.getElementById("map"), {
        zoom: 4,
        center: uluru
      });
      // The marker, positioned at Uluru
      var marker = ApiMaps.Marker({ position: uluru, map: map });
      console.log(marker);
    }
  }
};
</script>
<style>
/* Set the size of the div element that contains the map */
#map {
  height: 400px; /* The height is 400 pixels */
  width: 100%; /* The width is the width of the web page */
}
</style>
