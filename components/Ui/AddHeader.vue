<script setup>

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
              <nuxt-link to="/">Услуги</nuxt-link>
            </li>
            <li class="hiddenss">
              <nuxt-link to="/">Отзывы</nuxt-link>
            </li>
            <li class="hiddenss">
              <nuxt-link to="/myWork">Мои работы</nuxt-link>
            </li>
            <li class="hiddenss">
              <nuxt-link to="/contact">Контакты</nuxt-link>
            </li>
            <li>
              <nuxt-img class="burger__menu" src="/image/ui/burger.svg" />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@media screen and (max-width: 1042px) {
  .info, .blog, .hiddenss{
    display: none;

  }
}
.blog{
  padding-right: 24px;
}
.logo{
  width: 246px;
  height: 21px;
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
        }
      }
    }
  }
}
</style>