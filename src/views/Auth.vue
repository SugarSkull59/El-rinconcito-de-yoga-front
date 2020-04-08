<template>
  <div>
    <v-row>
      <v-col cols="6">
        <h1 id="title">Si tienes cuenta logueate y si no, regístrate</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="3">
        <Login />
      </v-col>
      <v-col cols="3">
        <Signup />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Login from "../components/Login";
import Signup from "../components/Signup";

export default {
  components: {
    Login,
    Signup
  }
};
</script>

<style lang="scss" scoped></style>
