<template>
      <AppHeader />
      <img src="/h-straps.png" alt="" class="mid-photo">
      <UserRanking />
      <MainMenu />
      <UserHistory />
  </template>
  
  <script>
  import AppHeader from '../components/UserProfile.vue'
  import UserRanking from '../components/UserRanking.vue'
  import MainMenu from '../components/UserMenu.vue'
  import UserHistory from '../components/UserHistory.vue'
  
  export default {
    name: 'UserPage',
    components: {
      AppHeader,
      UserRanking,
      MainMenu,
      UserHistory
    }
  }
  </script>
  
  <style>
  body {
    background-color: black;
    color: white;
    font-family: Arial, sans-serif;
  }
  
  .mid-photo {
    display: block;
    margin: 20px auto;
    max-width: 60%; /* Ensures the image does not exceed 100% of the container width */
    height: auto; /* Maintains the aspect ratio */
    border-radius: 10px; /* Optional: Adds rounded corners */
  }
  </style>
  