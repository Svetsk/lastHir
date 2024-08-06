<script setup>
import { ref } from 'vue'
import MenuHome from '@/components/MenuHome.vue'

const isMenuOpen = ref(false)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <div>
    <button @click="toggleMenu">
      <nuxt-img class="burger__menu" src="/image/ui/burger.svg" alt="Menu" />
    </button>
    <div v-if="isMenuOpen" class="menu">
      <MenuHome @close-menu="toggleMenu" />
    </div>
  </div>
</template>

<style scoped>
.burger__menu {
  width: 87px;
  height: 45px;
  cursor: pointer;
}
.menu {
  position: fixed; /* Убедитесь, что меню фиксируется */
  top: 50px; /* Расположение меню */
  right: 10px;
  background: white;
  border: 1px solid #ccc;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  width: 100vw; /* Если меню должно занимать всю ширину */
  height: 100vh; /* Если меню должно занимать всю высоту */
}
</style>
