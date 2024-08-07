<script setup lang="ts">
useSeoMeta({
  title: "Отзывы Пациентов Евгении Корниясовой - Пластический Хирург и Онколог в Геленджике",
  ogTitle: "Отзывы о Работе Евгении Корниясовой - Пластическая Хирургия и Онкология в Геленджике | Клиника «Ланцетъ»",
});

import AddHeader from "~/components/Ui/AddHeader.vue";
import MenuReviews from "~/components/MenuReviews.vue";


</script>

<template>
  <AddHeader>
    <MenuReviews />
  </AddHeader>
  <div class="container">
    <div class="flex items-center gap-[24px] pt-[160px] pb-[112px] asd">
      <div class="line"></div>
      <ui-elements-title title="отзывы" />
    </div>
    <div class="flex flex-wrap justify-between gap-x-[80px] gap-y-[130px] aaa" id="wrks">
      <ui-elements-modal-rew
          slider-image-one="/image/mediarew/one/mariyabyiko.png"
          slider-image-two="/image/mediarew/one/mariyabyiko2.png"
          slider-image-three="/image/mediarew/one/mariyabyiko3.png"
          slider-image-fore="/image/mediarew/one/mariyabyiko4.png"
          num="1"
          preview="/image/mediarew/one/mariyabyiko.png"
      />
      <ui-elements-modal-rew
          slider-image-one="/image/mediarew/two/vika1.png"
          slider-image-two="/image/mediarew/two/vika2.png"
          slider-image-three="/image/mediarew/two/vika3.png"
          slider-image-fore="/image/mediarew/two/vika4.png"
          slider-image-five="/image/mediarew/two/vika5.png"
          num="2"
          preview="/image/mediarew/two/vika1.png"
      />
      <ui-elements-modal-rew
          slider-image-one="/image/mediarew/three/dem1.png"
          slider-image-two="/image/mediarew/three/dem2.png"
          slider-image-three="/image/mediarew/three/dem3.png"
          slider-image-fore="/image/mediarew/three/dem4.png"
          slider-image-five="/image/mediarew/three/dem5.png"
          slider-image-six="/image/mediarew/three/dem6.png"
          num="3"
          preview="/image/mediarew/three/dem1.png"
      />
      <ui-elements-modal-rew
          slider-image-one="/image/mediarew/four/four.png"
          num="4"
          preview="/image/mediarew/four/four1.png"
      />
      <ui-elements-modal-rew
          slider-image-one="/image/mediarew/five/prov2.png"
          slider-image-two="/image/mediarew/five/prov3.png"
          num="5"
          preview="/image/mediarew/five/prov2.png"
      />
      <ui-elements-modal-rew
          slider-image-one="/image/mediarew/six/sona1.png"
          slider-image-two="/image/mediarew/six/sona2.png"
          slider-image-three="/image/mediarew/six/sona3.png"
          num="6"
          preview="/image/mediarew/six/sona1.png"
      />
      <ui-elements-modal-rew
          slider-image-one="/image/mediarew/seven/seven.png"
          num="7"
          preview="/image/mediarew/seven/seven1.png"
      />
      <ui-elements-modal-rew
          slider-image-one="/image/mediarew/eight/sveta1.png"
          slider-image-two="/image/mediarew/eight/sveta2.png"
          num="8"
          preview="/image/mediarew/eight/sveta1.png"
      />
      <ui-elements-modal-rew
          slider-image-one="/image/mediarew/nine/nau1.png"
          slider-image-two="/image/mediarew/nine/nau2.png"
          slider-image-three="/image/mediarew/nine/nau3.png"
          num="9"
          preview="/image/mediarew/nine/nau1.png"
      />
      <ui-elements-modal-rew
          slider-image-one="/image/mediarew/ten/roz1.png"
          slider-image-two="/image/mediarew/ten/roz2.png"
          num="10"
          preview="/image/mediarew/ten/roz1.png"
      />
      <ui-elements-modal-rew
          slider-image-one="/image/mediarew/elleven/nic1.png"
          slider-image-two="/image/mediarew/elleven/nic2.png"
          slider-image-three="/image/mediarew/elleven/nic3.png"
          slider-image-fore="/image/mediarew/elleven/nic4.png"
          slider-image-five="/image/mediarew/elleven/nic5.png"
          slider-image-six="/image/mediarew/elleven/nic6.png"
          num="11"
          preview="/image/mediarew/elleven/nic1.png"
      />
      <ui-elements-modal-rew
          slider-image-one="/image/mediarew/twelve/che1.png"
          slider-image-two="/image/mediarew/twelve/che2.png"
          slider-image-three="/image/mediarew/twelve/che3.png"
          slider-image-fore="/image/mediarew/twelve/che4.png"
          slider-image-five="/image/mediarew/twelve/che5.png"
          slider-image-six="/image/mediarew/twelve/che6.png"
          num="12"
          preview="/image/mediarew/twelve/che1.png"
      />
    </div>
    <ui-footer-slider-swip class="qwe" id="zxc" />
    <ui-elements-services id="servsa" />
  </div>
  <div class="container-fluide" id="foorm">
    <ui-footer-form class="pt-[300px]" />
  </div>
  <div class="container" id="cnt">
    <ui-footer-contact-footer class="pt-[150px]" />
  </div>
</template>

<style scoped lang="scss">
.card{
  border-radius: 40px;
  background: #FFF;
  position: relative;
  & svg{
    position: absolute;
    bottom: -50px;
    right: -20px;
    max-width: 120px;
    max-height: 120px;
  }
  & img{
    padding: 36px 42px;
    width: 390px !important;
    height: auto;
  }
}
.qwe{
  padding-top: 200px;
}
@media screen and (max-width: 1920px){
  .aaa{
    justify-content: space-between;
  }
}
@media screen and (max-width: 900px) {
  .card{
    & img{
      padding: 24px 28px;
    }
  }
  .aaa{
    column-gap: 40px;
  }
}

@media screen and (max-width: 860px) {
  .aaa{
    align-items: center;
    justify-content: center;
  }
  .card{
    border-radius: 40px;
    background: #FFF;
    position: relative;
    & svg{
      position: absolute;
      bottom: -50px;
      right: 0px;
    }
  }
}
</style>