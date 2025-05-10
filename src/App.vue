<template>
  <div id="app" class="min-h-full flex flex-col">
    <Navbar />
    <div class="flex-1">
      <router-view />
    </div>
  </div>
</template>


<script setup>
import Navbar from '@/components/NavBar.vue';

</script>