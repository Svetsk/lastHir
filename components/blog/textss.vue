<script setup lang="ts">
defineProps({
  title: String,
  text: String,
})
</script>

<template>
  <div class="block relative">
    <div class="pl-[42px] pt-[70px] flex flex-col gap-[24px] cvc">
      <h3>{{ title }}</h3>
      <p>{{ text }}</p>
      <div>
        <nuxt-link class="learn" to="">читать</nuxt-link>
      </div>
    </div>
    <nuxt-img src="/image/blog/fireTwo.png" class="absolute bottom-[-70px] right-0 z-[-1]" />
  </div>
</template>

<style scoped lang="scss">
.block{
  width: 460px;
  height: 830px;
  border-radius: 40px;
  border: 3px solid #FFF;
}
h3{
  font-weight: 700;
  text-transform: uppercase;
  font-size: 35px;
  max-width: 377px;
}
p{
  font-weight: 500;
  font-size: 25px;
  max-width: 360px;
}
.learn{
  font-size: 16px;
  font-weight: 500;
  color: #000;
  border-radius: 10px;
  background: #FFF;
  padding: 6px 32px;
}
@media screen and (max-width: 1440px) {
  .cvc{
    padding-left: 24px;
    padding-top: 48px;
  }
  .block{
    width: 440px;
  }
}
@media screen and (max-width: 768px) {
  .block{
    width: 440px;
    height: 782px;
  }
}

@media screen and (max-width: 390px) {
  .block{
    width: 370px;
    height: 582px;
  }
}
</style>