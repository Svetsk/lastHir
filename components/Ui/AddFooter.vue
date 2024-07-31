<template>
  <footer class="container pt-[235px] pb-[20px]">
    <div class=" fooff flex justify-between items-start">
      <div class="flex flex-col">
        <p>© 2024</p>
        <p>Евгения Корниясова</p>
      </div>
      <ul>
        <li><nuxt-link to="/about">Обо мне</nuxt-link></li>
        <li><nuxt-link to="/">Мои работы</nuxt-link></li>
        <li><nuxt-link to="/">Вопросы и ответы</nuxt-link></li>
      </ul>
      <ul>
        <li><nuxt-link to="/">Направления работы</nuxt-link></li>
        <li><nuxt-link to="/">Отзывы</nuxt-link></li>
        <li><nuxt-link to="/">До/После</nuxt-link></li>
      </ul>
      <ul>
        <li>
          <nuxt-link to="contact">Контакты</nuxt-link>
        </li>
        <li>
          <a href="/">
            Instagram @dr.korniyasova
          </a>
        </li>
        <li>
          <a href="/">
            +7 (918) 647-45-93
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script setup>

</script>

<style lang="scss" scoped>
p, a{
  font-size: 20px;
}
.fooff{
  padding-top: 135px;
}
@media screen and (max-width: 900px){
  p, a{
    font-size: 3vw;
  }
  .fooff{
    flex-direction: column;
    gap: 40px;
    padding-top: 100px;
  }
}
@media screen and (max-width: 745px){
  .fooff{
    padding-top: 50px;
    gap: 10px;
  }
}
@media screen and (max-width: 620px){
  .fooff{
    padding-top: 40px;
    gap: 8px;
  }
}
@media screen and (max-width: 420px) {
  li a{
    font-size: 20px;
  }
}

</style>