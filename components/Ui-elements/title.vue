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
@media (min-width: 1024px){
  h2{
    font-size: 60px;
  }
}
@media (min-width: 768px){
  h2{
    font-size: 50px;
  }
}
@media (min-width: 640px){
  h2{
    font-size: 42px;
  }
}
@media (min-width: 390px){
  h2{
    font-size: 32px;
  }
}
</style>