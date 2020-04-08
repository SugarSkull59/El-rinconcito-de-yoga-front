<template>
  <div>
    <h1>Lista de centros</h1>
    <ul v-for="center in centers" :key="center._id">
      <li>Nombre: {{ center.name }}</li>
    </ul>
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
