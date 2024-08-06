<script setup lang="ts">
const props = defineProps({
  title: String,
  tabTitle: String,
  tabSub: String,
  tabTextSub: String,
  image: String,
})
</script>

<template>
  <div>
    <div class="flex justify-between items-start pt-[160px] auth">
      <div>
        <div class="flex flex-col">
          <div class="flex items-center gap-[24px] pb-[16px] asd">
            <div class="line"></div>
            <ui-elements-title :title="title" />
          </div>
          <p class="max-w-[737px] text-[25px] font-[500]">
            {{ tabTitle }}
          </p>
          <ui-elements-button title="Читать подробнее" class="pt-[85px]" link="/blog" />
        </div>
        <div>
          <div class="flex items-center gap-[24px] pb-[16px] pt-[56px] asd">
            <div class="line"></div>
            <ui-elements-title :title="tabSub" />
          </div>
          <p class="max-w-[744px] font-[500] text-[25px]">
            {{ tabTextSub }}
          </p>
        </div>
      </div>
      <div class="relative">
        <nuxt-img loading="lazy" :src="image" />
        <nuxt-link to="/myWork" class="mywork" prefetch>мои работы</nuxt-link>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.mywork{
  position: absolute;
  bottom: 30px;
  right: 30px;
  font-size: 30px;
  font-weight: 600;
  padding: 16px 28px;
  background: #fff;
  color: black;
  border-radius: 60px;
}
img{
  width: 695px !important;
  height: auto !important;
}
@media screen and (max-width: 1440px) {
  p{
    font-size: 20px;
    max-width: 600px;
  }
}
@media screen and (max-width: 1024px) {
  p{
    font-size: 18px;
    max-width: 400px;
  }
}
@media screen and (max-width: 768px) {
  .auth{
    flex-wrap: wrap;
    gap: 40px;
  }
}
</style>