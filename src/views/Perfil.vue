<template>
  <div class="form">
    <h2>Información de tu perfil</h2>
    <form method="POST">
      <label for="inputName" class="sr-only">Nombre:{{ user.name }}</label
      ><br />
      <input
        type="text"
        id="name"
        class="form-control"
        placeholder="Nuevo nombre"
      /><br /><br />

      <label for="inputbirth" class="sr-only"
        >Fecha de nacimiento:{{ user.date_of_birth }}</label
      ><br />
      <input
        type="date"
        id="birth"
        class="form-control"
        placeholder="Cambiar fecha de nacimiento"
      /><br /><br />

      <label for="inputEmail" class="sr-only">Email:{{ user.email }}</label
      ><br />
      <input
        type="email"
        id="login_email"
        class="form-control"
        placeholder="Nuevo email"
      /><br /><br />

      <label for="inputPassword" class="sr-only">Cambio de contraseña</label
      ><br />
      <input
        type="password"
        id="login_psw"
        class="form-control"
        placeholder="Contraseña"
      />
      <input
        type="password"
        id="login_psw"
        class="form-control"
        placeholder="Nueva contraseña"
      /><br />
    </form>
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

<style>
.form {
  width: 500px;
  margin: auto;
  margin-top: 20px;
  padding: 15px 15px;
  border: 1px solid #1095cd;
  border-radius: 3%;
}
.form h2 {
  color: #1095cd;
}

.input {
  border: 1px black;
}
</style>
