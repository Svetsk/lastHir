<script setup lang="ts">

import AddHeader from "~/components/Ui/AddHeader.vue";
</script>

<template>
  <div>
    <AddHeader>
      <MenuAbout />
    </AddHeader>
    <about-banner />
    <about-educ />
    <about-communities />
    <about-history />
    <about-blog />
    <ui-elements-services />
    <ui-footer-form class="pt-[300px]"/>
    <ui-footer-contact-footer class="pt-[350px]" />
  </div>
</template>

<style scoped lang="scss">

</style>