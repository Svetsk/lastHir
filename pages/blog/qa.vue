<script setup lang="ts">
useSeoMeta({
  title: "Блог Евгении Корниясовой - Полезная Информация для Пациентов | Пластический Хирург и Онколог",
  ogTitle: "Блог Евгении Корниясовой - Советы и Статьи для Пациентов | Пластический Хирург и Онколог в Геленджике",
});
import AddHeader from "~/components/Ui/AddHeader.vue";
</script>

<template>
  <div>
    <AddHeader>
      <MenuQa />
    </AddHeader>
    <div class="container">
      <blog-menu />
      <div class="pt-[85px]">
        <ui-accardeon
            title="Есть ли онлайн-консультация?"
            span-one="Да, такие консультации есть."
            text-one="Однако нужно понимать, что онлайн формат больше считается предварительным, так как я не вижу пациента, не могу оценить состояние кожи, подкожно-жировой клетчатки, молочной железы. Поэтому конечно я больше предпочитаю очные консультации."
            span-two="Формат онлайн-консультации:"
            ol-one="1. Пациент присылает фотографии ассистенту Елизавете, описывает свои пожелания, предпочтения."
            ol-two="2. Всю информацию Елизавета передает мне, я отсматриваю фотографии."
            ol-three="3. Мы созваниваемся с пациентом, обсуждаем всевозможные варианты реализации."
            span-three="Онлайн-консультации я провожу только по пластической хирургии."
            text-two="По онкологии только очные консультации."
            span-fore="Все консультации платные."
        />
        <ui-accardeon
            title="Когда можно заняться спортом после операции?"
            span-one="При разных пластических операциях, разное ограничение."
            ol-one="1. При увеличении груди"
            ol-two="2. При подтяжке груди или уменьшении груди без имплантов — ограничение 1 месяц."
            ol-three="3. Также липосакция, миниабдоминопластика — ограничение 1 месяц."
            text-two="Везде, где мы не работаем с мышцами — ограничение 1 месяц, там где мы затрагиваем мышечную ткань — ограничение 3 месяца."
        />
        <ui-accardeon
            title="Когда можно водить машину после операции?"
            span-one="При разных пластических операциях, разное ограничение."
            ol-one="1. При увеличении груди — ограничение 2 недели — 1 месяц. Водить машину после маммопластики  не рекомендуется, так как это нагрузки на грудные мышцы. Также, нежелательно пережимать грудь ремнём безопасности. Помимо этого, стоит помнить, что в ранний послеоперационный период нужно быть очень осторожным, при вождении может произойти удар, толчок, а это повлечёт образование гематомы."
            ol-two="2. При абдоминопластике — ограничение 1 неделя — 1 месяц. После такой операции, пациенту  не рекомендуется долгое время проводить в положении сидя."
            ol-three="3. Также липосакция, миниабдоминопластика — ограничение 1 неделя — 1 месяц."
            text-two="Обязательно проконсультируйтесь со своим пластическим хирургом перед тем, как сесть за руль."
        />
        <ui-accardeon
            title="Нужно ли менять импланты?"
            subt="Грудные импланты менять нужно. Существуют ситуации, когда рекомендуется рассмотреть возможность замены."
            ptext="Проконсультируйтесь со своим пластическим хирургом! Каждый случай индивидуален, и решение о замене имплантов должно быть принято вместе  с пластическим хирургом, учитывая ваши обстоятельства и пожелания, а также ваше состояние здоровья."
            text-two="Пластический хирург сможет провести нужные обследования и дать рекомендации, основанные  на вашей медицинской истории и текущем состоянии имплантов."
        />
        <ui-accardeon
            title="Можно летать на самолете после операции на грудь?"
            subt="Летатать на самолете можно уже на следующий день после операции — после того, как врач выпишет вас из клиники. Перепады давления не влияют на импланты — они не лопаются, несмотря на один из популярных мифов."
        />
        <ui-accardeon
            class="lasst"
            title="Когда можно заняться спортом после операции?"
            subt="При разных пластических операциях, разное ограничение."
            ol-one="1. При увеличении груди или абдоминопластике — ограничение 3 месяца."
            ol-two="2. При подтяжке груди или уменьшении груди без имплантов — ограничение 1 месяц."
            ol-three="3. Также липосакция, миниабдоминопластика — ограничение 1 месяц."
            text-two="Везде, где мы не работаем с мышцами — ограничение 1 месяц, там где мы затрагиваем мышечную ткань — ограничение 3 месяца."
        />
        <ui-accardeon
            title="Если имплант лопнет/растечется/порвется. Что делать?"
            text-one="Если имплант на обследовании (УЗИ, маммографии) показывает нарушение структуры, то назначается плановая операция, происходит удаление имплантов и установление новых."
            ptext=" Если имплант порвется, он растечется по организму? Нет. Даже если его разрезать и посмотреть изнутри, то вы увидите, что ничего никуда не вытекает. Также после установки, организм создает мини-капсулу вокруг импланта и ничего не растекается."
        />
        <ui-accardeon
            title="Можно ли кормить грудью после пластики груди?"
            text-one="Да можно, это никак не мешает. Даже если операция проводилась без имплантов."
        />
        <ui-accardeon
            title="Из-за имплантов может ли развиться рак молочной железы?"
            text-one="Исключено! Не бывает такого."
        />
      </div>
    </div>
    <ui-footer-form class="pt-[176px]" />
    <ui-footer-contact-footer class="pt-[241px]" />
  </div>
</template>

<style scoped lang="scss">

</style>