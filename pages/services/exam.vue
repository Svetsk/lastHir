<script setup lang="ts">
useSeoMeta({
  title: "Услуги Евгении Корниясовой - Пластическая Хирургия, Онкология и Консультации | Геленджик",
  ogTitle: "Пластическая Хирургия и Онкология в Геленджике - Услуги Евгении Корниясовой | Клиника «Ланцетъ»",
});
import AddHeader from "~/components/Ui/AddHeader.vue";
import MenuExam from "~/components/MenuExam.vue";
</script>

<template>
  <div>
    <AddHeader>
      <MenuExam />
    </AddHeader>
    <services-menu />
    <services-banner title="Современные технологии =&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; альтернатива лечения заграницей" styles="background: url('/image/services/neban.png') no-repeat center;" />
    <services-regalii />
    <services-whatwork id="whtw" />
    <services-biopsia />
    <services-ton-biop />
    <services-xir-biops />
    <services-pistol />
    <div id="infs">
      <main-info />
    </div>
    <div class="pt-[162px]">
      <ui-footer-slider-swip id="mywrks" />
    </div>
    <ui-footer-form class="pt-[300px]"/>
    <div class="pb-[125px]">
      <div class="container">
        <div class="flex items-center gap-[24px]">
          <div class="line" id="prs"></div>
          <ui-elements-title title="цены" />
        </div>
        <ui-elements-price-props title="Консультация пластического хирурга" price="3 000 ₽" />
        <ui-elements-price-props title="Консультация онколога-маммолога" price="3 000 ₽" />
        <ui-elements-price-props title="Трепан биопсия" price="5 000 ₽" />
        <ui-elements-price-props title="Тонкоигольная биопсия" price="1 000 ₽" />
        <ui-elements-price-props title="Биопсия сигнального лимфоузла" price="100 000 ₽" />
      </div>
    </div>
    <div class="pb-[200px]" id="otz">
      <slider-card-slider />
    </div>
    <ui-footer-contact-footer class="pt-[350px]" id="cont" />
  </div>
</template>

<style scoped lang="scss">

</style>