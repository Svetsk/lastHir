<script setup lang="ts">
defineProps({
  title: String,
})
</script>

<template>
  <div>
    <h2>{{ title }}</h2>
  </div>
</template>

<style scoped lang="scss">
h2{
  font-size: 70px;
  font-weight: 400;
  text-transform: uppercase;
}
@media screen and (max-width: 1440px) {
  h2{
    font-size: 60px;
  }
}
@media (max-width: 1024px){
  h2{
    font-size: 50px;
  }
}
@media (max-width: 768px){
  h2{
    font-size: 40px;
  }
}
@media (max-width: 640px){
  h2{
    font-size: 32px;
  }
}
@media (max-width: 390px){
  h2{
    font-size: 32px;
  }
}
</style>