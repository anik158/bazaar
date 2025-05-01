<template>
  <div id="app" class="h-screen flex flex-col">
    <Navbar />
    <div class="flex-1 overflow-hidden">
      <router-view />
    </div>
  </div>
</template>


<script setup>
import Navbar from '@/components/NavBar.vue';

</script>