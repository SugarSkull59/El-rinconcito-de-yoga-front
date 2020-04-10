<template>
  <div>
    <v-card width="400px" class="ml-5 mt-5 mx-a">
      <v-card-title class="pb-0">
        <h1>Perfil</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            :label="user.email"
            v-model="userEmail"
            prepend-icon="mdi-account-circle"
          ></v-text-field>

          <v-text-field
            label="Password"
            v-model="userPassword"
            :type="showPassword ? 'text' : 'password'"
            prepend-icon="mdi-lock"
            :rules="passwordRule"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="info" @click="login">Login</v-btn>
      </v-card-actions>
    </v-card>
    {{ user }}
  </div>
</template>

<script>
import APIServices from "../Services/Api";
export default {
  data() {
    return {
      user: {}
    };
  },
  async created() {
    const user = await APIServices.getUser(localStorage.getItem("userId"));
    this.user = user;
  }
};
</script>

<style lang="scss" scoped></style>
