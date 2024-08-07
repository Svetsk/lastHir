<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div class="flex items-center gap-[24px] pt-[30px]">
      <div class="line"></div>
      <ui-elements-title title="услуги" class="pb-[20px]" />
    </div>
    <div class="tabs pb-[100px]">
      <div class="flex items-center gap-[12px]">
        <div class="ellipse"></div>
        <nuxt-link to="/services" prefetch >Онкология</nuxt-link>
      </div>
      <div class="flex items-center gap-[12px]">
        <div class="ellipse"></div>
        <nuxt-link to="/services/hirurgiya" prefetch >Пластическая хирургия</nuxt-link>
      </div>
      <div class="flex items-center gap-[12px]">
        <div class="ellipse"></div>
        <nuxt-link to="/services/exam" prefetch >Обследования и консультации</nuxt-link>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@media screen and (max-width: 700px){
  .tabs{
    flex-wrap: wrap;
  }
}
.tabs{
  display: flex;
  align-items: center;
  gap: 12px;
}
.ellipse{
  width: 14px;
  height: 14px;
  background: white;
  border-radius: 100px;
}
a{
  font-size: 25px;
  font-weight: 500;
}
.router-link-active{
  font-weight: 700;
  text-decoration-line: underline;
}
@media screen and (max-width: 500px){
  a{
    font-size: 17px;
  }
  .ellipse{
    width: 6px;
    height: 6px;
  }
}
</style>