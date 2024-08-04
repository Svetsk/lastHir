<script setup lang="ts">

import AddHeader from "~/components/Ui/AddHeader.vue";
</script>

<template>
  <div>
    <AddHeader>
      <MenuAbout />
    </AddHeader>
    <services-menu />
    <services-banner title="доброкачественные и злокачественные опухоли молочной железы" styles="background: url('/image/services/onkban.png') no-repeat center;" />
    <services-regalii />
    <services-variants />
    <ui-footer-slider-swip />
    <services-wtf />
    <services-causes />
    <services-sympt />
    <services-exam />
    <ui-footer-form />
    <services-price />
    <ui-footer-contact-footer />
  </div>
</template>

<style scoped lang="scss">

</style>