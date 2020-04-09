<template>
  <div>
    <v-btn to="/maps" class="boton" color="#1095cd" dark>Mapa</v-btn>
    <div class="listado">
      <h1>Lista de centros</h1>
      <ul v-for="center in centers" :key="center._id">
        <router-link :to="{ name: 'Centro', params: { id: center._id } }">
          <li>Nombre: {{ center.name }}</li>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
import APIServices from "../Services/Api";

export default {
  data() {
    return {
      centers: {}
    };
  },
  methods: {
    async getAllCenters() {
      const centerResponse = await APIServices.getCenters();
      return (this.centers = centerResponse);
    }
  },
  mounted() {
    this.getAllCenters();
  }
};
</script>
<style>
.listado {
  width: 400px;
  margin: auto;
  margin-top: -40px;
}
.listado h1 {
  color: #1095cd;
}

.boton {
  margin-top: 40px;
  margin-left: 250px;
}
</style>
