<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div class="flex items-center gap-[24px] pt-[160px] pb-[60px] asd">
      <div class="line sdfsdfsdf"></div>
      <ui-elements-title title="Причины развития рака молочной железы?" />
    </div>
    <div class="flex justify-between zxc">
      <div>
        <p class="ttl">На самом деле их огромное множество, но я собрала одни из самых частовстречающихся:</p>
        <div class="poin">
          <p>— Перенесённый рак одной груди.</p>
          <p>— Наследственные гены.</p>
          <p>— Наличие доброкачественной опухоли молочной железы. </p>
          <p>— Приём противозачаточных препаратов, а также гормональной терапии. </p>
          <p>— Бесплодие. </p>
          <p>— Избыточный вес в пременопаузе. </p>
          <p>— Алкоголизм. </p>
          <p>— Ранняя менструация, поздняя менопауза и др. </p>
          <ui-elements-button class="btn" title="Читать" link="/blog" />
        </div>
      </div>
      <div class="rig relative">
        <nuxt-img src="/image/services/caus.png" class="w-[315px]" />
        <div class="casa">
          <h3>15 октября</h3>
          <h4>Всемирный день борьбы<br>с раком груди</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.casa{
  position: absolute;
  bottom: 40px;
  left: 30px;
}
.container{
  overflow: hidden;
  padding-bottom: 20px;
}
.sdfsdfsdf{
  transform: translateY(-50px);
}
.ttl{
  font-size: 25px;
  font-weight: 700;
  max-width: 740px;
}
.poin{
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding-top: 28px;
  & p{
    font-size: 25px;
    font-weight: 500;
    max-width: 738px;
  }
}
.rig{
  border-radius: 40px;
  border: 1px solid white;
  padding: 70px 140px;
  & svg{
    width: 315px;
    height: 490px;
  }
}
h3{
  font-size: 45px;
  font-weight: 400;
}
h4{
  font-size: 25px;
  font-weight: 500;
}
.btn{
  padding-top: 40px;
}
@media screen and (max-width: 1400px) {
  .rig{
    padding-left: 40px !important;
    padding-right: 40px !important;
  }
}
@media screen and (max-width: 1200px) {
  .rig{
    padding-left: 20px !important;
    padding-right: 20px !important;
  }
}
@media screen and (max-width: 900px) {
  .zxc{
    flex-direction: column;
    gap: 40px;
    width: 100%;
    & svg{
      margin: 0 auto;
    }
  }
}
</style>