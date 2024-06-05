<template>
      <div class="h-full">
    <header>
      <NavBar />
    </header>
    <main>
      <router-view />
    </main>
  </div>

</template>
<script setup>
import NavBar from './NavBar.vue';
</script>