<script setup>

</script>

<template>
  <ui-add-header />
  <div class="container">
    <h1>404</h1>
    <h2>Ошибка! Страница не найдена</h2>
  </div>
  <ui-add-footer />
</template>

<style scoped lang="scss">
h1{
  font-size: 200px;
  font-weight: 400;
  text-align: center;
}
h2{
  text-align: center;
  font-size: 40px;
  font-weight: 500;
}
footer{
  position: absolute;
  bottom: 2%;
  margin: 0 auto;
  left: 50%;
  transform: translateX(-50%);
}

@media screen and (max-width: 900px) {
  footer{
    position: relative;
  }
}
@media screen and (max-width: 600px) {
  h1{
    font-size: 100px;
  }
  h2{
    font-size: 32px;
  }
}
</style>