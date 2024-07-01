<template>
  <div>
    <h3> Start with ErriJota</h3>
    <v-card class="mx-auto pa-12 pb-8" elevation="8" min-width="500" rounded="lg">
      <v-form v-model="valid" ref="form">
        <v-text-field density="compact" placeholder="Nome" prepend-inner-icon="mdi-account-edit-outline"
          variant="outlined" v-model="nome" :rules="nameRules"></v-text-field>

        <v-text-field density="compact" placeholder="Nome de usuário" prepend-inner-icon="mdi-badge-account-outline"
          variant="outlined" v-model="username"></v-text-field>

        <v-text-field density="compact" placeholder="Email" prepend-inner-icon="mdi-email-outline" variant="outlined"
          v-model="email"></v-text-field>

        <v-text-field density="compact" placeholder="Confirme seu email" prepend-inner-icon="mdi-email-outline"
          variant="outlined" v-model="emailConf" :rules="[emailMatchRule]"></v-text-field>

        <v-text-field :append-inner-icon="!showPassword ? 'mdi-eye-off' : 'mdi-eye'"
          :type="showPassword ? 'text' : 'password'" density="compact" placeholder="Insira sua senha"
          prepend-inner-icon="mdi-lock-outline" variant="outlined" @click:append-inner="showPassword = !showPassword"
          v-model="senha"></v-text-field>

        <v-text-field :append-inner-icon="!showConfPassword ? 'mdi-eye-off' : 'mdi-eye'"
          :type="showConfPassword ? 'text' : 'password'" density="compact" placeholder="Confirme sua senha"
          prepend-inner-icon="mdi-lock-outline" variant="outlined"
          @click:append-inner="showConfPassword = !showConfPassword" v-model="senhaConf"
          :rules="[passwordMatchRule]"></v-text-field>

        <v-btn type="submit" class="mb-8" color="blue" size="large" variant="tonal" block @click.prevent="validate">
          Registrar
        </v-btn>
      </v-form>

    </v-card>

  </div>
</template>

<script>
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import auth from '../firebaseConfig/auth';
import {
  addDoc,
  setDoc,
  collection,
  doc
} from 'firebase/firestore';
import db from '../firebaseConfig/database';

export default {
  data: () => (
    {
      valid: false,
      email: '',
      emailConf: '',
      senha: '',
      senhaConf: '',
      nome: '',
      username: '',
      showPassword: false,
      showConfPassword: false,
      nameRules: [
        value => !!value || 'Name is required.',
      ],
    }),
  computed: {
    emailMatchRule() {
      return value => (this.email === this.emailConf) || 'Os emails não coincidem.';
    },
    passwordMatchRule() {
      return value => (this.senha === this.senhaConf) || 'As senhas não coincidem.';
    }

  },

  methods: {
    async validate() {
      const { valid } = await this.$refs.form.validate();

      if (valid) {
          try {

            createUserWithEmailAndPassword(auth, this.email, this.senha)
              .then((userCredencial) => {
                const userId = userCredencial.user.uid; 
                const userDocRef = doc(db, 'usuarios', userId); 

                // Use setDoc directly on the userDocRef (DocumentReference)
                setDoc(userDocRef, { 
                  nome: this.nome,
                  username: this.username,
                  timestamp: Date.now(), // Or serverTimestamp() for server-side timestamps
                })
                .then(() => {
                  console.log("ok user");

                  updateProfile(auth.currentUser, {
                    displayName: this.username,
                    name: this.nome
                  });
                  console.log("create profile");

                  this.$router.push({ name: 'home' });
                })
                .catch((error) => {
                  console.error("Error adding user document: ", error);
                }); 
              })
          }
          catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
            alert(error);
            console.log(error)
            console.log(errorMessage)
            console.log(errorCode)
          }
      }
    },
  },
};

</script>
<!--  adaptar depois para salvar os arquivos
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// ... your other imports and Firebase initialization ...

const storage = getStorage();

// Assuming 'this.files' is an array of File objects
const uploadPromises = this.files.map(file => {
  const storageRef = ref(storage, `user_posts/${user.uid}/${file.name}`); // Customize the path as needed
  return uploadBytes(storageRef, file);
});

Promise.all(uploadPromises)
  .then(snapshots => {
    const downloadURLPromises = snapshots.map(snapshot => getDownloadURL(snapshot.ref));
    return Promise.all(downloadURLPromises);
  })
  .then(downloadURLs => {
    var data = {
      rating: this.rating,
      post: this.post,
      localizacao: geoInfo,
      imagens: downloadURLs, // Store the array of download URLs
      timestamp: Date.now(),
    };

    // Now you can add the data to Firestore
    addDoc(collection(userDoc, 'Posts'), data)
      .then(() => {
        console.log('Post added successfully!');
      })
      .catch((error) => {
        console.error('Error adding post: ', error);
      });
  })
  .catch(error => {
    console.error('Error uploading files: ', error);
  }); -->