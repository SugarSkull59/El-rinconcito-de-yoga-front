<template>
  <div>
    <router-link to="/centers" class="linea"
      ><v-icon>mdi-arrow-left</v-icon></router-link
    >
    <v-card class="target" max-width="400">
      <v-img
        class="white--text align-end"
        height="200px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      >
        <v-card-title>{{ center.name }}</v-card-title>
      </v-img>

      <v-card-subtitle class="pb-0"
        >{{ center.direction }}. {{ center.province }}</v-card-subtitle
      >

      <v-card-text class="text--primary">
        <v-list-item :href="center.social_web" target="_blank">{{
          center.social_web
        }}</v-list-item>

        <div>{{ center.description }}</div>
        <div>Horario: {{ center.schedule }}</div>
        <div>Horario: {{ center.type_of_yoga }}</div>

        <div>
          Los precios rondan entre: {{ center.price_range_min }} y
          {{ center.price_range_max }} €
        </div>
      </v-card-text>

      <v-card-actions>
        <v-btn color="#1095cd" text>
          Deja tu valoración
        </v-btn>

        <v-btn color="#1095cd" text>
          Añade a tus favoritos
        </v-btn>
      </v-card-actions>
    </v-card>
    <iframe
      id="inlineFrameExample"
      title="Inline Frame Example"
      width="400"
      height="400"
      :src="center.google_map_embed_iframe"
    >
    </iframe>
  </div>
</template>

<script>
import APIServices from "../Services/Api";
export default {
  data() {
    return {
      center: {}
    };
  },
  async created() {
    const center = await APIServices.getCenter(this.$route.params.id);
    this.center = center;
  }
};
</script>

<style scoped>
#inlineFrameExample {
  float: right;
  margin-top: -415px;
  margin-right: 200px;
}

.target {
  margin-top: 95px;
  margin-left: 160px;
}

.linea {
  text-decoration: none;
  margin-left: 10px;
}
</style>
