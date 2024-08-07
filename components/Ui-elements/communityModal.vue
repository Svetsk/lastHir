<template>
  <div>
    <button @click="openModal">Open Modal</button>

    <div v-if="isModalOpen" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <swiper
            :effect="'coverflow'"
            :grabCursor="true"
            :centeredSlides="true"
            :slidesPerView="'auto'"
            :coverflowEffect="{
        rotate: 35,
        stretch: 5,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    }"
            :pagination="false"
            :modules="modules"
            class="mySwiper"
        >
          <swiper-slide>
            <nuxt-img loading="lazy" :src="sliderImageOne" class="rounded-[40px]" />
          </swiper-slide>
          <swiper-slide v-if="sliderImageTwo">
            <nuxt-img loading="lazy" :src="sliderImageTwo" class="rounded-[40px]" />
          </swiper-slide>
          <swiper-slide v-if="sliderImageThree">
            <nuxt-img loading="lazy" :src="sliderImageThree" class="rounded-[40px]" />
          </swiper-slide>
          <swiper-slide v-if="sliderImageFore">
            <nuxt-img loading="lazy" :src="sliderImageFore" class="rounded-[40px]" />
          </swiper-slide>
          <swiper-slide v-if="sliderImageFive">
            <nuxt-img loading="lazy" :src="sliderImageFive" class="rounded-[40px]" />
          </swiper-slide>
          <swiper-slide v-if="sliderImageSix">
            <nuxt-img loading="lazy" :src="sliderImageSix" class="rounded-[40px]" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.min.css';

const isModalOpen = ref(false);

function openModal() {
  isModalOpen.value = true;
}

function closeModal() {
  isModalOpen.value = false;
}

const props = defineProps({
  sliderImageOne: {
    type: String,
    required: true,
  },
  sliderImageTwo: {
    type: String,
    default: null,
  },
  sliderImageThree: {
    type: String,
    default: null,
  },
  sliderImageFore: {
    type: String,
    default: null,
  },
  sliderImageFive: {
    type: String,
    default: null,
  },
  sliderImageSix: {
    type: String,
    default: null,
  },
});

const modules = [ /* Swiper modules you need */ ];
</script>

<style lang="scss" scoped>
.modal-overlay {
  position: fixed;
  z-index: 10000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-content {
  border-radius: 47px;
  border: 1px solid #FFF;
  background: rgba(24, 24, 24, 0.64);
  backdrop-filter: blur(11.65px);
  padding: 20px;
  max-width: 500px;
  width: 100%;
}
.swiper-slide {
  display: flex !important;
  justify-content: center !important;
}
@media screen and (max-width: 1440px) {
  .modal-overlay {
    & img {
      width: 420px;
    }
  }
}
@media screen and (max-width: 600px) {
  .modal-overlay {
    & img {
      width: 320px;
    }
  }
}
</style>
