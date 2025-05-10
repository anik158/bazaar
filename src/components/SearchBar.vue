<script setup>

</script>

<template>
  <div class="search-bar mt-6 mx-auto max-h-6 flex w-[80rem] items-center justify-between">
    <div class="logo max-h-full w-1/4 overflow-hidden">
      <img src="@/assets/images/Bazaar-logo.png" alt="Bazaar Logo" style="width: 100px; height: 100px" class="max-h-full w-auto" />
    </div>
    <form action="" class="w-2/4 relative">
      <input type="text" class="border-2 pl-2 border-solid rounded-md w-full border-[#239ef5] h-12 focus:outline-none" placeholder="Search for Products" autocomplete="off" />

      <button type="submit" class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700">
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
    <div class="profile-icon">
      <i class="fa-solid fa-user"></i>
    </div>
  </div>
</template>


<style scoped>
.profile-icon i.fa-solid.fa-user{
  font-size: 24px;
  color: #239ef5;
  margin-left: 8px;
  vertical-align: middle;
}

.profile-icon i.fa-solid.fa-user:hover {
  color: #7a3737;
  transform: scale(1.2);
  transition: all 0.3s ease;
  cursor: pointer;
}
@media (prefers-color-scheme: dark) {

  .profile-icon i.fa-solid.fa-user{
    color: #239ef5;
  }

  .profile-icon i.fa-solid.fa-user:hover {
    color: #7a3737;
  }
}


</style>