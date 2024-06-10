<template>
  <div>
    <h3> Start with ErriJota</h3>
    <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
      <div class="text-subtitle-1 text-medium-emphasis">Account</div>

      <v-text-field density="compact" placeholder="Email address" prepend-inner-icon="mdi-email-outline"
        variant="outlined" v-model="email"></v-text-field>

      <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
        Password

        <a class="text-caption text-decoration-none text-blue" href="#" rel="noopener noreferrer" target="_blank">
          Forgot login password?</a>
      </div>

      <v-text-field :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
        :type="showPassword ? 'text' : 'password'" density="compact" placeholder="Enter your password"
        prepend-inner-icon="mdi-lock-outline" variant="outlined" @click:append-inner="showPassword = !showPassword"
        v-model="senha"></v-text-field>

      <v-btn class="mb-8" color="blue" size="large" variant="tonal" block @click="signIn">
        Log In
      </v-btn>

      <v-card-text class="text-center">
        <router-link class="text-blue text-decoration-none" :to="{ name: 'signup' }">
          Sign Up <v-icon icon="mdi-chevron-right"></v-icon>
        </router-link>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../firebaseConfig/auth';
export default {
  data: () => ({
    email: '',
    senha: '',
    showPassword: false,
    rules: {
      // required: value => !!value || 'Required.',
      // min: v => v.length >= 8 || 'Min 8 characters',
      emailMatch: () => (`The email and password you entered don't match`),
      compare: (value,) => (`As senhas inseridas não correspondem`)
    },
  }),

  methods: {
    async validate() {
      const { valid } = await this.$refs.form.validate();

      if (valid) {
        alert('Form is valid');
      } else {
        alert('Form is invalid');
      }
    },
    signIn() {
      signInWithEmailAndPassword(auth, this.email, this.senha)
      .then(()=> this.$router.push({ name: 'home' }))
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(error);

        });
    },
    resetPassword() {
      // auth.generatePasswordResetLink(userEmail, actionCodeSettings)
      // .then((link) => {
      //     // Construct password reset email template, embed the link and send
      //     // using custom SMTP server.
      //     return sendCustomPasswordResetEmail(userEmail, displayName, link);
      //   })
      //   .catch((error) => console.log(error));
    },
  },
};


</script>