<template>
    <section class="history-section">
      <h2 class="history-title">HISTÓRICO</h2>
      <section class="history">
        <div v-for="card in cards" :key="card.title" class="card">
          <img :src="card.image" :alt="card.title" class="card-img">
          <h3>{{ card.title }}</h3>
          <p>{{ card.date }}</p>
        </div>
      </section>
    </section>
  </template>
  
  <script>
  export default {
    name: 'UserHistory',
    data() {
      return {
        cards: [
          { title: 'LAPA', date: '1 dia atrás', image: '/senhora-sorrindo.jpg'},
          { title: 'BAIXO BOTA', date: '3 dias atrás', image: '/senhora-sorrindo.jpg'},
          { title: 'MURETA', date: '5 dias atrás', image: '/senhora-sorrindo.jpg'},
          { title: 'BAR DO BU', date: '1 semana atrás', image: '/senhora-sorrindo.jpg' }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .history-section {
    text-align: center;
    padding: 20px;
  }
  
  .history-title {
    font-size: 2em;
    color: white;
    background: linear-gradient(90deg, #9C27B0, #7B1FA2, #FFEB3B);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 20px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
  
  .history {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 20px;
  }
  
  .card {
    background-color: #333;
    border-radius: 10px;
    width: 500px;
    text-align: center;
    margin: 10px;
    padding: 10px;
  }
  
  .card-img {
    width: 100%;
    border-radius: 10px 10px 0 0;
  }
  
  h3 {
    margin: 10px 0;
    color: #fff;
  }
  
  p {
    color: #aaa;
  }
  </style>
  