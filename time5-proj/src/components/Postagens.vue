<template>
  <div class="cards-container">
    <h1 class="page-title">Em Alta</h1>
    <div class="cards" v-for="user in usuarios" :key="user.id">
      <UserPost v-for="post in postagens[user.id]" :key="post.id" :username="user.username" 
      :midia="post.imageURLs" :descricao="post.post" :rating="post.rating" :local="post.localizacao">
      </UserPost>
      <UserPost v-for="post in postagens[user.id]" :key="post.id" :username="user.username" 
      :midia="post.imageURLs" :descricao="post.post" :rating="post.rating" :local="post.localizacao">
      </UserPost>
      <UserPost v-for="post in postagens[user.id]" :key="post.id" :username="user.username" 
      :midia="post.imageURLs" :descricao="post.post" :rating="post.rating" :local="post.localizacao">
      </UserPost>

    </div>
  </div>
</template>

<script>
import UserPost from './UserPost.vue';
export default {
  name: 'RoleCards', // Renomeado para MovieCards
  props: {
    usuarios: {type: Array, required: false},
    postagens: {type: Object, required: false}
  },
  components:{
    UserPost,
  },
  data() {
    return {
      
    };
  },
};
</script>

<style scoped>
.page-title {
  text-align: center;
  font-size: 48px; /* Tamanho maior para enfatizar */
  color: #fff;
  margin-top: 40px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6); /* Sombra para destacar */
  border-bottom: 2px solid #23e212; /* Borda na parte inferior */
  padding-bottom: 10px; /* Espaçamento abaixo do título */
}

.page-title:hover {
  transform: scale(1.05); /* Efeito de escala ao passar o mouse */
}

.cards-container {
  padding: 20px;
  background-color: black;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start; /* Alinha os cards no início */
  margin-top: 20px;
}

.card {
  width: 200px;
  margin: 20px;
  padding: 10px;
  background-color: #333;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}

.card:hover {
  transform: scale(1.05);
}

.card-img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.card-title {
  margin-top: 10px;
  color: white;
  font-size: 18px;
}
</style>
