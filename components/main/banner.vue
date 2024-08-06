<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';


// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
};
</script>
<template>
  <div class="container-fluide">
    <div class="banner flex justify-between dec">
      <div class="banner__left">
        <nuxt-img class="curcle" src="/image/main/banner/curcle.svg" />
        <h1>Пластический хирург / онколог</h1>
        <ui-elements-button title="Узнать подробнее" link="/about" />
        <div class="flex items-end gap-[30px] llee">
          <div class="relative mt-[132px]">
            <nuxt-img src="/image/main/banner/bg.svg" class="w-[555px] h-[206px]" />
            <div class="bg-[#3E3E3E] rounded-[20px] flex flex-col items-center justify-center w-[53px] absolute top-9 left-4">
              <a href="https://www.instagram.com/dr.korniyasova?igsh=eGNjZmZvM2xiMTR2" class="p-[12px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
                  <path d="M8.94988 0.15625H20.7435C25.2364 0.15625 28.8868 3.80667 28.8868 8.29949V20.0932C28.8868 22.2529 28.0288 24.3241 26.5017 25.8513C24.9745 27.3785 22.9033 28.2364 20.7435 28.2364H8.94988C4.45706 28.2364 0.806641 24.586 0.806641 20.0932V8.29949C0.806641 6.13977 1.66459 4.06851 3.19174 2.54135C4.7189 1.0142 6.79016 0.15625 8.94988 0.15625ZM8.66908 2.96427C7.32857 2.96427 6.04295 3.49678 5.09506 4.44467C4.14717 5.39256 3.61466 6.67817 3.61466 8.01869V20.374C3.61466 23.1679 5.87511 25.4284 8.66908 25.4284H21.0243C22.3649 25.4284 23.6505 24.8959 24.5984 23.948C25.5463 23.0001 26.0788 21.7145 26.0788 20.374V8.01869C26.0788 5.22472 23.8183 2.96427 21.0243 2.96427H8.66908ZM22.2178 5.07028C22.6832 5.07028 23.1296 5.25518 23.4587 5.58431C23.7879 5.91343 23.9728 6.35983 23.9728 6.82529C23.9728 7.29074 23.7879 7.73714 23.4587 8.06627C23.1296 8.39539 22.6832 8.5803 22.2178 8.5803C21.7523 8.5803 21.3059 8.39539 20.9768 8.06627C20.6476 7.73714 20.4627 7.29074 20.4627 6.82529C20.4627 6.35983 20.6476 5.91343 20.9768 5.58431C21.3059 5.25518 21.7523 5.07028 22.2178 5.07028ZM14.8467 7.17629C16.7085 7.17629 18.4941 7.9159 19.8106 9.23241C21.1271 10.5489 21.8668 12.3345 21.8668 14.1963C21.8668 16.0582 21.1271 17.8437 19.8106 19.1602C18.4941 20.4768 16.7085 21.2164 14.8467 21.2164C12.9849 21.2164 11.1993 20.4768 9.8828 19.1602C8.56629 17.8437 7.82668 16.0582 7.82668 14.1963C7.82668 12.3345 8.56629 10.5489 9.8828 9.23241C11.1993 7.9159 12.9849 7.17629 14.8467 7.17629ZM14.8467 9.9843C13.7296 9.9843 12.6583 10.4281 11.8684 11.218C11.0785 12.0079 10.6347 13.0792 10.6347 14.1963C10.6347 15.3134 11.0785 16.3848 11.8684 17.1747C12.6583 17.9646 13.7296 18.4083 14.8467 18.4083C15.9638 18.4083 17.0352 17.9646 17.8251 17.1747C18.615 16.3848 19.0587 15.3134 19.0587 14.1963C19.0587 13.0792 18.615 12.0079 17.8251 11.218C17.0352 10.4281 15.9638 9.9843 14.8467 9.9843Z" fill="white"/>
                </svg>
              </a>
              <a href="https://l.clck.bar/37a1ac" class="pb-[12px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="27" viewBox="0 0 26 27" fill="none">
                  <path d="M21.7948 4.65058C20.6311 3.47517 19.2451 2.54323 17.7175 1.9091C16.1899 1.27497 14.5514 0.951345 12.8974 0.957107C5.96741 0.957107 0.319312 6.6052 0.319312 13.5352C0.319312 15.7564 0.90316 17.9141 1.9947 19.8179L0.217773 26.3418L6.88126 24.5903C8.72165 25.5929 10.7905 26.126 12.8974 26.126C19.8274 26.126 25.4755 20.4779 25.4755 13.5479C25.4755 10.1844 24.1682 7.02405 21.7948 4.65058ZM12.8974 23.9937C11.019 23.9937 9.17857 23.486 7.56664 22.5341L7.18587 22.3056L3.22586 23.3464L4.27932 19.4879L4.02548 19.0945C2.98184 17.4279 2.42769 15.5016 2.42624 13.5352C2.42624 7.7729 7.12241 3.07673 12.8847 3.07673C15.6771 3.07673 18.3044 4.16827 20.2717 6.14828C21.2458 7.11793 22.0178 8.27128 22.5428 9.54148C23.0679 10.8117 23.3357 12.1735 23.3305 13.5479C23.3559 19.3102 18.6598 23.9937 12.8974 23.9937ZM18.6344 16.1752C18.3171 16.0229 16.7686 15.2614 16.4894 15.1471C16.1974 15.0456 15.9944 14.9948 15.7786 15.2995C15.5628 15.6168 14.9663 16.3275 14.7886 16.5306C14.6109 16.7464 14.4205 16.7718 14.1032 16.6068C13.7859 16.4545 12.7705 16.1118 11.5774 15.0456C10.6382 14.2079 10.0163 13.1798 9.82588 12.8625C9.64819 12.5452 9.80049 12.3802 9.9655 12.2152C10.1051 12.0756 10.2828 11.8471 10.4351 11.6694C10.5874 11.4918 10.6509 11.3521 10.7524 11.1491C10.854 10.9333 10.8032 10.7556 10.727 10.6033C10.6509 10.451 10.0163 8.90252 9.76242 8.2679C9.50857 7.65867 9.24203 7.73482 9.05165 7.72213H8.44241C8.22664 7.72213 7.89664 7.79828 7.60472 8.11559C7.32549 8.4329 6.51318 9.19444 6.51318 10.7429C6.51318 12.2914 7.6428 13.7891 7.7951 13.9921C7.94741 14.2079 10.0163 17.381 13.164 18.7391C13.9128 19.0691 14.4967 19.2595 14.9536 19.3991C15.7024 19.6402 16.3878 19.6022 16.9336 19.526C17.5428 19.4372 18.7994 18.7645 19.0532 18.0283C19.3198 17.2922 19.3198 16.6702 19.2309 16.5306C19.1421 16.391 18.9517 16.3275 18.6344 16.1752Z" fill="white"/>
                </svg>
              </a>
            </div>
            <nuxt-link to="/about" class="text-[20px] font-[500] absolute top-12 left-[260px]">
              Обо мне<br>About me
            </nuxt-link>
            <nuxt-link to="/services" class="text-[30px] font-[600] absolute bottom-3 left-4 flex items-center gap-[90px]">
              Список услуг
              <svg xmlns="http://www.w3.org/2000/svg" width="41" height="23" viewBox="0 0 41 23" fill="none">
                <path d="M40.2876 12.0978C40.8734 11.512 40.8734 10.5622 40.2876 9.97645L30.7416 0.430505C30.1559 -0.155282 29.2061 -0.155282 28.6203 0.430505C28.0345 1.01629 28.0345 1.96604 28.6203 2.55183L37.1056 11.0371L28.6203 19.5224C28.0345 20.1082 28.0345 21.0579 28.6203 21.6437C29.2061 22.2295 30.1559 22.2295 30.7416 21.6437L40.2876 12.0978ZM0.183594 12.5371L39.2269 12.5371L39.2269 9.53711L0.183594 9.53711L0.183594 12.5371Z" fill="white"/>
              </svg>
            </nuxt-link>
            <nuxt-link to="/about" class="absolute top-9 left-[492px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="58" height="57" viewBox="0 0 58 57" fill="none">
                <circle cx="29.1133" cy="28.3212" r="20" transform="rotate(-135 29.1133 28.3212)" fill="white"/>
                <path d="M35.9543 22.4793C35.9543 21.927 35.5066 21.4793 34.9543 21.4793L25.9543 21.4793C25.402 21.4793 24.9543 21.927 24.9543 22.4793C24.9543 23.0315 25.402 23.4793 25.9543 23.4793L33.9543 23.4793L33.9543 31.4793C33.9543 32.0315 34.402 32.4793 34.9543 32.4793C35.5066 32.4793 35.9543 32.0315 35.9543 31.4793L35.9543 22.4793ZM24.3477 34.5001L35.6614 23.1864L34.2472 21.7722L22.9335 33.0859L24.3477 34.5001Z" fill="black"/>
              </svg>
            </nuxt-link>
          </div>
          <nuxt-link to="/reviews" class="w-[169] h-[173] relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="169" height="174" viewBox="0 0 169 174" fill="none">
              <g filter="url(#filter0_b_0_68)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M98.9502 20.2969C98.9502 9.25118 89.9959 0.296875 78.9502 0.296875H20.1484C9.10274 0.296875 0.148438 9.25118 0.148438 20.2969V153.756C0.148438 164.802 9.10276 173.756 20.1485 173.756H148.818C159.864 173.756 168.818 164.802 168.818 153.756V94.1235C168.818 83.0778 159.864 74.1235 148.818 74.1235H118.95C107.904 74.1235 98.9502 65.1692 98.9502 54.1235V20.2969Z" fill="white" fill-opacity="0.2"/>
              </g>
              <defs>
                <filter id="filter0_b_0_68" x="-29.8516" y="-29.7031" width="228.67" height="233.459" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="15"/>
                  <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_0_68"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_0_68" result="shape"/>
                </filter>
              </defs>
            </svg>
            <nuxt-img src="/image/main/banner/bgg.png" class="w-[83px] absolute top-[10px] left-[8px]"/>
            <div class="flex flex-col gap-[2px] absolute bottom-[15px] left-[15px]">
              <p class="text-[30px] font-[600]">800+</p>
              <span class="text-[20px] font-[500]">пациентов</span>
            </div>
            <svg class="absolute top-0 right-0 w-[60px] h-[60px]" xmlns="http://www.w3.org/2000/svg" width="58" height="57" viewBox="0 0 58 57" fill="none">
              <circle cx="28.793" cy="28.4384" r="19.5" transform="rotate(-135 28.793 28.4384)" stroke="white"/>
              <path d="M35.634 22.5964C35.634 22.0442 35.1863 21.5964 34.634 21.5964L25.634 21.5964C25.0817 21.5964 24.634 22.0442 24.634 22.5964C24.634 23.1487 25.0817 23.5964 25.634 23.5964L33.634 23.5964L33.634 31.5964C33.634 32.1487 34.0817 32.5964 34.634 32.5964C35.1863 32.5964 35.634 32.1487 35.634 31.5964L35.634 22.5964ZM24.0274 34.6173L35.3411 23.3036L33.9269 21.8893L22.6132 33.203L24.0274 34.6173Z" fill="white"/>
            </svg>
          </nuxt-link>
        </div>
      </div>
      <div class="overflow-hidden max-w-[692px] max-h-[100%] rounded-[100px] slli">
        <swiper
            :navigation="true"
            :modules="modules"
            class="mySwiper"
        >
          <swiper-slide class="slidess">
            <nuxt-img src="/image/main/banner/slider/slideOne.png" class="w-[692px] h-[826px]" />
          </swiper-slide>
          <swiper-slide class="slidess">
            <nuxt-img src="/image/main/banner/slider/slideTwo.png" class="w-[692px] h-[826px]" />
          </swiper-slide>
          <swiper-slide class="slidess">
            <nuxt-img src="/image/main/banner/slider/slideThree.png" class="w-[692px] h-[826px]" />
          </swiper-slide>
          <swiper-slide class="slidess">
            <nuxt-img src="/image/main/banner/slider/slideFore.png" class="w-[692px] h-[826px]" />
          </swiper-slide>
          <swiper-slide class="slidess">
            <nuxt-img src="/image/main/banner/slider/slideFive.png" class="w-[692px] h-[826px]" />
          </swiper-slide>
          <swiper-slide class="slidess">
            <nuxt-img src="/image/main/banner/slider/slideSix.png" class="w-[692px] h-[826px]" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <div class="mob">
      <div class="py-[50px] px-[15px]">
        <nuxt-img class="" src="/image/main/banner/curcle.svg" />
        <h3>Пластический<br>хирург / онколог</h3>
        <div class="max-w-[420px]">
          <swiper
              :navigation="true"
              :modules="modules"
              class="mySwiper myss"
          >
            <swiper-slide>
              <div class="w-[350px] h-[400px]">
                <nuxt-img src="/image/main/banner/slider/slideOne.png" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="w-[350px] h-[400px]">
                <nuxt-img src="/image/main/banner/slider/slideTwo.png" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="w-[350px] h-[400px]">
                <nuxt-img src="/image/main/banner/slider/slideThree.png" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="w-[350px] h-[400px]">
                <nuxt-img src="/image/main/banner/slider/slideFore.png" />
              </div>
            </swiper-slide>
          </swiper>
          <ui-elements-button title="Узнать подробнее" class="pt-[40px]" />
          <div class="pt-[45px] relative">
            <nuxt-img src="/image/main/banner/mob/mobban.png" class="w-[100%] h-[100%]" />
            <nuxt-img src="/image/main/banner/mob/inst.svg" class="as absolute top-[55px] left-[11px] w-[20px] h-[20px]" />
            <nuxt-img src="/image/main/banner/mob/what.svg" class="as absolute top-[82px] left-[12px] w-[20px] h-[20px]" />
            <nuxt-link to="" class="flex gap-[25px] items-center absolute top-[45px] left-[135px] asdad">
              <p class="text-[14px]">Обо мне<br>About me</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="79" height="79" viewBox="0 0 79 79" fill="none">
                <circle cx="39.2656" cy="39.2323" r="27.5676" transform="rotate(-135 39.2656 39.2323)" fill="white"/>
                <path d="M48.6956 31.1798C48.6956 30.4186 48.0785 29.8014 47.3173 29.8014L34.9118 29.8014C34.1506 29.8014 33.5334 30.4186 33.5334 31.1798C33.5334 31.9411 34.1506 32.5582 34.9118 32.5582L45.9389 32.5582L45.9389 43.5852C45.9389 44.3465 46.556 44.9636 47.3172 44.9636C48.0785 44.9636 48.6956 44.3465 48.6956 43.5852L48.6956 31.1798ZM32.6973 47.7491L48.2919 32.1545L46.3426 30.2052L30.748 45.7998L32.6973 47.7491Z" fill="black"/>
              </svg>
            </nuxt-link>
            <nuxt-link to="/" class="flex items-center gap-[55px] absolute bottom-[12px] left-[11px]">
              <p class="font-[600]">Список услуг</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="27" height="17" viewBox="0 0 30 17" fill="none">
                <path d="M28.9157 9.51062C29.3357 9.09054 29.3357 8.40946 28.9157 7.98938L22.0701 1.14378C21.65 0.723704 20.9689 0.723704 20.5488 1.14378C20.1287 1.56386 20.1287 2.24495 20.5488 2.66503L26.6338 8.75L20.5488 14.835C20.1287 15.255 20.1287 15.9361 20.5488 16.3562C20.9689 16.7763 21.65 16.7763 22.0701 16.3562L28.9157 9.51062ZM0.15625 9.82568L28.155 9.82568L28.155 7.67432L0.15625 7.67432L0.15625 9.82568Z" fill="white"/>
              </svg>
            </nuxt-link>
          </div>
          <nuxt-link to="/myWork">
            <div class="flex gap-[4px] adfssx">
              <nuxt-img src="/image/main/banner/bgg.png" class="w-[120px] h-[100%] py-[28px]" />
              <div class="flex flex-col gap-[2px]">
                <p class="text-[30px] font-[500] leading-0">800+</p>
                <span class="text-[21px] font-[400] leading-0">пациентов</span>
              </div>
              <div class="translate-y-[-20px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="57" height="56" viewBox="0 0 57 56" fill="none">
                  <circle cx="28.248" cy="27.8759" r="19.2186" transform="rotate(-135 28.248 27.8759)" stroke="white" stroke-width="0.985569"/>
                  <path d="M34.9905 22.1191C34.9905 21.5748 34.5492 21.1335 34.0049 21.1335L25.1348 21.1335C24.5905 21.1335 24.1492 21.5748 24.1492 22.1191C24.1492 22.6634 24.5905 23.1047 25.1348 23.1047L33.0194 23.1047L33.0194 30.9892C33.0194 31.5335 33.4606 31.9748 34.0049 31.9748C34.5492 31.9748 34.9905 31.5335 34.9905 30.9892L34.9905 22.1191ZM23.5514 33.9664L34.7018 22.816L33.308 21.4222L22.1576 32.5726L23.5514 33.9664Z" fill="white"/>
                </svg>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.adfssx{
  background: #3E3E3E;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.mob{
  display: none;
  border: 1px solid #ffffff;
  border-radius: 40px;
  & h3{
    font-size: 28px !important;
    padding-bottom: 30px;
  }
  & .img{
    width: 100%;
    height: 100%;
  }
  & .myss{
    border-radius: 40px !important;
  }
  & swiper{
    max-width: 390px !important;
    border-radius: 40px !important;
    & img{
      max-width: 390px !important;
      border-radius: 40px !important;
    }
  }
}
.swiper-button-next, .swiper-button-prev {
  color: red; /* Измените на нужный вам цвет */
}
.curcle{
  width: 268px;
  height: 63px;
}
h1{
  max-width: 753px;
  font-size: 70px;
  font-weight: 400;
  text-transform: uppercase;
  padding-bottom: 32px;
}
.banner{
  border: 1px solid #fff;
  border-radius: 100px;
  & .banner__left{
    padding: 72px 0 66px 88px;
  }
}
h3{
  font-size: 32px;
  text-transform: uppercase;
  font-weight: 400;
}
@media screen and (max-width: 1505px) {
  .banner{
    flex-wrap: wrap;
  }
  .swiper-slide{
    max-width: 620px;
    & .slli{
      margin: 0 auto;
    }
  }
}
@media screen and (max-width: 1583px) {
  .slli{
    max-width: 520px !important;
    border-radius: 100px !important;
    max-height: 710px;
    & img{
      border-radius: 100px !important;
      height: 670px;
    }
  }
  .banner__left{
    padding-bottom: 0 !important;
  }
  .llee{
    & > div{
      margin-top: 40px;
    }
  }
  .adfssx{
    margin-top: 34px;
  }
}
@media screen and (max-width: 550px) {
  .dec{
    display: none;
  }
  .mob{
    display: block;
  }
}
@media screen and (max-width: 425px) {
  .asdad{
    left: 160px !important;
    top: 50px;
  }
  .as{
    left: 14px;
    &:nth-child(2){
      top: 55px;
    }
    &:nth-child(3){
      top: 85px;
    }
  }
}
</style>