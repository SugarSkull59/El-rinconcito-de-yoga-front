<template>
  <div>
    <h1 class="titulo">Bienvenido al rinconcito de Yoga</h1>
    <div class="bienvenida">
      <p>
        Practicado desde hace miles de años en la india, esta práctica se ha
        convertido en un estilo de vida sana, que cuida y fortalece el cuerpo y
        mente mediante una serie de posturas, técnicas de respiración y
        meditación. Aquí encontrarás información de los centros de Canarias
        donde puedes practicarlo.
      </p>
    </div>
    <v-row class="mt-5">
      <v-col cols="8" offset="2">
        <div height="500px">
          <v-carousel>
            <v-carousel-item
              v-for="(item, i) in items"
              :key="i"
              :src="item.src"
              reverse-transition="fade-transition"
              transition="fade-transition"
            >
            </v-carousel-item>
          </v-carousel>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      items: [
        {
          src:
            "https://cdn.pixabay.com/photo/2016/11/23/18/34/art-1854265_960_720.jpg"
        },
        {
          src:
            "https://cdn.pixabay.com/photo/2020/03/29/18/33/girl-4981766_960_720.jpg"
        },
        {
          src:
            "https://cdn.pixabay.com/photo/2015/04/20/13/10/rock-731140_960_720.jpg"
        },
        {
          src:
            "https://cdn.pixabay.com/photo/2018/02/06/14/07/dance-3134828_960_720.jpg"
        }
      ]
    };
  },
  components: {}
};
</script>

<style scoped>
.titulo {
  color: #1095cd;
  text-align: center;
  margin-top: 10px;
  font-size: 30px;
}
.bienvenida {
  text-align: center;
  width: 800px;
  margin: auto;
  margin-top: 5px;
}
</style>
