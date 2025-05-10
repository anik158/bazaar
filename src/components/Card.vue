<script setup>
defineProps({
  product: Object
});

const getImagePath = (imageFile) => {
  return new URL(`../assets/images/${imageFile}`, import.meta.url).href;
};
</script>

<template>
  <div class="card w-[250px] h-[250px] rounded-lg shadow-lg flex bg-white flex-col overflow-hidden">
    <div class="img-container h-[3/4] w-full">
      <img :src="getImagePath(product.image)" :alt="product.name" class="h-full w-full object-cover" />
    </div>
    <div class="product-title h-[1/4] mt-1 w-full flex items-center flex-col justify-center">
      <h2 class="font-bold text-lg text-black">{{ product.name }}</h2>
      <h2 class="font-medium text-lg text-black">{{ product.price }} BDT</h2>
    </div>
    <div class="overlay">
      <button class="cart-btn font-medium text-lg p-2 text-white rounded-lg hidden bg-blue-950"> Proceed to Buy</button>
      <img src="@/assets/images/Ribbon-PNG-Pic.png" alt="hover image" class="hover-img hidden" />
    </div>
  </div>
</template>




<style scoped>
.card {
  position: relative;
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.card:hover .overlay {
  opacity: 1;
}

.card:hover .product-title {
  display: none;
}

.card:hover .cart-btn {
  display: block;
  width: 100%;
}

.card:hover .hover-img {
  display: block;
  width: 80%;
  height: auto;
  position: absolute;
  bottom: 10px;
}
</style>