<template>
  <nav class="navbar">

    <div class="logo flex w-[80rem] items-center justify-between">
      <div class="search">
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
      <router-link to="/">
        <img src="@/assets/images/Bazaar-logo-cropped.png" alt="Bazaar Logo" />
      </router-link>
      <div class="profile">
        <i class="fa-solid fa-user"></i>
      </div>
    </div>

    <div class="max-h-full">
      <ul class="nav-links">
        <li v-for="link in navLinks" :key="link.name">
          <router-link :to="link.path">{{ link.name }}</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
const navLinks = ref([
  { name: 'Offer Zone', path: '/offer-zone' },
  { name: 'Best Seller', path: '/best-seller' },
]);
</script>

<style scoped>
.navbar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0.4rem 0.6rem;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
}

.logo img {
  height: 40px;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 20px;
}

.nav-links li a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
}

.nav-links li a:hover {
  color: #239ef5;
}

.profile i.fa-solid.fa-user, i.fa-solid.fa-magnifying-glass {
  font-size: 24px;
  color: #239ef5;
  margin-left: 8px;
  vertical-align: middle;
}

.profile i.fa-solid.fa-user:hover, i.fa-solid.fa-magnifying-glass:hover {
  color: #239ef5;
  transform: scale(1.2);
  transition: all 0.3s ease;
  cursor: pointer;
}

@media (prefers-color-scheme: dark) {
  .navbar {
    background-color: #366674;
    border-bottom: 1px solid #366674;
  }
  .nav-links li a {
    color: #fff;
  }
  .nav-links li a:hover {
    color: #239ef5;
  }
  .profile i.fa-solid.fa-user i.fa-solid.fa-magnifying-glass {
    color: #239ef5;
  }
  .profile i.fa-solid.fa-user:hover, i.fa-solid.fa-magnifying-glass:hover {
    color: #fff;
  }
}
</style>