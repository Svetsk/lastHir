<script setup lang="ts">
import CardPac from "~/components/blog/cardPac.vue";
import AddHeader from "~/components/Ui/AddHeader.vue";
</script>

<template>
  <div>
    <AddHeader>
      <MenuAbout />
    </AddHeader>
    <div class="container">
      <blog-menu />
      <div class="flex justify-between flex-wrap gap-y-[100px] pt-[170px]">
        <CardPac pod-title="Важная информация для тех" title="кто сделал абдоминопластику" bottom-title="Реабилитационный период по дням/месяцам"  image="/image/blog/fireOne.png"/>
        <CardPac title="к чему готовиться?" sub-title="Пациентам, кто хочет увеличение груди" image="/image/blog/fireThree.png" />
        <CardPac title="от 1 смс до операции" sub-title="Гайд-инструкция, где описан весь путь пациента" image="/image/blog/fireFore.png" />
        <CardPac pod-title="Важная информация для тех" title="Моя история" sub-title="Как я пришла в хирургию" image="/image/blog/fireFive.svg" />
        <CardPac title="Мастит" sub-title="Как лечить?" image="/image/blog/fireSix.png" />
        <CardPac title="Рак молочной железы" sub-title="Как образуется? Как лечить?" image="/image/blog/fireSeven.png" />
      </div>
    </div>
    <ui-footer-form class="pt-[176px]" />
    <ui-footer-contact-footer class="pt-[241px]" />
  </div>
</template>

<style scoped lang="scss">
</style>
