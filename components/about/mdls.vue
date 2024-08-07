<template>
  <div class="container">
    <div v-if="isVisible" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative">
        <button @click="closeModal" class="absolute top-2 right-9 text-gray-500 hover:text-gray-800 text-[40px]">
          &times;
        </button>
        <h2 class="text-xl font-semibold mb-4">Модальное окно</h2>
        <swiper
            :modules="[Navigation]"
            navigation
            class="mySwiper">
          <swiper-slide v-for="(image, index) in images" :key="index">
            <nuxt-img :src="image" class="w-full h-auto" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

import { Navigation } from 'swiper/modules';

import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';

const isVisible = ref(false);
const images = [
  '/image/book/1.png',
  '/image/book/2.png',
  '/image/book/3.png',
  '/image/book/4.png',
];

// Функция для закрытия модального окна
const closeModal = () => {
  isVisible.value = false;
};

// Обработчик события открытия модального окна
const openModalHandler = () => {
  isVisible.value = true;
};

onMounted(() => {
  window.addEventListener('open-modal', openModalHandler);
});

onUnmounted(() => {
  window.removeEventListener('open-modal', openModalHandler);
});
</script>

<style scoped>
/* Стили для модального окна и слайдера */
.fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.z-50 {
  z-index: 50;
}

.bg-opacity-50 {
  background-color: rgba(0, 0, 0, 0.5);
}

.flex {
  display: flex;
}

.items-center {
  align-items: center;
}

.justify-center {
  justify-content: center;
}

.bg-white {
  background-color: white;
}

.relative {
  position: relative;
}

.absolute {
  position: absolute;
}

.top-2 {
  top: 0.5rem;
}

.right-2 {
  right: 0.5rem;
}

.text-gray-500 {
  color: #6b7280;
}

.text-gray-500:hover {
  color: #1f2937;
}

.w-full {
  width: 100%;
}

.h-auto {
  height: auto;
}
.mySwiper{

}
</style>
