<template>
    <v-card>
        
    </v-card>
</template>
<!-- <template>
    <div>
      <h3> Start with ErriJota</h3>
      <v-btn @click="startFirebaseUI" :text="user ? 'Logout' : 'RSVP'"> </v-btn>
      <section id="firebaseui-auth-container"></section>
  
      <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
        <div class="text-subtitle-1 text-medium-emphasis">Account</div>
  
        <v-text-field density="compact" placeholder="Email address" prepend-inner-icon="mdi-email-outline"
          variant="outlined"></v-text-field>
  
        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
          Password
  
          <a class="text-caption text-decoration-none text-blue" href="#" rel="noopener noreferrer" target="_blank">
            Forgot login password?</a>
        </div>
  
        <v-text-field :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
          :type="showPassword ? 'text' : 'password'" density="compact" placeholder="Enter your password"
          prepend-inner-icon="mdi-lock-outline" variant="outlined"
          @click:append-inner="showPassword = !showPassword"></v-text-field>
  
        <v-btn class="mb-8" color="blue" size="large" variant="tonal" block>
          Log In
        </v-btn>
  
        <v-card-text class="text-center">
          <a class="text-blue text-decoration-none" href="#" rel="noopener noreferrer" target="_blank">
            Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
          </a>
        </v-card-text>
      </v-card>
    </div>
  </template>
  
  <script>
  import { initializeApp } from "firebase/app";
  import { getAuth, EmailAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
  import * as firebaseui from 'firebaseui';
  import firebaseConfig from '../firebaseConfig';
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  
  const uiConfig = {
    credentialHelper: firebaseui.auth.CredentialHelper.NONE,
    signInFlow: 'popup',
    signInOptions: [
      // Email / Password Provider.
      EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccessWithAuthResult: function (authResult, redirectUrl) {
        // Handle sign-in.
        // Return false to avoid redirect.
        return false;
      },
    },
  };
  const ui = new firebaseui.auth.AuthUI(auth);
  
  
  export default {
    data: () => ({
      email: '',
      senha: '',
      showPassword: false,
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
        emailMatch: () => (`The email and password you entered don't match`),
        compare: (value,) => (`As senhas inseridas não correspondem`)
      },
      user: !!auth,
  
    }),
  
    methods: {
      startFirebaseUI() {
        if (auth.currentUser) {
          // User is signed in; allows user to sign out
          signOut(auth);
        } else {
          // No user is signed in; allows user to sign in
          ui.start('#firebaseui-auth-container', uiConfig);
        }
  
      },
      async validate() {
        const { valid } = await this.$refs.form.validate();
  
        if (valid) {
          alert('Form is valid');
        } else {
          alert('Form is invalid');
        }
      },
    },
  };
  console.log(auth)
  console.log(!!auth)
  onAuthStateChanged(auth, user => {
      if (user) {
        this.user = true;
      } else {
        this.user = false;
      }
    });
  
  </script> -->