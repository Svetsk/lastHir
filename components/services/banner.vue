<script setup lang="ts">
defineProps({
  title: String,
  subtitle: String,
  styles: String,
})
</script>

<template>
  <div class="container-fluide">
    <div class="banner" :style="styles">
      <div class="wrapper">
        <h1>{{ title }}</h1>
        <h2>{{ subtitle }}</h2>
        <ui-elements-button class="a" title="Узнать подробнее" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.banner{
  width: 100%;
  border-radius: 100px;
  border: 1px solid #FFF;
  background-size: cover;
}
h1{
  font-size: 56px;
  font-weight: 500;
  text-transform: uppercase;
  padding-bottom: 22px;
  padding-top: 385px;
}
h2{
  font-size: 30px;
  font-weight: 500;
}
.a{
  padding-top: 30px;
  padding-bottom: 100px;
}
.wrapper{
  padding-left: 86px;
  padding-right: 72px;
}
@media screen and (max-width: 1440px) {
  h1{
    font-size: 46px;
  }
}
@media screen and (max-width: 972px) {
  h1{
    font-size: 36px;
  }
}
@media screen and (max-width: 653px) {
  .wrapper{
    padding: 0 24px 0 24px;
  }
}
@media screen and (max-width: 545px) {
  .banner{
    border-radius: 70.209px;
  }
  h1{
    font-size: 28px;
    padding-top: 300px;
  }
  .a{
    padding-bottom: 60px;
  }
}
@media screen and (max-width: 390px) {
  h1{
    font-size: 24px;
    padding-top: 200px;
  }
}
</style>