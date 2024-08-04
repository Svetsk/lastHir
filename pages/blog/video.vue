<script setup lang="ts">

import ContactFooter from "~/components/Ui/footer/contactFooter.vue";
import AddHeader from "~/components/Ui/AddHeader.vue";
</script>

<template>
  <div class="container">
    <AddHeader>
      <MenuAbout />
    </AddHeader>
    <blog-menu />
    <blog-video-card />
    <ui-footer-form />
    <contact-footer />
  </div>
</template>

<style scoped lang="scss">

</style>