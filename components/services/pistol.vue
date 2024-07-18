<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div class="flex items-center gap-[24px] pt-[160px] pb-[60px] asd">
      <div class="line"></div>
      <ui-elements-title title="Трепан биопсия (пистолетом)" />
    </div>
    <div class="flex justify-between zxc">
      <div>
        <p class="ttl">На самом деле их огромное множество, но я собрала одни из самых частовстречающихся:</p>
        <div class="poin">
          <p><b>Зачем нужна биописия? Это нужно для того, чтобы взять клетки опухоли, затем отправить полученный материал в лабораторию для детального анализа и определения характера опухоли</b>(доброкачественная или злокачественная).</p>
          <p>Трепан биопсию, я могу делать под местной анестезией.</p>
          <p>В месте, где планирую сделать прокол пистолетом, под контролем узи, я захожу в опухоль, нажимаю на пистолет и попадаю в опухоль. Аппарат захватывает кусочек необходимой ткани, я его кладу в специальную банку с формалином и отправляю на гистологию. Область прокола я всегда обезболиваю!</p>
          <p>Не переживайте, у вас просто будет маленький синячок. Если мы получаем результат от лаборатории с пометкой «доброкачественная опухоль», можно не оперироваться.</p>
          <ui-elements-button class="btn" title="смотреть видео" />
        </div>
      </div>
      <div class="rig">
        <nuxt-img src="/image/services/videoEvg.png" class="w-[512px] h-[910px] w-[100%] h-[100%]" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
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
  overflow: hidden;
  & img{

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
  .zxc{
    flex-direction: column;
    gap: 40px;
    width: 100%;
    & img{
      margin: 0 auto;
    }
  }
}
@media screen and (max-width: 620px) {
  .zxc{
    & img{
      width: 312px;
      height: 610px;
    }
  }
}
</style>