<script setup lang="ts">

</script>

<template>
  <div class="container-fluide">
    <div class="flex justify-between overflow-hidden">
      <div class="block">
        <h1 class="max-w-[860px]">Корниясова Eвгения Альбертовна</h1>
        <p class="max-w-[860px] bannerp">Онколог, пластический и реконструктивный хирург.<br><br>Стаж работы: с 2016 года. Моим рукам доверилось уже больше 800 довольных пациентов, совершенно из разных городов<br>и стран: Германии, США, ОАЭ, Израиля, Великобритании и др.</p>
        <ui-elements-button class="pt-[65px]" title="Записаться" />
      </div>
      <div>
        <div class="w-[] h-[816px]">
          <nuxt-img src="/image/about/banner.png" width="100%" height="100%" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container-fluide{
  border: 1px solid white;
  overflow: hidden;
  border-radius: 100px;
}
.block{
  padding: 72px 88px;
}
h1{
  font-size: 70px;
  font-weight: 400;
  text-transform: uppercase;
}
.bannerp{
  font-size: 25px;
  font-weight: 500;
  padding-top: 45px;
}
</style>