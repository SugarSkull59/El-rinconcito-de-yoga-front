<template>
  <div>
    {{centerId}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      centerId: this.$route.params.id
    };
  }
};
</script>

<style lang="scss" scoped>
</style>