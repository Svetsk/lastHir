<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectCoverflow, Pagination],
    };
  },
};
</script>

<template>
  <div class="container">
    <ui-elements-title title="мои работы" />
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
        <nuxt-link to="/reviews" >
          <nuxt-img loading="lazy" src="/image/slider/slideOne.png" class="rounded-[40px]" />
        </nuxt-link>
      </swiper-slide>
      <swiper-slide>
        <nuxt-link to="/reviews" >
          <nuxt-img loading="lazy" src="/image/slider/slideTwo.png" class="rounded-[40px]" />
        </nuxt-link>
      </swiper-slide>
      <swiper-slide>
        <nuxt-link to="/reviews">
          <nuxt-img loading="lazy" src="/image/slider/slideThree.png" class="rounded-[40px]" />
        </nuxt-link>
      </swiper-slide>
      <swiper-slide>
        <nuxt-link to="/reviews">
          <nuxt-img loading="lazy" src="/image/slider/slideFive.png" class="rounded-[40px]" />
        </nuxt-link>
      </swiper-slide>
      <swiper-slide>
        <nuxt-link to="/reviews">
          <nuxt-img loading="lazy" src="/image/slider/slideFive.png" class="rounded-[40px]" />
        </nuxt-link>
      </swiper-slide>
      <swiper-slide>
        <nuxt-link to="/reviews">
          <nuxt-img loading="lazy" src="/image/slider/slideSix.png" class="rounded-[40px]" />
        </nuxt-link>
      </swiper-slide>
      <swiper-slide>
        <nuxt-link to="/reviews">
          <nuxt-img loading="lazy" src="/image/slider/slideSeven.png" class="rounded-[40px]" />
        </nuxt-link>
      </swiper-slide>
      <swiper-slide>
        <nuxt-link to="/reviews" >
          <nuxt-img loading="lazy" src="/image/slider/slideEight.png" class="rounded-[40px]" />
        </nuxt-link>
      </swiper-slide>
      <swiper-slide>
        <nuxt-link to="/reviews" >
          <nuxt-img loading="lazy" src="/image/slider/slideNine.png" class="rounded-[40px]" />
        </nuxt-link>
      </swiper-slide>
    </swiper>
    <nuxt-link to="/reviews" class="rounded-[40px] pt-[72px] flex justify-center aaaaa">
      <svg xmlns="http://www.w3.org/2000/svg" width="239" height="149" viewBox="0 0 239 149" fill="none">
        <rect x="1" y="1" width="236.859" height="146.093" rx="39" stroke="white" stroke-width="2"/>
        <path d="M187.469 78.2541C188.446 77.2778 188.446 75.6949 187.469 74.7186L171.559 58.8087C170.583 57.8323 169 57.8323 168.024 58.8087C167.048 59.785 167.048 61.3679 168.024 62.3442L182.166 76.4863L168.024 90.6285C167.048 91.6048 167.048 93.1877 168.024 94.164C169 95.1403 170.583 95.1403 171.559 94.164L187.469 78.2541ZM53.1572 78.9863H185.702V73.9863H53.1572V78.9863Z" fill="white"/>
      </svg>
    </nuxt-link>
  </div>
</template>

<style scoped lang="scss">
@media screen and (max-width: 790px) {
  .aaaaa{
    padding-top: 20px !important;
  }
  svg{
    max-width: 84px !important;
    max-height: 52px !important;
  }
  .swiper-slide{
    width: 177px !important;
    height: 290px !important;
  }
}
.swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 100px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 496px;
  height: 817px;
}

.swiper-slide img {
  display: block;
  width: 100%;
}
</style>