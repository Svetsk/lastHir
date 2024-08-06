<template>
  <div>
    <button class="card" @click="openModal">
      <nuxt-img loading="lazy" :src="preview" class="pew" />

      <div class="flex zzz">
        <p class="num">Пациент {{ num }}</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="56" viewBox="0 0 50 56" fill="none">
          <path d="M6.46134 15.0769C6.46134 11.0783 8.06682 7.2434 10.9246 4.41593C13.7824 1.58846 17.6584 0 21.6999 0C25.7414 0 29.6174 1.58846 32.4751 4.41593C35.3329 7.2434 36.9384 11.0783 36.9384 15.0769C36.9384 15.3625 36.8237 15.6365 36.6196 15.8384C36.4155 16.0404 36.1386 16.1538 35.8499 16.1538C35.5613 16.1538 35.2844 16.0404 35.0803 15.8384C34.8761 15.6365 34.7615 15.3625 34.7615 15.0769C34.7615 11.6495 33.3853 8.36248 30.9358 5.93893C28.4863 3.51538 25.164 2.15385 21.6999 2.15385C18.2357 2.15385 14.9135 3.51538 12.4639 5.93893C10.0144 8.36248 8.63827 11.6495 8.63827 15.0769C8.63827 15.3625 8.52359 15.6365 8.31947 15.8384C8.11534 16.0404 7.83849 16.1538 7.54981 16.1538C7.26113 16.1538 6.98427 16.0404 6.78014 15.8384C6.57602 15.6365 6.46134 15.3625 6.46134 15.0769ZM43.4692 28C41.8528 27.9981 40.2937 28.5923 39.0963 29.6665C39.0034 28.4646 38.5726 27.3123 37.8526 26.3399C37.1325 25.3676 36.1518 24.6139 35.0215 24.1641C33.8911 23.7143 32.6561 23.5863 31.4561 23.7945C30.256 24.0028 29.1388 24.5391 28.2307 25.3427V15.0769C28.2307 13.3632 27.5426 11.7197 26.3178 10.5079C25.0931 9.29615 23.4319 8.61538 21.6999 8.61538C19.9678 8.61538 18.3067 9.29615 17.0819 10.5079C15.8571 11.7197 15.1691 13.3632 15.1691 15.0769V40.3846L12.105 35.5223C11.216 34.0815 9.79241 33.042 8.13873 32.6264C6.48505 32.2108 4.73264 32.452 3.25639 33.2984C1.78014 34.1448 0.69729 35.5291 0.23949 37.1553C-0.21831 38.7815 -0.0147023 40.5204 0.806756 42L8.78522 55.4615C8.9407 55.6847 9.17554 55.8417 9.44285 55.9011C9.71016 55.9605 9.99028 55.918 10.2273 55.782C10.4643 55.6461 10.6408 55.4267 10.7215 55.1677C10.8023 54.9086 10.7813 54.629 10.6628 54.3846L2.68708 40.9231C2.10972 39.9334 1.95337 38.7574 2.25242 37.6536C2.55146 36.5499 3.28141 35.6089 4.28169 35.0377C5.28196 34.4665 6.47062 34.3118 7.58617 34.6076C8.70173 34.9035 9.6528 35.6257 10.2302 36.6154L10.2492 36.6477L15.3323 44.7246C15.4572 44.9239 15.6444 45.0775 15.8655 45.1619C16.0866 45.2464 16.3295 45.2572 16.5573 45.1926C16.7852 45.128 16.9855 44.9916 17.1278 44.8041C17.2702 44.6167 17.3468 44.3883 17.346 44.1538V15.0769C17.346 13.9345 17.8047 12.8388 18.6212 12.0309C19.4377 11.2231 20.5452 10.7692 21.6999 10.7692C22.8546 10.7692 23.962 11.2231 24.7785 12.0309C25.595 12.8388 26.0537 13.9345 26.0537 15.0769V33.3846C26.0537 33.6702 26.1684 33.9442 26.3725 34.1461C26.5767 34.3481 26.8535 34.4615 27.1422 34.4615C27.4309 34.4615 27.7077 34.3481 27.9119 34.1461C28.116 33.9442 28.2307 33.6702 28.2307 33.3846V30.1538C28.2307 29.0114 28.6894 27.9157 29.5059 27.1078C30.3224 26.3 31.4298 25.8462 32.5845 25.8462C33.7393 25.8462 34.8467 26.3 35.6632 27.1078C36.4797 27.9157 36.9384 29.0114 36.9384 30.1538V35.5385C36.9384 35.8241 37.0531 36.098 37.2572 36.3C37.4613 36.5019 37.7382 36.6154 38.0269 36.6154C38.3155 36.6154 38.5924 36.5019 38.7965 36.3C39.0007 36.098 39.1153 35.8241 39.1153 35.5385V34.4615C39.1153 33.3191 39.574 32.2234 40.3906 31.4155C41.2071 30.6077 42.3145 30.1538 43.4692 30.1538C44.6239 30.1538 45.7313 30.6077 46.5478 31.4155C47.3644 32.2234 47.8231 33.3191 47.8231 34.4615V44.1538C47.8231 50.2546 45.7795 54.4008 45.7604 54.4412C45.6964 54.5677 45.6581 54.7055 45.648 54.8467C45.6378 54.9879 45.6558 55.1297 45.7011 55.2639C45.7463 55.3982 45.8178 55.5224 45.9116 55.6292C46.0054 55.7361 46.1195 55.8237 46.2475 55.8869C46.399 55.9611 46.5656 55.9998 46.7346 56C46.9368 56.0001 47.1351 55.9445 47.3071 55.8395C47.4792 55.7344 47.6183 55.5839 47.7088 55.405C47.8013 55.2192 50 50.7931 50 44.1538V34.4615C50 32.7478 49.3119 31.1043 48.0872 29.8925C46.8624 28.6808 45.2013 28 43.4692 28Z" fill="white"/>
        </svg>
      </div>
    </button>
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

// Определение состояния модального окна
const isModalOpen = ref(false);

// Функция для открытия модального окна
function openModal() {
  console.log('Opening modal');
  isModalOpen.value = true;
}

// Функция для закрытия модального окна
function closeModal() {
  console.log('Closing modal');
  isModalOpen.value = false;
}

// Определение свойств компонента
const props = defineProps({
  image: String,
  num: String,
  preview: String,
  sliderImageOne: {
    type: String,
    required: true,
  },
  sliderImageTwo: {
    type: String,
    default: null, // значение по умолчанию
  },
  sliderImageThree: {
    type: String,
    default: null, // значение по умолчанию
  },
  sliderImageFore: {
    type: String,
    default: null, // значение по умолчанию
  },
  sliderImageFive: {
    type: String,
    default: null, // значение по умолчанию
  },
  sliderImageSix: {
    type: String,
    default: null, // значение по умолчанию
  },
});

</script>

<style lang="scss" scoped>
.num{
  font-size: 25px;
  font-weight: 700;
  text-transform: uppercase;
  color: #D2D2D2;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.55);
}
.swiper-slide{
  display: flex !important;
  justify-content: center !important;
}
@media screen and (max-width: 1440px) {
  .modal-overlay{
    & img{
      width: 420px;
    }
  }
}
@media screen and (max-width: 600px) {
  .modal-overlay{
    & img{
      width: 320px;
    }
  }
}
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
  backdrop-filter: blur(11.649999618530273px);
  padding: 20px;
  max-width: 500px;
  width: 100%;
}
.card{
  border-radius: 40px;
  background: #FFF;
  position: relative;
  & .zzz{
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    max-width: 300px;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
    //max-height: 120px;
  }
  & img{
    padding: 18px;
    width: 390px !important;
    height: auto;
    //background: linear-gradient(to top, black -15%, transparent 90%);
    border-radius: 40px;
  }
}
.pew{

}
@media screen and (max-width: 850px) {
  .card{
    & img{
      padding: 12px 12px;
    }
  }
}
</style>