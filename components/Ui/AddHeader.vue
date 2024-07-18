<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <header class="container">
    <div class="wrapper">
      <div class="wrapper__menu">
        <nav>
          <ul>
            <li>
              <nuxt-link to="/">
                <nuxt-img class="logo" src="/image/ui/logo.svg" />
              </nuxt-link>
            </li>
            <li class="info">
              <nuxt-link to="/about">Обо мне</nuxt-link>
            </li>
            <li class="blog">
              <nuxt-link to="/blog">Блог</nuxt-link>
            </li>
          </ul>
          <ul>
            <li class="hiddenss">
              <nuxt-link to="/services">Услуги</nuxt-link>
            </li>
            <li class="hiddenss">
              <nuxt-link to="/reviews">Отзывы</nuxt-link>
            </li>
            <li class="hiddenss">
              <nuxt-link to="/myWork">Мои работы</nuxt-link>
            </li>
            <li class="hiddenss">
              <nuxt-link to="/contact">Контакты</nuxt-link>
            </li>
            <li>
              <nuxt-img
                  class="burger__menu"
                  src="/image/ui/burger.svg"
                  @click="toggleMenu"
              />
            </li>
          </ul>
        </nav>
        <div v-if="isMenuOpen" class="mobile-menu">
          <ul>
            <li class="cursor-pointer text-end font-[900] pr-[60px]" @click="toggleMenu">
              X
            </li>
            <li class="mobile-info">
              <nuxt-link to="/about">Обо мне</nuxt-link>
            </li>
            <li class="mobile-blog">
              <nuxt-link to="/blog">Блог</nuxt-link>
            </li>
            <li class="mobile-services">
              <nuxt-link to="/services">Услуги</nuxt-link>
            </li>
            <li class="mobile-reviews">
              <nuxt-link to="/reviews">Отзывы</nuxt-link>
            </li>
            <li class="mobile-works">
              <nuxt-link to="/myWork">Мои работы</nuxt-link>
            </li>
            <li class="mobile-contact">
              <nuxt-link to="/contact">Контакты</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@media screen and (max-width: 1042px) {
  .mobile-menu{
    top: 25% !important;
    right: 2% !important;
    & ul{
      text-align: start;
      align-items: flex-start;
      & li{
        text-align: start;
      }
    }
  }
  .info, .blog, .hiddenss{
    display: none;
  }
  nav{
    padding-left: 20px;
    & ul:nth-child(2){
      justify-content: flex-end !important;
    }
  }
  .mobile-menu {
    display: block;
    background-color: #333;
    width: 100%;
    //padding: 10px 0;
    & ul {
      display: flex;
      flex-direction: column;
      & li {
        margin: 10px 0;
        & a {
          color: white;
          font-size: 18px;
        }
      }
    }
  }
}

@media screen and (max-width: 870px) {
  .mobile-menu{
    width: 40% !important;
  }
}
@media screen and (max-width: 500px) {
  .mobile-menu{
    width: 50% !important;
  }
}

.blog{
  padding-right: 24px;
}
.logo{
  width: 246px;
  height: 21px;
}
.mobile-menu{
  overflow: hidden;
  position: fixed;
  right: 0;
  top: 0 !important;
  z-index: 1000;
  background: black;
  height: 100vh;
  width: 20%;
  & ul{
    padding-left: 40px;
    padding-top: 40px;
    & li{
      padding-top: 8px;
      & a{
        font-size: 24px;
      }
    }
  }
}
.wrapper{
  padding: 56px 0;
  & .wrapper__menu{
    & nav{
      display: flex;
      align-items: center;
      justify-content: space-between;
      & ul{
        display: flex;
        align-items: center;
        justify-content: space-between;
        &:nth-child(1){
          max-width: 515px;
          width: 100%;
        }
        &:nth-child(2){
          max-width: 725px;
          width: 100%;
        }
        & li{
          font-size: 20px;
          & a{
            font-size: 20px;
          }
        }

        & .burger__menu{
          width: 87px;
          height: 45px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
