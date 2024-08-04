<template>
  <div v-if="isOpen" class="modal-overlay" @click="closeModal">
    <div class="modal-content" @click.stop>
      <button class="close-button" @click="closeModal">×</button>
      <iframe
          :src="videoUrl"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, watch } from 'vue';

const props = defineProps({
  isOpen: Boolean,
  videoUrl: String,
});

const emit = defineEmits(['update:isOpen']);

const closeModal = () => {
  emit('update:isOpen', false);
};

watch(
    () => props.isOpen,
    (newVal) => {
      if (newVal) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
);
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  overflow: hidden;
  padding: 10px;
}

.modal-content {
  position: relative;
  width: 100%;
  max-width: 800px;
  border-radius: 47px;
  border: 1px solid #FFF;
  background: rgba(24, 24, 24, 0.64);
  backdrop-filter: blur(11.649999618530273px);
  padding: 20px;
  border-radius: 8px;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
}

iframe {
  width: 100%;
  height: 550px;
}

@media (max-width: 768px) {
  iframe {
    height: 400px;
  }
}
</style>
