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
            <a href="#conts">Контакты</a>
            <a href="#formas">Форма обратной связи</a>
          </li>
        </div>
      </ul>
    </div>
  </div>
</template>

<style scoped>
i {
  width: 120px;
  height: 1px;
  background: #ffffff;
  position: absolute;
  left: 20.5%;
}
@media screen and (max-width: 1600px) {
  i{
    left: 18%;
  }
}
@media screen and (max-width: 1920px) {
  i{
    left: 18%;
  }
}
@media screen and (max-width: 1440px) {
  i{
    left: 20%;
  }
}
@media screen and (max-width: 1200px) {
  i{
    left: 24%;
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
