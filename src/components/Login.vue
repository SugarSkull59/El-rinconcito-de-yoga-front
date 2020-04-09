<template>
  <div>
    <v-card width="400px" class="ml-5 mt-5 mx-a">
      <v-card-title class="pb-0">
        <h1>Login</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            label="usermail"
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
  </div>
</template>

<script>
import APIServices from "../Services/Api";

export default {
  data() {
    return {
      userEmail: "",
      showPassword: false,
      userPassword: "",
      passwordRule: [
        v => !!v || "Password is required",
        v => v.length >= 10 || "Password must be more than 10 characters"
      ]
    };
  },
  methods: {
    login() {
      const user = {
        user_email: this.userEmail,
        user_password: this.userPassword
      };
      APIServices.login(user)
        .then(response => {
          if (response.token) {
            localStorage.setItem("token", response.token);
            this.$emit("login");
            this.$router.push("/");
          } else {
            console.log(response);
          }
        })
        .catch(err => console.log(err));
    }
  }
};
</script>
