<script setup>
import { ref, onMounted } from "vue";

import image1 from "@/assets/images/meal-3175540_1280.jpg";
import image2 from "@/assets/images/raspberries-2023404_1280.jpg";
import image3 from "@/assets/images/vegetables-3483066_1280.jpg";
import Card from "@/components/Card.vue";
import products from "@/data/products.json"


const images = ref([image1, image2, image3]);
const currentImageIndex = ref(0);

const headlines = ref(["Contains Quality", "At Best Price", "Taste the Desire"]);
const headlineIndex = ref(0);

const lengths = [1,2,3,4]


console.log(products)
onMounted(() => {
  setInterval(() => {
    currentImageIndex.value = (currentImageIndex.value + 1) % images.value.length;
  }, 4000);

  setInterval(() => {
    headlineIndex.value = (headlineIndex.value + 1) % headlines.value.length;
  },3000)
});
</script>

<template>
  <div class="container h-screen w-[100vw]  mx-auto">
    <div class="slider h-1/2 w-full flex justify-center items-center overflow-hidden relative">

      <transition name="headline-fade-slide">
        <p :key="headlines[headlineIndex]" class="headline">
          {{ headlines[headlineIndex] }}
        </p>
      </transition>
      <transition-group name="fade-wave">
        <img
            :key="images[currentImageIndex]"
            :src="images[currentImageIndex]"
            alt="slider image"
            class="w-full h-full object-cover absolute"
        />
        <p class="headline">{{headlines[headlineIndex]}}</p>
      </transition-group>
    </div>

    <div class="products max-w-7xl mx-auto py-3">
        <p class="text-center text-4xl font-bold py-3">All Products</p>

      <div class="product-list flex justify-between items-center flex-wrap">
        <Card v-for="product in products" :key="product.id" :product="product" />
      </div>
    </div>
  </div>
</template>


<style scoped>
/* Fade wave transition */
.fade-wave-enter-active, .fade-wave-leave-active {
  transition: opacity 2s ease-in-out;
}
.fade-wave-enter-from, .fade-wave-leave-to {
  opacity: 0;
}

.headline {
  position: absolute;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 5px;
}

/* Enter Animation */
.headline-fade-slide-enter-active {
  transition: opacity 1.5s ease-in-out, transform 1.5s ease-in-out;
}

/* Exit Animation */
.headline-fade-slide-leave-active {
  transition: opacity 1.5s ease-in-out, transform 1.5s ease-in-out;
}

/* Initial State: Before Appearing */
.headline-fade-slide-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}

/* Final State: Before Disappearing */
.headline-fade-slide-leave-to {
  opacity: 0;
  transform: translateX(100%);
}


</style>
