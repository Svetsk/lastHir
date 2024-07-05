<script setup lang="ts">

</script>

<template>
  <div class="flex items-center gap-[24px]">
    <div class="line"></div>
    <ui-elements-title title="блог" />
  </div>
  <div class="tabs">
    <nuxt-link to="/blog">Пациентам</nuxt-link>
    <div class="ellipse"></div>
    <nuxt-link to="/blog/texts">Статьи</nuxt-link>
    <div class="ellipse"></div>
    <nuxt-link to="/blog/qa">Вопрос/ответ</nuxt-link>
    <div class="ellipse"></div>
    <nuxt-link to="">Экспертные видео</nuxt-link>
  </div>
</template>

<style scoped lang="scss">
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