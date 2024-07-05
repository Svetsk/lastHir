<template>
  <div class="slider-container">
    <swiper ref="swiperRef" :slides-per-view="1" @slideChange="onSlideChange">
      <swiper-slide>
        <div class="w-[804px] h-[616px] bg-white">

        </div>
      </swiper-slide>
    </swiper>

    <input
        type="range"
        min="0"
        :max="slides.length - 1"
        v-model="currentSlide"
        @input="onRangeInput"
        class="slider-range"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css'; // Импорт CSS стилей Swiper

const slides = [
  { src: 'https://via.placeholder.com/600x400', alt: 'Image 1' },
  { src: 'https://via.placeholder.com/600x400', alt: 'Image 2' },
  { src: 'https://via.placeholder.com/600x400', alt: 'Image 3' }
];

const currentSlide = ref(1);
const swiperRef = ref(null);

const onRangeInput = () => {
  if (swiperRef.value) {
    swiperRef.value.swiper.slideTo(currentSlide.value);
  }
};

const onSlideChange = () => {
  currentSlide.value = swiperRef.value.swiper.realIndex;
};

watch(currentSlide, (newValue) => {
  if (swiperRef.value && swiperRef.value.swiper.realIndex !== newValue) {
    swiperRef.value.swiper.slideTo(newValue);
  }
});
</script>

<style scoped>
.slider-container {
  width: 600px;
  margin: 0 auto;
  text-align: center;
}

.slide-image {
  width: 100%;
  height: auto;
}

.slider-range {
  width: 100%;
  margin-top: 20px;
}
</style>