<template>
  <nav class="navbar">
    <div class="logo">
      <router-link to="/">
        <img src="@/assets/images/Bazaar-logo.png" alt="Bazaar Logo" />
      </router-link>
    </div>

    <ul class="nav-links">
      <li v-for="link in navLinks" :key="link.name">
        <router-link :to="link.path">{{ link.name }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const navLinks = ref([
  { name: 'Offer Zone', path: '/offer-zone' },
  { name: 'Best Seller', path: '/best-seller' }
]);
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
}

.logo img {
  height: 100px;
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
  color: #f5a623;
}

/* Dark mode adjustments */
@media (prefers-color-scheme: dark) {
  .navbar {
    background-color: #636262; /* Dark background for dark mode */
    border-bottom: 1px solid #555;
  }

  .nav-links li a {
    color: #fff; /* White text for dark mode */
  }

  .nav-links li a:hover {
    color: #f5a623; /* Keep the hover color consistent */
  }
}
</style>
