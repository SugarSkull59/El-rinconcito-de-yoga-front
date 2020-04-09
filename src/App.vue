<template>
  <v-app>
    <v-app-bar app color="white">
      <router-link to="/" class="home">
        <div class="d-flex align-center">
          <v-img
            alt="Yoga logo"
            class="shrink mr-2"
            contain
            src="./assets/logo_yoga.png"
            transition="scale-transition"
            width="40"
          />
        </div>
      </router-link>
      <v-spacer></v-spacer>

      <router-link to="/yoga" class="home">Yoga</router-link>
      <router-link to="/centers" class="home">Centros</router-link>
      <router-link to="/productos" class="home">Productos</router-link>
      <router-link to="/auth" class="home" v-if="!signed">
        <v-icon>mdi-location-enter</v-icon>
      </router-link>
      <router-link to="/" class="home" v-else>
        <v-icon>mdi-exit-to-app</v-icon>
      </router-link>
      <router-link to="#" class="home">
        <v-icon>mdi-account</v-icon>
      </router-link>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    signed: false
  }),
  created() {
    this.signed = localStorage.getItem("token");
  }
};
</script>
<style>
.home {
  color: blue;
  margin-left: 5%;
  text-decoration: none;
  margin-right: 5%;
}
</style>
