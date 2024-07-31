<script setup lang="ts">

</script>

<template>
  <div class="py-[40px]">
  <div class="container">
    <div class="wrap">
      <div class="flex flex-wrap cs">
        <div class="flex flex-col">
          <p class="text-[20px]">Дизайнер сайта: <b>Алиса Шрамко.</b></p>
          <a href="" class="text-[20px]">Контакты: @Alice2212 (Телеграм)</a>
        </div>
        <div class="flex flex-col">
          <p class="text-[20px]">Командна разработки: <b>Александр Фигуркин.</b></p>
          <a href="" class="text-[20px]">Контакты: @SvetskiyS (Телеграм)</a>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<style scoped lang="scss">
.wrap{
  border-radius: 20px;
  border: 1px solid #FFF;
}
.cs{
  width: 100%;
  padding: 20px 0 20px 30px;
  gap: 28px;
}
@media screen and (max-width: 420px) {
  .cs{
    padding: 12px;
  }
}
</style>