import { createRouter, createWebHistory } from 'vue-router';
import Signup from '../views/Signup.vue';
import Login from '../views/Login.vue';
import ListPosts from '../components/ListPosts.vue';
import DefaultLayout from '../components/DefaultLayout.vue';
import CreatePost from '../views/CreatePost.vue';
import LandPage from '../views/LandPage.vue';
import Mapa from '../views/Mapa.vue';
import UserPage from '../views/UserPage.vue';
import EmAlta from '../views/EmAlta.vue';
import Melhores from '../views/Melhores.vue';
import PertoDeVoce from '../views/PertoDeVoce.vue';


const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                path: '/',
                name: 'home',
                component: LandPage,
            },
            {
                path: '/post',
                name: 'create_post',
                component: CreatePost,
            },
            {
                path: '/login',
                name: 'login',
                component: Login
            },
            {
                path: '/signup',
                name: 'signup',
                component: Signup
            },
            {
                path: '/mapa',
                name: 'mapa',
                component: Mapa
            },
            {
                path: '/profile',
                name: 'user_profile',
                component: UserPage
            },
            {
                path: '/emAlta',
                name: 'em_alta',
                component: EmAlta
            },
            {
                path: '/melhores',
                name: 'melhores',
                component: Melhores
            },
            {
                path: '/pertoDeVoce',
                name: 'perto_de_voce',
                component: PertoDeVoce
            },

        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
