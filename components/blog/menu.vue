<script setup lang="ts">

</script>

<template>
  <div class="flex items-center gap-[24px]">
    <div class="line"></div>
    <ui-elements-title title="блог" />
  </div>
  <div class="tabs">
    <div class="flex items-center gap-[12px]">
      <nuxt-link to="/blog">Пациентам</nuxt-link>
    </div>
    <div class="flex items-center gap-[12px]">
      <div class="ellipse"></div>
      <nuxt-link to="/blog/texts">Статьи</nuxt-link>
    </div>
    <div class="flex items-center gap-[12px]">
      <div class="ellipse"></div>
      <nuxt-link to="/blog/qa">Вопрос/ответ</nuxt-link>
    </div>
    <div class="flex items-center gap-[12px]">
      <div class="ellipse"></div>
      <nuxt-link to="">Экспертные видео</nuxt-link>
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
  gap: 28px;
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
</style>