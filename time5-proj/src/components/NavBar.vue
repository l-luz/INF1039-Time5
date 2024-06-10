<template>
    <v-layout>
        <!-- Barra de aplicação com fundo roxo e densidade compacta -->
        <v-app-bar color="#000000">
            <v-btn class="nav-button" @click="drawer = !drawer" append-icon="mdi-menu" />
            <v-btn class="nav-button" text="Home" />
            <v-btn class="nav-button" text="Em alta" />
            <v-btn class="nav-button" text="Melhores" />
            <v-btn class="nav-button" text="Perto de Você" />
            <v-btn class="nav-button" text="Mapa" />
            <v-btn class="nav-button" text="Quem Somos" />
            <v-spacer />
            <v-text-field class="h-75 py-1" single-line density="compact" prepend-inner-icon="mdi-magnify"
                min-width="400px" placeholder="Buscar" variant="outlined" />
            <v-spacer />
            <v-spacer />
            <v-btn v-if="!logged" variant="outlined" :to="{ name: 'login' }" text="Login" />
            <v-btn v-if="!logged" class="pink-button" :to="{ name: 'signup' }" text="Register" />
            <v-btn v-if="logged" :text="'Olá, ' + name" />
            <v-btn v-if="logged" class="pink-button" @click="logout" text="Logout" />
        </v-app-bar>

        <!-- Gaveta de navegação temporária, exibida em telas menores que 600px -->
        <v-navigation-drawer v-model="drawer" :mobile-breakpoint="600" temporary>
            <v-list>
                <v-list-item>
                    <v-list-item :to="{ name: 'create_post' }" text="Criar Post" />
                </v-list-item>

                <v-list-item v-for="(item, index) in items" :key="index">
                    <v-list-item href="#" :text="item.title" />
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </v-layout>
</template>

<script>
import { signOut, onAuthStateChanged } from "firebase/auth";
import auth from '../firebaseConfig/auth';


export default {
    name: "NavBar",
    data() {
        return {
            userName: "",
            logged: false,
            drawer: false, // Estado para controlar a visibilidade da gaveta
            items: [
                { title: 'pipipi', value: 'pipipi' }, // Itens da lista com título e valor
                { title: 'popopo', value: 'popopo' },
                { title: 'pupupu', value: 'pupupu' },
                { title: 'pepepe', value: 'pepepe' },
            ],
        }
    },
    created() {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.name = user.email;
            } else {

            }
            this.logged = !!user;

        });
    },
    methods: {
        logout() {
            signOut(auth)
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(error);
                });
        },
    },
};

</script>

<style>
.nav-button {
    color: #FFFFFF;
    size: 5px;
}

.nav-bar {
    color: #000000
}

.pink-button {
    background-color: #E166D9
}
</style>