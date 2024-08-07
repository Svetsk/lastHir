<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div class="flex items-center gap-[24px] pt-[160px] pb-[60px] asd">
      <div class="line"></div>
      <ui-elements-title title="Как различить вид опухоли?" />
    </div>
    <p>
      Чтобы определить характер опухоли, я провожу необходимые обследования, отправляю полученный материал<br>в лаборатории, где под микроскопом рассматривают и анализируют клетки опухолевой ткани.  О том, какие обследования нужно пройти, чтобы понять вид опухоли, я рассказала в своей статье. Жмите на кнопку ниже.
    </p>
    <ui-elements-button class="btn" title="Читать" link="/blog" />
  </div>
</template>

<style scoped lang="scss">
p{
  font-size: 25px;
  font-weight: 500;
  u{
    font-weight: 700;
  }
}
.btn{
  padding-top: 60px;
  margin-bottom: 80px;
}
</style>