<script setup>
import { ref } from 'vue'
import MenuButton from '@/components/MenuButton.vue'
import MenuHome from '@/components/MenuHome.vue'

const isMenuOpen = ref(false)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value

  if (isMenuOpen.value) {
    document.body.style.position = 'fixed'
    document.body.style.top = '0'
    document.body.style.left = '0'
    document.body.style.width = '100%'
    document.body.style.overflowY = 'hidden'
  } else {
    document.body.style.position = ''
    document.body.style.top = ''
    document.body.style.left = ''
    document.body.style.width = ''
    document.body.style.overflowY = ''
  }
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
              <button @click="toggleMenu">
                <nuxt-img
                    v-if="!isMenuOpen"
                    class="burger__menu hiddensss"
                    src="/image/ui/burger.svg"
                    alt="Menu"
                />
                <nuxt-img
                    v-else
                    class="burger__menu hiddensss w-[28px]"
                    src="/image/ui/closeBurger.svg"
                    alt="Close Menu"
                />
              </button>
              <div v-if="isMenuOpen" class="menu">
                <slot></slot>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1001;
}
@media screen and (max-width: 1042px) {
  .mobile-menu {
    top: 25% !important;
    right: 2% !important;
    & ul {
      text-align: start;
      align-items: flex-start;
      & li {
        text-align: start;
      }
    }
  }
  .info, .blog, .hiddenss {
    display: none;
  }
  nav {
    padding-left: 20px;
    & ul:nth-child(2) {
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
  .mobile-menu {
    width: 40% !important;
  }
}
@media screen and (max-width: 500px) {
  .mobile-menu {
    width: 50% !important;
  }
}

.blog {
  padding-right: 24px;
}
.logo {
  width: 246px;
  height: 21px;
}
.ld {
  border-top: 1px solid rgba(136, 136, 136, 0.29);
  & > div {
    display: flex;
    justify-content: space-between;
    & li {
      display: flex;
      flex-direction: column;
    }
  }
}

nav {
  & li:nth-child(1) {
    position: relative !important;
    z-index: 100000 !important;
  }
  & li:nth-child(2) {
    position: relative !important;
    z-index: 100000 !important;
  }
  & li:nth-child(3) {
    position: relative !important;
    z-index: 100000 !important;
  }
  & li:nth-child(4) {
    position: relative !important;
    z-index: 100000 !important;
  }
  & li:nth-child(4) {
    position: relative !important;
    z-index: 100000 !important;
  }
}
.hiddensss {
  position: relative !important;
  z-index: 100000 !important;
}
.wrapper {
  padding: 56px 0;
  position: relative;
  z-index: 1001;
  & .wrapper__menu {
    & nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      & ul {
        display: flex;
        align-items: center;
        justify-content: space-between;
        &:nth-child(1) {
          max-width: 515px;
          width: 100%;
        }
        &:nth-child(2) {
          max-width: 725px;
          width: 100%;
        }
        & li {
          font-size: 20px;
          & a {
            font-size: 20px;
          }
        }

        & .burger__menu {
          width: 87px;
          height: 45px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
