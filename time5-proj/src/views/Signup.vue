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
  collection
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
              .then(() => {
                console.log("create user");
                addDoc(collection(db, 'usuarios'), {
                  nome: this.nome,
                  username: this.username,
                  timestamp: Date.now(),
                  usuario_id: auth.currentUser.uid
                });
                console.log("ok user");

                updateProfile(auth.currentUser, {
                  displayName: this.username,
                  name: this.nome
                });
                console.log("create profile");

                this.$router.push({ name: 'home' })
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