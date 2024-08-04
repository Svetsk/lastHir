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

<script lang="ts">

import {defineComponent} from "vue";
import AddHeader from "~/components/Ui/AddHeader.vue";

export default defineComponent({
  components: {AddHeader}
})
</script>

<style scoped>
#sl{
  padding-top: 0;
  padding-bottom: 140px;
}
</style>