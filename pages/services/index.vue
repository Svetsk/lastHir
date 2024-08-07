<script setup lang="ts">
useSeoMeta({
  title: "Услуги Евгении Корниясовой - Пластическая Хирургия, Онкология и Консультации | Геленджик",
  ogTitle: "Пластическая Хирургия и Онкология в Геленджике - Услуги Евгении Корниясовой | Клиника «Ланцетъ»",
});
import AddHeader from "~/components/Ui/AddHeader.vue";
import MenuServices from "~/components/MenuServices.vue";
</script>

<template>
  <div>
    <AddHeader>
      <MenuServices />
    </AddHeader>
    <services-menu />
    <services-banner class="deskt" title="доброкачественные и злокачественные опухоли молочной железы" styles="background: url('/image/services/onkban.png') no-repeat center;" />
    <services-banner class="mobiles" title="доброкачественные и злокачественные опухоли молочной железы" styles="background: url('/image/services/onkbans.png') no-repeat center;" />
    <services-regalii />
    <services-variants id="variants" />
    <ui-footer-slider-swip id="myWork" />
    <services-wtf id="vid" />
    <services-causes id="caus" />
    <services-sympt />
    <services-exam />
    <ui-footer-form />
    <services-price />
    <ui-footer-contact-footer />
  </div>
</template>

<style scoped lang="scss">
.mobiles{
  display: none;
}
@media screen and (max-width: 500px) {
  .mobiles{
    display: flex;
  }
  .deskt{
    display: none;
  }
}
</style>