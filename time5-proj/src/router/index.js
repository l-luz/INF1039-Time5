import { createRouter, createWebHistory } from 'vue-router';
import Signup from '../views/Signup.vue';
import Login from '../views/Login.vue';
import ListPosts from '../components/ListPosts.vue';
import DefaultLayout from '../components/DefaultLayout.vue';
import CreatePost from '../views/CreatePost.vue';
import LandPage from '../views/LandPage.vue';

const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                path: '/',
                name: 'home',
                component: LandPage
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
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
