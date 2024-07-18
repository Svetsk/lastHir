<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div class="flex items-center gap-[24px] pt-[160px] pb-[60px] asd">
      <div class="line"></div>
      <ui-elements-title title="Симптомы рака молочной железы." />
    </div>
    <div>
      <p class="ttl">Если злокачественная опухоль не достигает больших размеров и никаких симптомов не вызывает, то обнаружить её можно только с помощью маммографии или УЗИ молочных желёз.</p><br>
      <p class="ttl">Если опухоль все‑таки разрослась, то сначала образуется безболезненное уплотнение в груди. Затем в зависимости от типа, размера и местоположения опухоли, симптомы конечно же меняются. </p><br>
      <div class="poin">
        <u class="aas">Примеры симптомов при воспалительной форме рака: </u>
        <p>- Перенесённый рак одной груди.</p>
        <p>- Наследственные гены.</p>
        <p>- Наличие доброкачественной опухоли молочной железы. </p>
        <p>- Приём противозачаточных препаратов, а также гормональной терапии. </p>
        <p>- Бесплодие. </p>
        <p>- Избыточный вес в пременопаузе. </p>
        <p>- Алкоголизм. </p>
        <p>- Ранняя менструация, поздняя менопауза и др. </p>
        <ui-elements-button class="btn" title="Читать" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.ttl{
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
}
.aas{
  font-size: 25px;
  font-weight: 700;
}
.poin{
  display: flex;
  flex-direction: column;
  gap: 20px;
  & p{
    font-size: 25px;
    font-weight: 500;
  }
}
.btn{
  padding-top: 20px;
}
</style>