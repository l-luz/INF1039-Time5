<template>
  <body>
    <div>
      <div class="post-form">
        <input
          v-model="nome"
          placeholder="Digite seu nome"
          class="input-field"
        />
        <textarea
          v-model="mensagem"
          placeholder="Escreva sua mensagem"
          class="input-field"
        ></textarea>
        <input type="file" @change="handleFileUpload" class="input-field" />
        <!-- Pré-visualização da imagem -->
        <img
          v-if="imagem"
          :src="imagemURL"
          alt="Imagem selecionada"
          class="preview-image"
        />
        <!-- Campo para inserir a localização -->
        <input
          v-model="localizacao"
          placeholder="Digite sua localização (latitude, longitude)"
          class="input-field"
        />
        <!-- Botão para obter a localização atual -->
        <button @click="obterLocalizacao" class="get-location-button">
          Obter Localização
        </button>
        <!-- Botão de envio no canto inferior direito -->
        <button v-if="imagem" @click="postarMensagem" class="submit-button">
          Postar
        </button>
      </div>
    </div>
  </body>
</template>

<script>
  export default {
    data() {
      return {
        nome: '',
        mensagem: '',
        imagem: null,
        imagemURL: '',
        localizacao: '',
      }
    },
    methods: {
      postarMensagem() {
        console.log('Usuário:', this.nome)
        console.log('Mensagem postada:', this.mensagem)
        console.log('Imagem:', this.imagem)
        console.log('Localização:', this.localizacao)
        this.nome = ''
        this.mensagem = ''
        this.imagem = null
        this.imagemURL = ''
        this.localizacao = ''
      },
      handleFileUpload(event) {
        this.imagem = event.target.files[0]
        this.imagemURL = URL.createObjectURL(this.imagem)
      },
      obterLocalizacao() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            position => {
              this.localizacao = this.localizacao =
                position.coords.latitude + ', ' + position.coords.longitude
            },
            error => {
              console.error('Erro ao obter localização:', error)
            }
          )
        } else {
          console.error('Geolocalização não é suportada pelo seu navegador.')
        }
      },
    },
  }
</script>

<style scoped>
  /* Estilos do componente */

  body {
    background-color: black;
    padding: 100px;
  }
  .navbar {
    background-color: #6a1b9a; /* Cor roxa mais forte */
    padding: 10px 20px;
    color: white;
  }
  .navbar-brand {
    display: flex;
    align-items: center;
  }
  .profile-picture {
    width: 40px; /* Tamanho da foto de perfil */
    height: 40px; /* Tamanho da foto de perfil */
    border-radius: 50%; /* Para tornar a imagem circular */
    margin-right: 10px; /* Espaçamento entre a foto e o texto */
  }
  .logo {
    color: white;
    font-weight: bold;
    text-decoration: none;
    font-size: 1.2em; /* Tamanho da fonte do logo */
  }
  .navbar-menu {
    display: flex;
    justify-content: flex-end;
  }
  .navbar-start {
    display: flex;
  }
  .navbar-item {
    padding: 10px;
    margin: 0 5px;
    color: white;
    text-decoration: none;
  }
  .post-form {
    background-color: purple;
    padding: 20px;
    border-radius: 10px;
    margin-top: 20px;
    position: relative;
  }
  .input-field {
    width: calc(100% - 20px);
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: white;
    margin-bottom: 10px;
  }
  .preview-image {
    max-width: 100%;
    margin-top: 10px;
  }
  .submit-button {
    position: absolute;
    bottom: 10px;
    right: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
  }
  .get-location-button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
  }
</style>
