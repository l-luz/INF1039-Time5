<template>
    <section class="menu">
      <router-link class="menu-item" :to="{}">SEGUINDO >></router-link>
      <router-link class="menu-item" :to="{}">STREAK >></router-link>
      <router-link class="menu-item" :to="{name: 'create_post'}">POSTAGEM >></router-link>
    </section>
  </template>
  
  <script>
  export default {
    name: 'MainMenu'
  }
  </script>
  
  <style scoped>
  .menu {
    text-align: center;
  }
  
  .menu-item {
    font-size: 1.2em;
    margin: 10px 0;
    padding: 10px;
    display: block;
    background: linear-gradient(90deg, #9C27B0, #7B1FA2, #FFEB3B);
    color: white;
    border-radius: 10px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    transition: background 0.3s ease;
  }
  
  .menu-item:nth-child(2) {
    background: linear-gradient(90deg, #2196F3, #1976D2, #FFEB3B);
  }
  
  .menu-item:nth-child(3) {
    background: linear-gradient(90deg, #4CAF50, #388E3C, #FFEB3B);
  }
  
  .menu-item:hover {
    background: linear-gradient(90deg, #FFEB3B, #FFC107, #FF9800);
  }
  </style>
  
    