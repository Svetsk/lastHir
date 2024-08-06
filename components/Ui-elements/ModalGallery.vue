<template>
  <div>
    <button @click="openModal" class="open-modal-button">Open Gallery</button>

    <div v-if="isOpen" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <button class="close-modal-button" @click="closeModal">×</button>
        <div class="gallery">
          <div class="gallery-item" v-for="(image, index) in images" :key="index">
            <nuxt-img loading="lazy" :src="image" :alt="'Image ' + index" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
const images = ref([
  'https://via.placeholder.com/300x200?text=Image+1',
  'https://via.placeholder.com/300x200?text=Image+2',
  'https://via.placeholder.com/300x200?text=Image+3',
])

const openModal = () => {
  isOpen.value = true
}

const closeModal = () => {
  isOpen.value = false
}
</script>

<style scoped>
.open-modal-button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  position: relative;
  width: 80%;
  max-width: 600px;
}
.close-modal-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}
.gallery {
  display: flex;
  flex-wrap: wrap;
}
.gallery-item {
  flex: 1 1 calc(33.333% - 10px);
  margin: 5px;
}
.gallery-item img {
  width: 100%;
  border-radius: 5px;
}
</style>
