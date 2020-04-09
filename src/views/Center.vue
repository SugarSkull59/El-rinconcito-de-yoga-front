<template>
  <div>
    <v-card class="mx-auto mt-5" max-width="400">
      <v-img
        class="white--text align-end"
        height="200px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      >
        <v-card-title>{{ center.name }}</v-card-title>
      </v-img>

      <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

      <v-card-text class="text--primary">
        <div>Whitehaven Beach</div>

        <div>Whitsunday Island, Whitsunday Islands</div>
      </v-card-text>

      <v-card-actions>
        <v-btn color="orange" text>
          Share
        </v-btn>

        <v-btn color="orange" text>
          Explore
        </v-btn>
      </v-card-actions>
    </v-card>
    {{ centerId }}
    {{ center }}
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
    console.log(center);
    this.center = center;
  }
};
</script>

<style lang="scss" scoped></style>
