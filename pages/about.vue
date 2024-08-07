<script setup lang="ts">
useSeoMeta({
  title: "Евгения Корниясова - Пластический Хирург и Онколог в Геленджике",
  ogTitle: "Евгения Корниясова - Пластический Хирург и Онколог в Геленджике | Клиника «Ланцетъ»",
});
import AddHeader from "~/components/Ui/AddHeader.vue";
</script>

<template>
  <div>
    <AddHeader>
      <MenuAbout />
    </AddHeader>
    <about-banner id="info" />
    <about-educ id="educ" />
    <about-communities id="comun" />
    <about-history id="myHist" />
    <about-blog id="blog" />
    <slider-card-slider id="rew" />
    <ui-elements-services id="servic" />
    <ui-footer-form class="pt-[300px]"/>
    <ui-footer-contact-footer class="pt-[150px]" />
  </div>
</template>

<style scoped lang="scss">
@media screen and (max-width: 420px) {
  #servic{
    & .xxx{
      padding-top: 60px !important;
    }
  }
}
</style>