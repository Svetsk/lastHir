<!-- components/Gallery.vue -->
<template>
  <div class="gallery">
    <div v-for="photo in photos" :key="photo.id" class="gallery-item">
      <img :src="photo.src" :alt="photo.title" @click="openModal(photo)" />
    </div>

    <!-- Popup Modal -->
    <popup v-if="currentPhoto" @close="currentPhoto = null">
      <img :src="currentPhoto.src" :alt="currentPhoto.title" class="popup-image" />
      <button class="popup-close" @click="currentPhoto = null">Close</button>
    </popup>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Popup from 'vue3-popup'

const photos = [
  { id: 1, src: '/images/photo1.jpg', title: 'Photo 1' },
  { id: 2, src: '/images/photo2.jpg', title: 'Photo 2' },
  { id: 3, src: '/images/photo3.jpg', title: 'Photo 3' },
]

const currentPhoto = ref(null)

const openModal = (photo) => {
  currentPhoto.value = photo
}
</script>

<style scoped>
.gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.gallery-item img {
  width: 200px;
  height: 150px;
  object-fit: cover;
  cursor: pointer;
}

.popup-image {
  max-width: 100%;
  max-height: 80vh;
}

.popup-close {
  position: absolute;
  top: 10px;
  right: 10px;
  background: red;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
