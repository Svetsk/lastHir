<script setup lang="ts">
useSeoMeta({
  title: "Блог Евгении Корниясовой - Полезная Информация для Пациентов | Пластический Хирург и Онколог",
  ogTitle: "Блог Евгении Корниясовой - Советы и Статьи для Пациентов | Пластический Хирург и Онколог в Геленджике",
});
import CardPac from "~/components/blog/cardPac.vue";
import AddHeader from "~/components/Ui/AddHeader.vue";
</script>

<template>
  <div>
    <AddHeader>
      <MenuBlog />
    </AddHeader>
    <div class="container">
      <blog-menu />
      <div class="flex justify-between flex-wrap gap-y-[100px] pt-[170px]">
        <CardPac src="/blog/article/breastReduction" pod-title="Важная информация для тех" title="кто сделал абдоминопластику" bottom-title="Реабилитационный период по дням/месяцам"  image="/image/blog/fireOne.png"/>
        <CardPac src="/blog/article/breastReduction" title="к чему готовиться?" sub-title="Пациентам, кто хочет увеличение груди" image="/image/blog/fireThree.png" />
        <CardPac src="/blog/article/breastReduction" title="от 1 смс до операции" sub-title="Гайд-инструкция, где описан весь путь пациента" image="/image/blog/fireFore.png" />
        <CardPac src="/blog/article/breastReduction" pod-title="Важная информация для тех" title="Моя история" sub-title="Как я пришла в хирургию" image="/image/blog/fireFive.svg" />
        <CardPac src="/blog/article/breastReduction" title="Мастит" sub-title="Как лечить?" image="/image/blog/fireSix.png" />
        <CardPac src="/blog/article/breastReduction" title="Рак молочной железы" sub-title="Как образуется? Как лечить?" image="/image/blog/fireSeven.png" />
      </div>
    </div>
    <ui-footer-form class="pt-[176px]" />
    <ui-footer-contact-footer class="pt-[241px]" />
  </div>
</template>

<style scoped lang="scss">
</style>
