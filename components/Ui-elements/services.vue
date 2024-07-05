<script setup lang="ts">

</script>

<template>
  <div class="container">
    <ui-elements-title title="услуги" class="pt-[200px] pb-[65px]" />
    <div class="flex flex-wrap justify-between gap-[96px] pb-[200px] aaaa">

      <div class="relative bbb">
        <nuxt-img src="/image/serv/ones.png" class="w-[664px] h-[712px]" />
        <div class="flex flex-col gap-[40px] blocks">
          <h3 class="max-w-[616px]">
            пластическая хирургия
          </h3>
          <p class="max-w-[616px]">Моя специализация: увеличение груди, уменьшение груди, подтяжка груди, реконструкция груди и др.</p>
          <ui-elements-button title="Узнать подробнее" class="pt-[20px]" />
        </div>
      </div>

      <div class="relative bbb">
        <nuxt-img src="/image/serv/threes.png" class="w-[664px] h-[712px]" />
        <div class="flex flex-col gap-[40px] blocks">
          <h3 class="max-w-[616px]">
            онкология
          </h3>
          <p class="max-w-[616px]">Я работаю с доброкачественными и злокачественными опухолями молочной железы.</p>
          <ui-elements-button title="Узнать подробнее" class="pt-[20px]" />
        </div>
      </div>


      <div class="relative bbb">
        <nuxt-img src="/image/serv/twoes.png" class="w-[830px] h-[571px] last" />
        <div class="flex flex-col gap-[40px] blockss w-[120%]">
          <h3 class="max-w-[705px]">
            Обследования и консультации
          </h3>
          <p class="max-w-[855px]">Консультирую по эстетической и реконструктивной хирургии тела, по интимной пластике, по здоровью молочных желёз и др. Обследования, которые я провожу: тонкоигольная биопсия под контролем УЗИ, трепан-биопсия под контролем УЗИ и др.</p>
          <ui-elements-button title="Узнать подробнее" class="pt-[20px]" />
        </div>
      </div>


    </div>
  </div>
</template>

<style scoped lang="scss">
@media screen and (max-width: 1600px) {
  img{
    width: 550px;
    height: auto;
  }
}
@media screen and (max-width: 1400px) {
  img{
    width: 450px;
    height: auto;
  }
  h3{
    font-size: 40px !important;
  }
  p{
    font-size: 18px !important;
  }
  .aaaa{
    padding-bottom: 450px;
  }
}
@media screen and (max-width: 1200px) {
  img{
    width: 350px;
    height: auto;
  }
  h3{
    font-size: 30px !important;
  }
  p{
    font-size: 16px !important;
  }
  .bbb{
    margin: 0 auto;
  }
  .aaaa{
    gap: 450px;
  }
  .blocks{
    top: 300px !important;
    left: 0 !important;
    padding-bottom: 400px !important;
  }
  .blockss{
    max-width: 350px;
    padding: 0 0 40px 0;
    top: 200px !important;
    left: 0px !important;
  }
}
.blocks{
  position: absolute;
  bottom: -60px;
  left: 120px;
  border-radius: 40px;
  border: 1px solid #FFF;
  background: rgba(0, 0, 0, 0.40);
  backdrop-filter: blur(30px);
  padding: 38px 56px;
}
.blockss{
  position: absolute;
  top: 17%;
  left: 75%;
  border-radius: 40px;
  border: 1px solid #FFF;
  background: rgba(0, 0, 0, 0.40);
  backdrop-filter: blur(30px);
  padding: 38px 56px;
}
h3{
  font-size: 70px;
  font-weight: 400;
  text-transform: uppercase;
}
p{
  font-size: 25px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.80);
}
@media screen and (max-width: 540px) {
  .blockss{
    & h3{
      font-size: 22px !important;
    }
  }
}
@media screen and (max-width: 421px) {
  .blocks{
    padding-left: 24px !important;
    padding-right: 24px !important;
  }
  .blockss{
    padding-left: 24px !important;
    padding-right: 24px !important;
    padding-bottom: 50px !important;
    top: 200px;
    max-width: 348px;
  }
}
</style>