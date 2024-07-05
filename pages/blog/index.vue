<script setup lang="ts">

import CardPac from "~/components/blog/cardPac.vue";
</script>

<template>
  <div>
    <div class="container">
      <blog-menu />
      <div class="flex justify-between flex-wrap gap-[100px] pt-[170px]">
        <card-pac pod-title="Важная информация для тех" title="кто сделал абдоминопластику" bottom-title="Реабилитационный период по дням/месяцам" />
        <card-pac title="к чему готовиться?" sub-title="Пациентам, кто хочет увеличение груди" />
        <card-pac title="от 1 смс до операции" sub-title="Гайд-инструкция, где описан весь путь пациента" />
        <card-pac pod-title="Важная информация для тех" title="кто сделал абдоминопластику" bottom-title="Реабилитационный период по дням/месяцам" />
        <card-pac title="к чему готовиться?" sub-title="Пациентам, кто хочет увеличение груди" />
        <card-pac title="от 1 смс до операции" sub-title="Гайд-инструкция, где описан весь путь пациента" />
      </div>
    </div>
    <ui-footer-form class="pt-[176px]" />
    <ui-footer-contact-footer class="pt-[241px]" />
  </div>
</template>

<style scoped lang="scss">
</style>