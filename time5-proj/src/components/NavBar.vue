<template>
    <v-layout>
        <!-- Barra de aplicação com fundo roxo e densidade compacta -->
        <v-app-bar :style="{ backgroundColor: 'rgb(75, 0, 130)' }" dense>
                <v-btn icon @click="drawer = !drawer">
                    <v-icon color="white">mdi-menu</v-icon>
                </v-btn>

                <v-btn text :style="{ color: 'rgb(255, 255, 255)' }">Em alta</v-btn>
                <v-btn text :style="{ color: 'rgb(255, 255, 255)' }">Melhores</v-btn>
                <v-btn text :style="{ color: 'rgb(255, 255, 255)' }">Perto de Você</v-btn>
                <v-text-field flat prepend-inner-icon="mdi-magnify" placeholder="Buscar"
                    :style="{ color: 'rgb(255, 255, 255)', backgroundColor: 'rgb(200, 162, 200)', borderRadius: '8px', width: '10px', height: '32px' }" class="search-bar"></v-text-field>

                <v-btn text :style="{ color: 'rgb(255, 255, 255)' }" :to="{ name: 'login' }">
                    Login</v-btn>

                <v-btn text :style="{ color: 'rgb(255, 255, 255)' }" :to="{name: 'signup'}">Sign Up</v-btn>
        </v-app-bar>

        <!-- Gaveta de navegação temporária, exibida em telas menores que 600px -->
        <v-navigation-drawer v-model="drawer" :mobile-breakpoint="600" temporary>
            <v-list>
                <v-list-item v-for="(item, index) in items" :key="index">
                    <v-list-item>{{ item.title }}</v-list-item>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </v-layout>
</template>

<script>
export default {
    name: "NavBar",
    data() {
        return {
            drawer: false, // Estado para controlar a visibilidade da gaveta
            items: [
                { title: 'pipipi', value: 'pipipi' }, // Itens da lista com título e valor
                { title: 'popopo', value: 'popopo' },
                { title: 'pupupu', value: 'pupupu' },
                { title: 'pepepe', value: 'pepepe' },
            ],
        }
    }
};
</script>

<style>
.search-bar {
    max-width: 400px;
    /* Ajusta a largura máxima conforme necessário */
    border-radius: 8px;
    /* Define os cantos arredondados */
    height: 15px;
    /*Ajusta a altura para deixá-la mais fina */
    display: flex;
    align-items: center;
    /* Centraliza verticalmente o conteúdo */
}

.search-bar input {
    line-height: 32px;
    /* Garante que o texto do input esteja centralizado verticalmente */
}
</style>