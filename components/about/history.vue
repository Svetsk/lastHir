<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div class="pt-[200px] asdasd">
      <div class="flex vfvf items-start justify-between">
        <div>
          <div class="flex items-center gap-[24px]">
            <div class="line"></div>
            <ui-elements-title title="Моя история" />
          </div>
          <p>Как я стала онкологом?<br>Почему выбрала именно работу с молочной железой?<br>Можете почитать в статье «Моя история»</p>
          <ui-elements-button title="Читать" class="mt-[32px]" />
        </div>
        <div>
          <nuxt-link to="/blog/texts" class="relative pads" prefetch>
            <nuxt-img loading="lazy" src="/image/about/history/pad.png" class="pad" />
            <svg xmlns="http://www.w3.org/2000/svg" width="118" height="118" viewBox="0 0 118 118" fill="none">
              <circle cx="58.876" cy="59.0459" r="58.8037" fill="white"/>
              <path d="M35.6501 40.5097C35.6501 35.7711 37.5326 31.2265 40.8833 27.8758C44.2341 24.525 48.7786 22.6426 53.5173 22.6426C58.256 22.6426 62.8006 24.525 66.1513 27.8758C69.502 31.2265 71.3845 35.7711 71.3845 40.5097C71.3845 40.8482 71.25 41.1728 71.0107 41.4122C70.7713 41.6515 70.4467 41.786 70.1082 41.786C69.7698 41.786 69.4452 41.6515 69.2058 41.4122C68.9665 41.1728 68.832 40.8482 68.832 40.5097C68.832 36.448 67.2185 32.5527 64.3464 29.6806C61.4744 26.8085 57.579 25.195 53.5173 25.195C49.4556 25.195 45.5602 26.8085 42.6882 29.6806C39.8161 32.5527 38.2026 36.448 38.2026 40.5097C38.2026 40.8482 38.0681 41.1728 37.8288 41.4122C37.5895 41.6515 37.2648 41.786 36.9264 41.786C36.5879 41.786 36.2633 41.6515 36.0239 41.4122C35.7846 41.1728 35.6501 40.8482 35.6501 40.5097ZM79.0418 55.8245C77.1466 55.8222 75.3186 56.5263 73.9146 57.7994C73.8057 56.3751 73.3006 55.0095 72.4563 53.8572C71.612 52.7049 70.4622 51.8117 69.1369 51.2786C67.8115 50.7456 66.3635 50.5939 64.9564 50.8407C63.5494 51.0875 62.2394 51.723 61.1747 52.6754V40.5097C61.1747 38.4789 60.3679 36.5312 58.9319 35.0952C57.4958 33.6591 55.5482 32.8524 53.5173 32.8524C51.4864 32.8524 49.5388 33.6591 48.1027 35.0952C46.6667 36.5312 45.8599 38.4789 45.8599 40.5097V70.5011L42.2674 64.7389C41.225 63.0314 39.5558 61.7996 37.6169 61.3071C35.6779 60.8146 33.6232 61.1004 31.8923 62.1034C30.1614 63.1064 28.8918 64.747 28.355 66.6742C27.8183 68.6013 28.057 70.662 29.0201 72.4154L38.3749 88.3682C38.5572 88.6327 38.8325 88.8187 39.146 88.8891C39.4594 88.9595 39.7878 88.9092 40.0657 88.7481C40.3436 88.5869 40.5506 88.327 40.6452 88.02C40.7399 87.713 40.7153 87.3817 40.5764 87.092L31.2248 71.1392C30.5479 69.9664 30.3645 68.5727 30.7152 67.2647C31.0658 65.9567 31.9217 64.8416 33.0945 64.1646C34.2673 63.4877 35.661 63.3043 36.969 63.655C38.277 64.0056 39.3921 64.8615 40.0691 66.0343L40.0914 66.0726L46.0514 75.6443C46.1978 75.8805 46.4172 76.0624 46.6765 76.1625C46.9357 76.2626 47.2205 76.2754 47.4877 76.1989C47.7548 76.1223 47.9897 75.9607 48.1566 75.7385C48.3235 75.5163 48.4133 75.2457 48.4124 74.9679V40.5097C48.4124 39.1558 48.9502 37.8574 49.9076 36.9C50.8649 35.9427 52.1634 35.4048 53.5173 35.4048C54.8712 35.4048 56.1697 35.9427 57.127 36.9C58.0844 37.8574 58.6222 39.1558 58.6222 40.5097V62.2056C58.6222 62.5441 58.7567 62.8687 58.996 63.108C59.2353 63.3474 59.56 63.4818 59.8984 63.4818C60.2369 63.4818 60.5615 63.3474 60.8009 63.108C61.0402 62.8687 61.1747 62.5441 61.1747 62.2056V58.3769C61.1747 57.023 61.7125 55.7246 62.6699 54.7672C63.6272 53.8099 64.9257 53.272 66.2796 53.272C67.6335 53.272 68.9319 53.8099 69.8893 54.7672C70.8466 55.7246 71.3845 57.023 71.3845 58.3769V64.7581C71.3845 65.0965 71.5189 65.4211 71.7583 65.6605C71.9976 65.8998 72.3222 66.0343 72.6607 66.0343C72.9992 66.0343 73.3238 65.8998 73.5631 65.6605C73.8025 65.4211 73.9369 65.0965 73.9369 64.7581V63.4818C73.9369 62.1279 74.4748 60.8295 75.4321 59.8721C76.3895 58.9148 77.6879 58.3769 79.0418 58.3769C80.3957 58.3769 81.6942 58.9148 82.6515 59.8721C83.6089 60.8295 84.1467 62.1279 84.1467 63.4818V74.9679C84.1467 82.1977 81.7506 87.1112 81.7283 87.159C81.6532 87.309 81.6084 87.4723 81.5964 87.6396C81.5845 87.8069 81.6056 87.9749 81.6587 88.1341C81.7117 88.2932 81.7956 88.4403 81.9056 88.567C82.0155 88.6937 82.1493 88.7974 82.2994 88.8724C82.477 88.9602 82.6724 89.0061 82.8705 89.0064C83.1076 89.0065 83.3401 88.9406 83.5418 88.8161C83.7436 88.6916 83.9066 88.5133 84.0127 88.3012C84.1212 88.0811 86.6992 82.8358 86.6992 74.9679V63.4818C86.6992 61.451 85.8924 59.5033 84.4564 58.0673C83.0204 56.6312 81.0727 55.8245 79.0418 55.8245Z" fill="black"/>
            </svg>
          </nuxt-link>
        </div>
      </div>
      <div class="flex vfvf items-start justify-between">
        <div id="tools">
          <div class="flex items-center gap-[24px]">
            <div class="line"></div>
            <ui-elements-title title="Инструменты" />
          </div>
          <p>В работе я использую инструменты из медицинской<br>стали, титана от <u>самых лучших фирм.</u><br><br>Они абсолютно стерильны, так как наши мед. сестры<br>тщательно их промывают, обрабатывают, упаковывают. <br><br>Из операционной инструменты никуда<br>не выносятся, не перемещаются.</p>
        </div>
        <div class=" flex items-end h-[550px] fsdfs">
          <nuxt-link to="/blog/texts" class="toolss" prefetch>
            <nuxt-img loading="lazy" src="/image/about/history/tools.png" class="tools" />
            <svg xmlns="http://www.w3.org/2000/svg" width="76" height="76" viewBox="0 0 76 76" fill="none">
              <path d="M29.4409 18.8403L49.3323 39.866L29.4412 57.7225" stroke="white" stroke-width="2"/>
              <path d="M75.5 38C75.5 58.7107 58.7107 75.5 38 75.5C17.2893 75.5 0.5 58.7107 0.5 38C0.5 17.2893 17.2893 0.5 38 0.5C58.7107 0.5 75.5 17.2893 75.5 38Z" stroke="white"/>
            </svg>
          </nuxt-link>
        </div>
      </div>
      <div class="flex vfvl items-end justify-between">
        <div class="flex flex-col gap-[180px]">
          <div id="obor">
            <div class="flex items-center gap-[24px]">
              <div class="line"></div>
              <ui-elements-title title="Оборудование" />
            </div>
            <p class="max-w-[744px]">
              Только новейшее и самое лучшее оборудование<br>я использую в своей работе. Будьте уверены,<br>что ваше здоровье в надёжных руках.
            </p>
          </div>
          <div id="materials">
            <div class="flex items-center gap-[24px]">
              <div class="line"></div>
              <ui-elements-title title="Материалы" />
            </div>
            <p class="max-w-[744px]">
              В работе с пластикой груди, я использую самые стабильные, лучшие импланты. Эти импланты прошли множество исследований, они не опасны для здоровья, состоят из силикона.
            </p>
          </div>
          <div>
            <div class="flex items-center gap-[24px]">
              <div class="line"></div>
              <ui-elements-title title="Техника работы" />
            </div>
            <p class="max-w-[744px]">
              Что касается моей техники работы.<br>Я училась и продолжаю учиться у лучших врачей<br>в своей сфере. По прежнему посещаю международные конгрессы, стажировки.
            </p>
          </div>
        </div>
        <div class=" flex items-end">
          <div class="vids">
            <nuxt-link to="blog/video" class="relative" prefetch>
              <nuxt-img loading="lazy" src="/image/about/history/video.png" />
              <svg class="absolute top-[40%] left-[42%]" xmlns="http://www.w3.org/2000/svg" width="99" height="99" viewBox="0 0 99 99" fill="none">
                <g filter="url(#filter0_b_4017_542)">
                  <circle cx="49.4281" cy="49.4399" r="49.2953" fill="#D9D9D9" fill-opacity="0.2"/>
                </g>
                <path d="M70.5547 49.1785L40.4651 73.5734V24.7837L70.5547 49.1785Z" fill="white"/>
                <defs>
                  <filter id="filter0_b_4017_542" x="-26.2754" y="-26.2637" width="151.407" height="151.407" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="13.2041"/>
                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_4017_542"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_4017_542" result="shape"/>
                  </filter>
                </defs>
              </svg>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.vids{
  border-radius: 40px;
  overflow: hidden;
  & img{
    width: 512px;
  }
}
.pads{
  position: relative;
  & svg{
    position: absolute;
    bottom: -60px;
    left: 40%;
  }
}
.pad{
  width: 726px;
}
p{
  font-size: 25px;
  font-weight: 500;
}
.toolss{
  position: relative;
  & svg{
    background: black;
    border-radius: 100px;
    position: absolute;
    right: 10px;
    top: 42%;
    z-index: 3;
  }
}
.tools{
  width: 726px;
}
  @media screen and (min-width: 1440px) {
    .toolss{
      & svg{
        right: -10px;
      }
    }
  }

@media screen and (max-width: 1024px) {
  .vfvf{
    flex-wrap: wrap;
    & > div{
      &:nth-child(2){
        padding-top: 62px;
      }
    }
  }
  .asdasd{
    display: flex;
    flex-direction: column;
    gap: 140px;
  }
}
@media screen and (max-width: 768px) {
  .vfvl{
    flex-wrap: wrap;
    justify-content: center;
    & > div:nth-child(1){
      gap: 80px;
    }
    & .vids{
      margin: 100px 0 0 0;
    }
  }
  .pads{
    position: relative;
    & svg{
      position: absolute;
      bottom: -60px;
      left: 40%;
      width: 72px;
    }
  }
}
@media screen and (max-width: 550px) {
  .fsdfs{
    height: 350px;
  }
  .asdasd {
    display: flex;
    flex-direction: column;
    gap: 70px;
  }
}
@media screen and (max-width: 425px) {
  .fsdfs{
    height: 290px;
  }
  .asdasd {
    display: flex;
    flex-direction: column;
    gap: 70px;
  }
}
</style>