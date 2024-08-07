<!-- components/MenuHome.vue -->
<script setup lang="ts">
import { defineEmits } from 'vue'

const emit = defineEmits(['close-menu'])

function closeMenu() {
  emit('close-menu')
  document.body.style.overflowY = 'hidden'
}
</script>

<template>
  <div class="container">
    <div class="mobile-menu">
      <ul>
        <div class="ld relative">
          <i class="absolute"></i>
          <li @click="closeMenu" class="decaa">
            <nuxt-link prefetch to="/services">Онкология</nuxt-link>
            <nuxt-link prefetch to="/services#variants">Виды рака груди</nuxt-link>
            <nuxt-link prefetch to="/services#myWork">Мои работы</nuxt-link>
            <nuxt-link prefetch to="/services#vid">Как различить вид опухоли?</nuxt-link>
            <nuxt-link prefetch to="/services#caus">Причины развития рака молочной железы?</nuxt-link>
            <nuxt-link prefetch to="/services#conts">Форма обратной связи</nuxt-link>
          </li>
          <li @click="closeMenu" class="decaa">
            <nuxt-link to="/services/hirurgiya">Пластическая хирургия</nuxt-link>
            <a href="#mySpec">Моя специализация</a>
            <a href="#toolss">Инструменты, оборудование, материалы</a>
            <a href="#korn">Корниясова Евгения Альбертовна</a>
            <a href="#mywrk">Мои работы</a>
            <a href="#conts">Форма обратной связи</a>
            <a href="#pricehirrurgiya">Цены</a>
          </li>
          <li @click="closeMenu" class="decaa">
            <nuxt-link prefetch to="/services/exam">Обследования<br>и консультации</nuxt-link>
            <nuxt-link prefetch to="/services/exam#whtw">Какие обследования я делаю?</nuxt-link>
            <nuxt-link prefetch to="/services/exam#infs">Корниясова Евгения Альбертовна</nuxt-link>
            <nuxt-link prefetch to="/services/exam#mywrks">Мои работы</nuxt-link>
            <nuxt-link prefetch to="/services/exam#conts">Форма обратной связи</nuxt-link>
            <nuxt-link prefetch to="/services/exam#prs">Цены</nuxt-link>
            <nuxt-link prefetch to="/services/exam#otz">Отзывы</nuxt-link>
            <nuxt-link prefetch to="/services/exam#cont">Контакты</nuxt-link>
          </li>
          <li class="mobaa">
            <nuxt-link prefetch to="/">Пластический хирург / Онколог</nuxt-link>
            <nuxt-link prefetch to="/about">Обо мне</nuxt-link>
            <nuxt-link prefetch to="/blog">Блог</nuxt-link>
            <nuxt-link prefetch to="/services">Услуги</nuxt-link>
            <nuxt-link prefetch to="/reviews">Отзывы</nuxt-link>
            <nuxt-link prefetch to="/myWork">Мои работы</nuxt-link>
            <nuxt-link prefetch to="/contact">Контакты</nuxt-link>
          </li>
        </div>
      </ul>
    </div>

  </div>
</template>

<style scoped>
i {
  width: 80px;
  height: 1px;
  background: #ffffff;
  position: absolute;
  left: 50.5%;
}
@media screen and (max-width: 1920px) {
  i{
    left: 55.8%;
  }
}
@media screen and (max-width: 1600px) {
  i{
    left: 55.9%;
  }
}
@media screen and (max-width: 1440px) {
  i{
    left: 50.9%;
  }
}
@media screen and (max-width: 1200px) {
  i{
    left: 44%;
  }
}
.ld {
  width: 100%;
  border-top: 1px solid rgba(136, 136, 136, 0.29);
  display: flex;
  gap: 85px;
}
li {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
li a:nth-child(1) {
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  padding-top: 20px;
}
ul {
  max-width: 1560px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.mobile-menu {
  overflow: hidden;
  position: fixed;
  padding: 0 20px;
  right: 0;
  top: 0 !important;
  z-index: 1000;
  border-radius: 47px;
  border: 1px solid #FFF;
  background: rgba(24, 24, 24, 0.64);
  backdrop-filter: blur(11.65px);
  width: 100%;
  height: 95%;
  & ul {
    padding-top: 120px;
    & li {
      padding-top: 8px;
      & a {
        font-size: 24px;
      }
    }
  }
}
.mobaa{
  display: none;
}
@media screen and (max-width: 600px) {
  .mobaa{
    display: flex;
  }
  .decaa{
    display: none;
  }
}
@media screen and (max-width: 411px) {
  li a:nth-child(1) {
    font-size: 14px;
  }
  li{
    font-size: 14px;
  }
}

</style>
