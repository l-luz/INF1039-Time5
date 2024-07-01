<template>
  <br />
  <br />
  <br />
  <v-container>
    <v-card class="post-form">
      <v-row>
        <v-col cols="3" no-gutters>
          <v-card-text style="color: white" class="text-h6 text-left">
            Onde acontecerá:
          </v-card-text>
        </v-col>
        <v-col cols="6">
          <v-text-field v-model="localizacao" variant="solo-filled" bg-color="black" />
          <button @click="obterLocalizacao" class="get-location-button">
            Obter Localização
          </button>
        </v-col>
        <v-col cols="4" />
      </v-row>
      <div id="map">
      </div>

      <v-row>
        <v-col cols="3" no-gutters>
          <v-card-text style="color: white" class="text-h6 text-left" v-model="rating">
            Meu Rolê em estrelas:
          </v-card-text>
        </v-col>
        <v-col cols="1">
          <v-rating v-model="rating" color="white">
          </v-rating>
        </v-col>
        <v-col cols="8" />
      </v-row>
      <v-card-text style="color: white" class="text-h6 text-left">
        Meu Post:
      </v-card-text>
      <v-textarea v-model="post" variant="solo-filled" bg-color="black" width="1100"></v-textarea>
      <v-file-input
          v-model="files"
          label="Imagens"
          placeholder="Upload suas fotos"
          prepend-icon="mdi-camera-enhance"
          variant="solo-filled" bg-color="black"
          multiple small-chips     accept="image/png, image/jpeg, image/bmp"
          @change="handleFileUpload" 
          
        >
    <template v-slot:selection="{ fileNames }">
      <template v-for="fileName in fileNames" :key="fileName">
        <v-chip
          class="me-2"
          color="primary"
          size="small"
          label
        >
          {{ fileName }}
        </v-chip>
      </template>
    </template>
  </v-file-input>

      <!-- Pré-visualização da imagem -->
       
      <img v-if="imagemURL" :src="imagemURL" alt="Imagem selecionada" class="preview-image" />
      <!-- Botão de envio no canto inferior direito -->
      <v-card-actions class="button-row">
        <v-btn class="cancel-button" :to="{ name: 'home' }">Cancelar</v-btn>
        <v-btn @click="compartilharPost" class="submit-button">Compartilhar</v-btn>
      </v-card-actions>


    </v-card>
  </v-container>
</template>

<script>
import auth from '../firebaseConfig/auth';
import {
  addDoc,
  collection,
  doc
} from 'firebase/firestore';

import db from '../firebaseConfig/database';

// const storage  = db.getStorage();

export default {
  data() {
    return {
      localizacao: '',
      rating: null,
      post: '',
      files: [],
    }
  },
  methods: {
    compartilharPost() {
      var user = auth.currentUser;

      console.log('Rating:', this.rating)
      console.log('Mensagem postada:', this.post)
      console.log('Imagem:', this.files)
      console.log('Localização:', this.localizacao)

      
      var geoInfo = {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: this.localizacao
          },
          properties: {
            name: "PUC - Rio"
        }
      }
      var data = {
        rating: this.rating,
        post: this.post,
        localizacao: geoInfo,
        timestamp: Date.now(),
      }
        // if (this.files) {
        //   const userStRef = ref(storage, 'usuarios', user.uid);

        //   const storageRef = ref(userStRef, 'images/' + this.files.name); // Adjust the path as needed
        //   uploadBytes(storageRef, this.files);
        //   this.downloadURL = getDownloadURL(storageRef);
        // }

        const userRef = doc(db, 'usuarios', user.uid); // Reference to the user document
        const postsCollectionRef = collection(userRef, 'Posts'); 
        addDoc(postsCollectionRef, data)
        .then(() => {
            console.log('Post added successfully!');
        })
        .catch((error) => {
            console.error('Error adding post: ', error);
        });

      this.post = ''
      this.rating = ''
      this.files = null
      this.imagemURL = ''
      this.localizacao = ''
    },
    handleFileUpload(event) {
      this.imagem = event.target.files[0];
      this.imagemURL = URL.createObjectURL(this.imagem);
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
.post-form {
  background-color: #690080;
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
  position: relative;
  max-height: 870;
  max-width: 300;
}

.label-field {
  color: white
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
  background-color: #FD83FA;
  color: black;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
}

.cancel-button {
  position: absolute;
  bottom: 10px;
  background-color: #FD83FA;
  color: black;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;

}

.get-location-button {
  background-color: #007bff;
  border-radius: 5px;
}
</style>
