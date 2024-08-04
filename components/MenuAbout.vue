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
          <li @click="closeMenu">
            <nuxt-link to="/">Корниясова Евгения альбертовна</nuxt-link>
            <a href="#inf">Образование</a>
            <a href="#ser">Сообщества</a>
            <a href="#sl">Моя история</a>
            <a href="#sw">Инструменты</a>
            <a href="#ac">Оборудование</a>
            <a href="#fr">Материалы</a>
            <a href="#fot">Мой блог</a>
            <a href="#fot">Отзывы</a>
            <a href="#fot">Услуги</a>
          </li>
          <li>
            <a href="">Форма обратной связи</a>
            <a href="">Контакты</a>
          </li>
        </div>
      </ul>
    </div>
  </div>
</template>

<style scoped>
i {
  width: 250px;
  height: 1px;
  background: #ffffff;
}
.ld {
  width: 100%;
  border-top: 1px solid rgba(136, 136, 136, 0.29);
  display: flex;
  justify-content: space-between;
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
  height: 90%;
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
@media screen and (max-width: 411px) {
  li a:nth-child(1) {
    font-size: 16px;
  }
  li{
    font-size: 14px;
  }
}
/* Если вам нужно добавить стили для фиксированного меню */
.mobile-menu {
  overflow: hidden !important; /* Если меню не должно скроллиться */
}

</style>
