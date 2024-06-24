<template>
    <br />
    <br />
    <br />
    <v-container fill-height>
        <v-row >
            <v-col cols="4" 
            class="text-center text-md-left white--text d-inline-block "
            style="max-width: 300px;"
            >
            <h1>Sempre tenha o que fazer</h1>
            <p class="text-h5">Rolês em todo lugar, toda hora e para todos os gostos</p>
            </v-col>
            <v-col cols="8"  >
                <v-img src="/hugoLandPage.png" cover ></v-img>
            </v-col>
        </v-row>
    </v-container>
    
    <hr class="custom2-hr" />
  
    <v-container fill-height>
      <v-toolbar    title="EM ALTA"    >
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <link> Ver mais: <link>
          <v-spacer></v-spacer>
        </v-toolbar>
    </v-container>

    <v-container fill-height >
        <v-container >
          <v-toolbar title="MELHORES">
            <v-combobox
              :items="['DO DIA', 'DA SEMANA', 'DO MÊS', 'DO ANO', 'DE SEMPRE']"
              variant="outlined"
              class="h-75 py-1"
              density="compact"
              single-line
            />
            <v-spacer></v-spacer>
            <link> Ver mais: <link>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-container class="content-container">
            <img src="/strap-3.png" class="background-image" />

          <PostLandPage 
              
              :username="username" 
              :foto="foto" 
              :midia="midia" 
              :rating="rating" 
              :local="local"
              :endereco="endereco"
              :key="id" 
            />

          </v-container>
        </v-container>
      </v-container>

<!-- 
    <v-container>
      <v-toolbar title="MELHORES" >
          <v-combobox 
            :items="['DO DIA', 'DA SEMANA', 'DO MÊS', 'DO ANO', 'DE SEMPRE']"
            variant="outlined"
            class="h-75 py-1"  density="compact"
            single-line 
          />          
          <v-spacer></v-spacer>
          <link> Ver mais: <link>
          <v-spacer></v-spacer>
        </v-toolbar>
        <img src="/strap-3.png">
          <PostLandPage  :username="username" :foto="foto" :midia="midia" :descricao="descricao"
            :key="id" />
        </img>

    </v-container> -->
    <v-container>
      <v-toolbar    title="EM ALTA"    >
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <link> Ver mais: <link>
          <v-spacer></v-spacer>
        </v-toolbar>

    </v-container>

</template>
<script>
import PostLandPage from "../components/PostLandPage.vue";
export default {
  name: "LandPage",
  components: {
    PostLandPage,
  },
  data() {
    return {
            username: "Clara",
            foto: "https://img.freepik.com/fotos-gratis/foto-na-cabeca-de-uma-mulher-feliz-rindo-e-sorrindo-amplamente_273609-28720.jpg",
            rating: 3,
            local: "Mureta da Urca",
            endereco: "Rua General Banana, 124",
            midia:[
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
                },
              ],
            }}}

</script>
<style>

.custom1-hr {
  border: 0;
  height: 2px;
  margin: 20px 0; /* Espaçamento superior e inferior */
  height: 150px;
  background-image: url('/strap-3.png'); /* Caminho para a sua imagem */
  background-size: cover; /* Ajuste para cobrir completamente a área */
  background-repeat: no-repeat; /* Evita a repetição da imagem */
}
.custom2-hr {
  border: 0;
  margin: 20px 0; /* Espaçamento superior e inferior */
  height: 200px;
  background-image: url('/h-straps.png'); /* Caminho para a sua imagem */
  background-size: cover; /* Ajuste para cobrir completamente a área */
  background-repeat: no-repeat; /* Evita a repetição da imagem */
}

.background-image {
  width: auto;
  height: auto;
  object-fit: cover; /* Ajusta a imagem para cobrir a área */
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0; /* Coloca a imagem de fundo atrás do conteúdo */
  align-items: center;
  align-content: center;
}
.content-container {
  position: relative;
  z-index: 1; /* Coloca o conteúdo acima da imagem de fundo */
  border-radius: 10px;
}

</style>