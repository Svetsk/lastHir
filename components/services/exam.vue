<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div class="flex items-center gap-[24px] pt-[160px] pb-[60px] asd">
      <div class="line"></div>
      <ui-elements-title title="обследования" />
    </div>
    <p>
      Почему важно проходить обследования (УЗИ молочных желез, маммографию) ежегодно?<br><br>На ранней стадии мы еще сможем остановить распространение метастазов. Каждая женщина должна понимать, что её здоровье в первую очередь важно для неё самой, поэтому не нужно ждать напоминаний.<br><u>Записывайтесь на УЗИ молочных желез и проходите осмотр маммолога хотя бы раз в год.</u>
    </p>
    <ui-elements-button class="btn" title="Читать" link="/services/exam" />
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
  margin-bottom: 150px;
}
</style>