<template>
  <v-app>
    <v-app-bar app color="white">
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

      <!--   <v-spacer></v-spacer> -->
      <router-link to="/" class="home">Home</router-link>

      <v-col cols="2">
        <p>Yoga</p>
        <v-overflow-btn class="my-2" :items="dropdown_font" label="Yoga" target="#dropdown-example"></v-overflow-btn>
      </v-col>

      <v-col cols="2">
        <p>Centros</p>
        <v-overflow-btn
          class="my-2"
          :items="dropdown_centros"
          label="Centros"
          target="#dropdown-example1"
        ></v-overflow-btn>
      </v-col>

      <router-link to="/productos" class="home">Productos</router-link>
      <router-link to="/auth" class="home">Auntetifícate</router-link>
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
    dropdown_font: ["Qué es el yoga", "Tipos de yoga", "Beneficios"],
    dropdown_centros: [
      "<router-link :to='Home'> Ver centros por listado </router-link>",
      "Ver mapa de centros"
    ],

    dropdown_icon: [
      { text: "list", callback: () => console.log("list") },
      { text: "favorite", callback: () => console.log("favorite") },
      { text: "delete", callback: () => console.log("delete") }
    ],
    dropdown_edit: [
      { text: "100%" },
      { text: "75%" },
      { text: "50%" },
      { text: "25%" },
      { text: "0%" }
    ]
  })
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
