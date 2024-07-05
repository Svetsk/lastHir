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
  font-size: 4vw;
  font-weight: 400;
  text-transform: uppercase;
}

@media screen and (max-width: 591px) {
  h2{
    font-size: 10vw;
  }
}
</style>