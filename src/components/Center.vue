<template>
  <div class="center">
    <ul>
      <li>Nombre: {{ centers.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Center",
  props: {
    centers: Object
  }
};
</script>
