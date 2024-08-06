<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div class="flex items-center gap-[24px] pt-[100px]">
      <div class="line"></div>
      <ui-elements-title title="сообщества" />
    </div>
    <div class="flex justify-between items-end pt-[44px] sdfsdfs">
      <p class="asdcx">В которых я состою.<br><br>Сообщества — это серьёзные организации, где собираются лучшие врачи<br>в своей сфере, обмениваются опытом, а также ищут новые методы лечения.</p>
      <div class="flex gap-[32px] flex-wrap sdfsaaa">
        <div class="point">
          <div class="flex gap-[8px] items-center">
            <nuxt-img loading="lazy" src="/image/about/comOne.png" class="w-[48px] h-[48px]" />
            <p class="text-black ">РОПРЭХ</p>
          </div>
        </div>
        <div class="point">
          <div class="flex gap-[8px] items-center">
            <nuxt-img loading="lazy" src="/image/about/comTwo.png" class="w-[48px] h-[48px]" />
            <p class="text-black">РООМ</p>
          </div>
        </div>
      </div>
    </div>
    <nuxt-link to="/gallary" class="flex sds sdfsdf" prefetch>
      <div class="flex flex-col gap-[40px]">
        <nuxt-img loading="lazy" src="/image/about/imgOne.png" class="images w-[816px]" />
        <nuxt-img loading="lazy" src="/image/about/imgOne.png" class="rou images w-[816px]" />
      </div>
      <div>
        <div class="mobile pb-[28px]">
          <nuxt-img loading="lazy" src="/image/about/imgFive.png" />
        </div>
        <div class="flex gap-[28px] sdsz">
          <nuxt-img loading="lazy" src="/image/about/imgTwo.png" class="images w-[381px] max-h-[728px]" />
          <nuxt-img loading="lazy" src="/image/about/imgThree.png" class="roun images w-[381px] " />
          <nuxt-img loading="lazy" src="/image/about/imgThree.png" class="rounz images w-[381px]" />
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<style scoped lang="scss">
.sdfsdf{
  justify-content: space-between;
  padding-top: 70px;
}
.point{
  &:nth-child(2){
    border-radius: 30px;
    border: 1px solid #FFF;
    background: rgba(255, 255, 255, 0.10);
    backdrop-filter: blur(15px);
    width: 200px;
    & p{
      color: white;
    }
  }
  border-radius: 30px;
  border: 1px solid #FFF;
  background: #FFF;
  backdrop-filter: blur(15px);
  width: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 0;
  & p{
    font-size: 25px;
    font-weight: 600;
  }
}
.rou{
  border-radius: 0px 0px 0px 200px;
}
.roun{
  border-radius: 0px 200px 0px 0px;
}
.rounz{
  border-radius: 0px 0px 200px 0px;
  display: none;
}
.mobile{
  display: none;
}
@media screen and (min-width: 1440px) {
  .sds{
    & img{
      width: 761px;
    }
  }
  .sdsz{
    & img{
      width: 360px;
      &:nth-child(1){
        width: 360px;
      }
    }
  }
}
@media screen and (max-width: 1440px) {
  .images{
    max-height: 628px;
  }
  .sds{
    & img{
      width: 681px;
    }
  }
  .sdsz{
    & img{
      width: 324px;
      max-height: 740px;
      &:nth-child(1){
        width: 325px;
      }
    }
  }
}
@media screen and (max-width: 1024px) {
  .sdfsdf{
    & > div:nth-child(1){
      display: none;
    }
  }
}
@media screen and (max-width: 768px) {
  .sdsz{
    width: 100%;
    justify-content: center;
    & img{
      width: 300px;
      max-height: 720px;
      &:nth-child(1){
        width: 300px;
      }
    }
  }
  .sdfsdfs{
    flex-wrap: wrap;
    gap: 40px;
  }
}
@media screen and (max-width: 425px) {
  .sdsz{
    justify-content: space-between;
    & img{
      width: 178px;
      max-height: 720px;
      &:nth-child(1){
        width: 178px;
      }
    }
  }
  .sdfsaaa{
    flex-wrap: nowrap;
    padding: 0;
    gap: 8px;
  }
  .asdcx{
    font-size: 18px !important;
    font-weight: 500 !important;
  }
  .point{
    width: 180px !important;
  }
  .roun{
    display: none;
  }
  .rounz{
    display: block;
  }
  .mobile{
    display: block;
  }
}
@media screen and (max-width: 390px) {
  .point{
    width: 170px !important;
  }
  .sdsz{
    justify-content: space-between;
    & img{
      width: 160px;
      max-height: 720px;
      &:nth-child(1){
        width: 160px;
      }
    }
  }
}
</style>