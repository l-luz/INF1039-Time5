<template>
    <RoleCards :usuarios="usuarios" :postagens="posts"/>
</template>
<script>
import RoleCards from "../components/Postagens.vue";
import db from "../firebaseConfig/database";
import { collection, getDocs } from 'firebase/firestore'; // Import necessary Firestore functions

export default {
    name: "EmAlta",
    components: {
        RoleCards,
    },
    data() {
        return {
            usuarios: [],
            posts: {},
        };
    },
    async mounted() {
        const usersRef = collection(db, 'usuarios');
        const usersSnapshot = await getDocs(usersRef);
        this.usuarios = usersSnapshot.docs.map(doc => {console.log(doc.data()); return({ id: doc.id, ...doc.data() })});
        for (const usuario of this.usuarios) {
            const postsRef = collection(db, 'usuarios', usuario.id, 'posts');
            const postsSnapshot = await getDocs(postsRef);
            this.posts[usuario.id] = postsSnapshot.docs.map(doc =>{ console.log(doc.data()); return({ id: doc.id, ...doc.data() })});
        }
    },
};

</script>