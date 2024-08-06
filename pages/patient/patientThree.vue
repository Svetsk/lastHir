<!-- components/Gallery.vue -->
<template>
  <AddHeader>
    <MenuAbout />
  </AddHeader>
  <div class="container">
    <nuxt-link prefetch to="/myWork" class="flex items-center gap-[8px] mt-[100px] mb-[100px] text-[25px] font-[500]">
      <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="none">
        <circle cx="20.1211" cy="20" r="19.5" transform="rotate(90 20.1211 20)" stroke="white"/>
        <path d="M11.1532 19.2929C10.7627 19.6834 10.7627 20.3166 11.1532 20.7071L17.5172 27.0711C17.9077 27.4616 18.5409 27.4616 18.9314 27.0711C19.3219 26.6805 19.3219 26.0474 18.9314 25.6569L13.2746 20L18.9314 14.3431C19.3219 13.9526 19.3219 13.3195 18.9314 12.9289C18.5409 12.5384 17.9077 12.5384 17.5172 12.9289L11.1532 19.2929ZM27.8604 19L11.8604 19L11.8604 21L27.8604 21L27.8604 19Z" fill="white"/>
      </svg>
      вернуться
    </nuxt-link>
    <div class="gallery">
      <div v-for="photo in photos" :key="photo.id" class="gallery-item">
        <nuxt-img loading="lazy" :src="photo.src" :alt="photo.title" @click="openModal(photo)" />
      </div>

      <!-- Modal -->
      <div v-if="currentPhoto" class="modal" @click.self="closeModal">
        <div class="modal-content">
          <nuxt-img loading="lazy" :src="currentPhoto.src" :alt="currentPhoto.title" class="popup-image" />
          <button class="popup-close cls" @click="closeModal">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="27" viewBox="0 0 26 27" fill="none">
              <line x1="2.06029" y1="1.93934" x2="24.0604" y2="23.9394" stroke="white" stroke-width="3"/>
              <line x1="23.0607" y1="3.06066" x2="1.06056" y2="25.0608" stroke="white" stroke-width="3"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Галерея Евгении Корниясовой - Пластическая Хирургия и Онкология в Геленджике",
  ogTitle: "Галерея Евгении Корниясовой в Области Онкологии и Пластической Хирургии - Клиника «Ланцетъ», Геленджик",
});

import { ref } from 'vue'
import AddHeader from "~/components/Ui/AddHeader.vue";

const photos = [
  { id: 1, src: '/image/work/patientThree/1.png', title: 'Photo 1' },
  { id: 2, src: '/image/work/patientThree/2.png', title: 'Photo 2' },
  { id: 3, src: '/image/work/patientThree/3.png', title: 'Photo 3' },
  { id: 3, src: '/image/work/patientThree/4.png', title: 'Photo 3' },
  { id: 3, src: '/image/work/patientThree/5.png', title: 'Photo 3' },
  { id: 3, src: '/image/work/patientThree/6.png', title: 'Photo 3' },
  { id: 3, src: '/image/work/patientThree/7.png', title: 'Photo 3' },
  { id: 3, src: '/image/work/patientThree/8.png', title: 'Photo 3' },
  { id: 3, src: '/image/work/patientThree/9.png', title: 'Photo 3' },
  { id: 3, src: '/image/work/patientThree/10.png', title: 'Photo 10' },
  { id: 3, src: '/image/work/patientThree/11.png', title: 'Photo 3' },
  { id: 2, src: '/image/work/patientThree/2.png', title: 'Photo 2' },
]

const currentPhoto = ref(null)

const openModal = (photo) => {
  currentPhoto.value = photo
}

const closeModal = () => {
  currentPhoto.value = null
}
</script>

<style scoped>
.cls{
  transform: translate(20px, -30px);
}
.gallery {
  display: flex;
  flex-wrap: wrap;
  row-gap: 80px;
  justify-content: space-between;
}

.gallery-item img {
  width: 420px;
  height: 450px;
  object-fit: cover;
  cursor: pointer;
  border-radius: 40px;
}

.modal {
  position: fixed;
  z-index: 10000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  padding-top: 100px;
}

.modal-content {
  position: relative;
  border-radius: 47px;
  border: 1px solid #FFF;
  background: rgba(24, 24, 24, 0.64);
  backdrop-filter: blur(11.649999618530273px);
  padding: 20px;
  max-width: 90%;
  max-height: 640px;
}

.popup-image {
  object-fit: contain;
  max-height: 600px;
  border-radius: 40px;
}

.popup-close {
  position: absolute;
  top: 10px;
  right: 10px;
  color: black;
  border: none;
  cursor: pointer;
}
@media screen and (max-width: 900px) {
  .gallery{
    justify-content: center;
    align-items: center;
  }
  .popup-image {
    object-fit: contain;
    max-height: 300px;
    border-radius: 40px;
  }
  .modal-content {
    max-width: 100%;
    max-height: 350px;
  }
}
</style>
