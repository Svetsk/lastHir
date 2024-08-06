<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div class="flex justify-between gap-[42px] pt-[140px] zxc">
      <div class="flex flex-col gap-[45px]">
        <div class="flex items-center gap-[24px] pb-[16px] asd">
          <div class="line"></div>
          <ui-elements-title title="Оборудование" />
        </div>
        <p class="max-w-[744px]">Только новейшее и самое лучшее оборудование я использую в своей работе. Будьте уверены,  что ваше здоровье в надёжных руках.</p>
        <ui-elements-button title="Читать" class="pt-[25px]" link="/blog" />
      </div>
      <div class="flex flex-col gap-[45px]">
        <div class="flex items-center gap-[24px] pb-[16px] asd">
          <div class="line"></div>
          <ui-elements-title title="Материалы" />
        </div>
        <p class="max-w-[744px]">В работе с пластикой груди, я использую самые стабильные, лучшие импланты. Эти импланты прошли множество исследований, они не опасны для здоровья, состоят из силикона.</p>
        <ui-elements-button title="Читать" class="pt-[25px]" link="/blog" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@media screen and (max-width: 1024px) {
  .zxc{
    flex-wrap: wrap;
    gap: 62px;
  }
}
</style>