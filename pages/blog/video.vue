<script setup lang="ts">
useSeoMeta({
  title: "Блог Евгении Корниясовой - Полезная Информация для Пациентов | Пластический Хирург и Онколог",
  ogTitle: "Блог Евгении Корниясовой - Советы и Статьи для Пациентов | Пластический Хирург и Онколог в Геленджике",
});

import AddHeader from "~/components/Ui/AddHeader.vue";
</script>

<template>
  <AddHeader>
    <MenuBlogVideos />
  </AddHeader>
  <div class="container">
    <blog-menu />
    <blog-video-card />
    <ui-footer-form />
    <ui-footer-contact-footer />
  </div>
</template>

<style scoped lang="scss">

</style>