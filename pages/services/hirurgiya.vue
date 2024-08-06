<script setup lang="ts">
useSeoMeta({
  title: "Услуги Евгении Корниясовой - Пластическая Хирургия, Онкология и Консультации | Геленджик",
  ogTitle: "Пластическая Хирургия и Онкология в Геленджике - Услуги Евгении Корниясовой | Клиника «Ланцетъ»",
});
import AddHeader from "~/components/Ui/AddHeader.vue";
</script>

<template>
  <div>
    <AddHeader>
      <Menuhirurgiya />
    </AddHeader>
    <services-menu />
    <services-banner title="Приобрети желанную форму и объём груди, почувствуй уверенность" styles="background: url('/image/services/banhir.png') no-repeat center;" />
    <services-regalii />
    <services-tabs id="mySpec"/>
    <services-tools id="toolss" />
    <services-material />
    <main-info id="korn" />
    <div class="pt-[140px]" id="mywrk">
      <ui-footer-slider-swip />
    </div>
    <ui-footer-form class="pt-[300px]"/>



    <div class="pb-[125px]">
      <div class="container">
        <div class="flex items-center gap-[24px]">
          <div class="line" id="pricehirrurgiya"></div>
          <ui-elements-title title="цены (пластика груди)" />
        </div>
        <ui-elements-price-props title="Эндопротезирование молочных желез любой доступ  (две стороны) без стоимости имплантатов" price="304 000 ₽" />
        <ui-elements-price-props title="Эндопротезирование молочных желез при тубулярной  деформации груди (две стороны) без стоимости имплантатов" price="330 000 ₽" />
        <ui-elements-price-props title="Реэндопротезирование молочных желез (две стороны) без стоимости имплантатов" price="447 000 ₽" />
        <ui-elements-price-props title="Эндопротезование молочных желез с одномоментной коррекцией птоза (две стороны) без стоимости имплантатов" price="318 000 ₽" />
        <ui-elements-price-props title="Мастопексия (коррекция птоза) без использования имплантатов (две стороны)" price="318 000 ₽" />
        <ui-elements-price-props title="Редукционная маммопластика 2 стороны (уменьшение груди)" price="362 000 ₽" />
        <ui-elements-price-props title="Коррекция ареолы (две стороны)" price="69 000 ₽" />
        <ui-elements-price-props title="Пластика втянутых сосков (две стороны)" price="69 000 ₽" />
        <ui-elements-price-props title="Редукция соска (две стороны)" price="57 000 ₽" />
      </div>
    </div>

    <div class="pb-[125px]">
      <div class="container">
        <div class="flex items-center gap-[24px]">
          <div class="line"></div>
          <ui-elements-title title="цены (тело)" />
        </div>
        <ui-elements-price-props title="Пластика плеч" price="306 000 ₽" />
        <ui-elements-price-props title="Пластика бедер" price="352 000 ₽" />
        <ui-elements-price-props title="Коррекция малых половых губ" price="60 000 ₽" />
      </div>
    </div>

    <div class="pb-[125px]">
      <div class="container">
        <div class="flex items-center gap-[24px]">
          <div class="line"></div>
          <ui-elements-title title="цены (Липоаспирация и липофилинг)" />
        </div>
        <ui-elements-price-props title="Липоаспирация (1 зона)" price="36 000 ₽" />
        <ui-elements-price-props title="Липофилинг (1 зона)" price="59 000 ₽" />
      </div>
    </div>

    <div class="pb-[125px]">
      <div class="container">
        <div class="flex items-center gap-[24px]">
          <div class="line"></div>
          <ui-elements-title title="цены (Абдоминопластика)" />
        </div>
        <ui-elements-price-props title="Миниабдоминопластика" price="230 000 ₽" />
        <ui-elements-price-props title="Абдоминопластика" price="373 000 ₽" />
        <ui-elements-price-props title="Абдоминопластика 2 к.с." price="418 000 ₽" />
        <ui-elements-price-props title="Пластика пупочной грыжи" price="56 000 ₽" />
        <ui-elements-price-props title="Пластика грыжи белой линии живота" price="69 000 ₽" />
      </div>
    </div>

    <div class="pb-[125px]">
      <div class="container">
        <div class="flex items-center gap-[24px]">
          <div class="line"></div>
          <ui-elements-title title="цены (пластика груди)" />
        </div>
        <ui-elements-price-props title="Отсроченная микрохирургическая реконструкция груди свободным абдоминальным трансплантатом (DIEAP) с использованием микрохирургической техники" price="535 000 ₽" />
        <ui-elements-price-props title="Отсроченная реконструкция молочной железы с установкой эспандера (1 сторона) без стоимости эспандера" price="89 000 ₽" />
        <ui-elements-price-props title="Отсроченная реконструкция молочной железы ТДЛ-лоскутом  с одномоментной установкой эспандера (1 сторона)  без стоимости эспандера" price="209 000 ₽" />
        <ui-elements-price-props title="Отсроченная реконструкция молочной железы (2 этап) замена эспандера на постоянный имплантат (1 сторона)  без стоимости имплантата" price="119 000 ₽" />
        <ui-elements-price-props title="Реконструкция соска местными тканями" price="75 000 ₽" />
        <ui-elements-price-props title="Эндопротезование молочных желез с одномоментной коррекцией птоза (одна сторона) без стоимости имплантатов" price="149 000 ₽" />
        <ui-elements-price-props title="Резекция молочной железы субтотальная с одномоментным эндопротезированием (1 сторона) (без стоимости имплантатов)" price="139 000 ₽" />
        <ui-elements-price-props title="Резекция молочной железы субтотальная с одномоментным эндопротезированием (2 стороны) (без стоимости имплантатов)" price="220 000 ₽" />
        <ui-elements-price-props title="Редукционная маммопластика (уменьшение груди) (1 сторона)" price="169 000 ₽" />
        <ui-elements-price-props title="Мастопексия без имплантов (1 сторона)" price="129 000 ₽" />
        <ui-elements-price-props title="Удаление имплантатов (1 сторона)" price="60 000 ₽" />
        <ui-elements-price-props title="Удаление имплантатов (2 стороны)" price="110 000 ₽" />
      </div>
    </div>

    <div class="pb-[125px]">
      <div class="container">
        <div class="flex items-center gap-[24px]">
          <div class="line"></div>
          <ui-elements-title title="цены (Коррекция рубцов)" />
        </div>
        <ui-elements-price-props title="Коррекция рубца 1 к.с." price="44 000 ₽" />
        <ui-elements-price-props title="Коррекция рубца 2 к.с." price="90 000 ₽" />
      </div>
    </div>

    <div class="pb-[125px]">
      <div class="container">
        <div class="flex items-center gap-[24px]">
          <div class="line"></div>
          <ui-elements-title title="цены (Коррекция гинекомастии у мужчин)" />
        </div>
        <ui-elements-price-props title="Коррекция гинекомастии — 1 к.с." price="80 000 ₽" />
        <ui-elements-price-props title="Коррекция гинекомастии — 2 к.с." price="159 000 ₽" />
      </div>
    </div>

    <div class="pb-[125px]">
      <div class="container">
        <div class="flex items-center gap-[24px]">
          <div class="line"></div>
          <ui-elements-title title="цены (Коррекция ушей)" />
        </div>
        <ui-elements-price-props title="Коррекция мочек ушей" price="69 000 ₽" />
      </div>
    </div>






    <slider-card-slider />
    <div class="pt-[140px]">
      <ui-footer-contact-footer class="pt-[350px]" />
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>