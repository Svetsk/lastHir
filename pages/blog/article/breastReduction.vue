<script setup lang="ts">
useSeoMeta({
  title: "Блог Евгении Корниясовой - Полезная Информация для Пациентов | Пластический Хирург и Онколог",
  ogTitle: "Блог Евгении Корниясовой - Советы и Статьи для Пациентов | Пластический Хирург и Онколог в Геленджике",
});
import AddHeader from "~/components/Ui/AddHeader.vue";
</script>

<template>
  <AddHeader>
    <MenuTexts />
  </AddHeader>
  <div class="container">
    <blog-menu />
    <nuxt-link prefetch to="/blog/texts" class="flex items-center gap-[8px] pt-[100px] text-[25px] font-[500]">
      <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="none">
        <circle cx="20.1211" cy="20" r="19.5" transform="rotate(90 20.1211 20)" stroke="white"/>
        <path d="M11.1532 19.2929C10.7627 19.6834 10.7627 20.3166 11.1532 20.7071L17.5172 27.0711C17.9077 27.4616 18.5409 27.4616 18.9314 27.0711C19.3219 26.6805 19.3219 26.0474 18.9314 25.6569L13.2746 20L18.9314 14.3431C19.3219 13.9526 19.3219 13.3195 18.9314 12.9289C18.5409 12.5384 17.9077 12.5384 17.5172 12.9289L11.1532 19.2929ZM27.8604 19L11.8604 19L11.8604 21L27.8604 21L27.8604 19Z" fill="white"/>
      </svg>
      Вернуться
    </nuxt-link>
    <div class="pt-[100px] flex flex-col gap-[62px]">
      <h1>
        Статья №1
      </h1>
      <h2>
        Подзаголовок
      </h2>
      <h3>
        Lorem Lorem Lorem Lorem Lorem Lorem Lorem LoremLoremLoremLor emLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLo remLorem LoremLoremLoremLo remLoremLoremLorem LoremLoremLorem LoremLoremLoremLoremLorem
      </h3>
      <div class="flex justify-between pt-[84px]">
        <nuxt-img loading="lazy" src="/image/blog/article/articleOne1.png" class="w-[673px]" />
        <nuxt-img loading="lazy" src="/image/blog/article/articleOne2.png" class="w-[673px]" />
      </div>
    </div>
    <ui-footer-form id="fr" class="pt-[400px]"/>
    <ui-footer-contact-footer id="fot" class="pt-[350px]" />
  </div>
</template>

<style scoped lang="scss">
h1{
  font-size: 70px;
  font-weight: 400;
  text-transform: uppercase;
}
h2{
  font-size: 40px;
  font-weight: 500;
}
h3{
  font-size: 32px;
  font-weight: 400;
}
</style>