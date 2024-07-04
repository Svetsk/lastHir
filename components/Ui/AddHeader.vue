<template>
  <div class="flex justify-between header">
    <nuxt-link class="logo" to="/">WizSol</nuxt-link>
    <div>
      <nav>
        <ul class="flex gap-[50px] menu">
          <li><nuxt-link to="/">Главная</nuxt-link></li>
          <li><nuxt-link to="/servises">Услуги</nuxt-link></li>
          <li><nuxt-link to="/o_nas">О нас</nuxt-link></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.header{
  align-items: center;
  padding: 44px 0;
}
  .logo{
    color: #FFF;
    font-size: 48px;
    font-weight: 700;
  }
  .menu a{
    color: #727272;
    font-size: 20px;
    font-weight: 400;
  }
  .router-link-active{
    color: #fff !important;
  }
</style>