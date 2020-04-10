<template>
  <div>
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
