<script setup lang="ts">

import AddHeader from "~/components/Ui/AddHeader.vue";
</script>

<template>
  <div>
    <AddHeader>
      <MenuAbout />
    </AddHeader>
    <services-menu />
    <services-banner title="Современные технологии =&nbsp;&nbsp;&nbsp; альтернатива лечения заграницей" styles="background: url('/image/services/neban.png') no-repeat center;" />
    <services-regalii />
    <services-whatwork />
    <services-biopsia />
    <services-ton-biop />
    <services-xir-biops />
    <services-pistol />
    <main-info />
    <div class="pt-[162px]">
      <ui-footer-slider-swip />
    </div>
    <ui-footer-form class="pt-[300px]"/>
    <div class="pb-[125px]">
      <div class="container">
        <div class="flex items-center gap-[24px]">
          <div class="line"></div>
          <ui-elements-title title="цены" />
        </div>
        <ui-elements-price-props title="Консультация пластического хирурга" price="3 000 ₽" />
        <ui-elements-price-props title="Консультация онколога-маммолога" price="3 000 ₽" />
        <ui-elements-price-props title="Трепан биопсия" price="5 000 ₽" />
        <ui-elements-price-props title="Тонкоигольная биопсия" price="1 000 ₽" />
        <ui-elements-price-props title="Биопсия сигнального лимфоузла" price="100 000 ₽" />
      </div>
    </div>
    <ui-footer-contact-footer class="pt-[350px]" />
  </div>
</template>

<style scoped lang="scss">

</style>