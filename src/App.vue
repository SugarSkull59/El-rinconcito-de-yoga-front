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
      <router-link to="/centers" class="home">Centros</router-link>
      <router-link to="/productos" class="home">Productos</router-link>
      <router-link to="/yoga" class="home">Yoga</router-link>
      <v-spacer></v-spacer>
      <router-link to="/auth" class="home" v-if="!signed">
        <v-icon>mdi-location-enter</v-icon>
      </router-link>
      <router-link to="/" class="home" v-else @click="logout">
        <v-icon @click="logout">mdi-exit-to-app</v-icon>
      </router-link>
      <router-link to="/perfil" class="home">
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
  data() {
    return {
      signed: false
    };
  },
  mounted() {
    this.$root.$on("login", status => {
      this.signed = status;
    });
  },
  methods: {
    logout() {
      localStorage.clear();
      this.signed = false;
      this.$router.push("/");
    }
  }
};
</script>
<style>
.home {
  color: #1095cd;
  margin-left: 5%;
  text-decoration: none;
  margin-right: 5%;
}
</style>
