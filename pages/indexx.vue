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
      <MenuHome />
    </AddHeader>
    <main-banner />
    <main-info id="inf" />
    <ui-elements-services id="ser" />
    <slider-card-slider id="sl" />
    <ui-footer-slider-swip id="sw" class="pt-[240px]"/>
    <main-accardeons id="ac" />
    <ui-footer-form id="fr" class="pt-[300px]"/>
    <ui-footer-contact-footer id="fot" class="pt-[350px]" />
    <UiDevelop />
  </div>
</template>

<style scoped lang="scss">

</style>