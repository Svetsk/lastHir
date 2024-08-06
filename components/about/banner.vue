<script setup lang="ts">

</script>

<template>
  <div class="container-fluide">
    <div class="fluide dec">
      <div class="flex justify-between overflow-hidden">
        <div class="block">
          <h1 class="max-w-[860px]">Корниясова Eвгения Альбертовна</h1>
          <p class="max-w-[860px] bannerp">Онколог, пластический и реконструктивный хирург.<br><br>Стаж работы: с 2016 года. Моим рукам доверилось уже больше 800 довольных пациентов, совершенно из разных городов<br>и стран: Германии, США, ОАЭ, Израиля, Великобритании и др.</p>
          <ui-elements-button class="bd" title="Записаться" link="/contact" />
        </div>
        <div class="images">
          <div class="">
            <nuxt-img loading="lazy" src="/image/about/banner.png" width="100%" height="100%" />
          </div>
        </div>
      </div>
    </div>
    <div class="fluide mob">
      <div class="flex justify-between overflow-hidden">
        <div class="block">
          <h1 class="max-w-[860px]">Корниясова Eвгения Альбертовна</h1>
          <div class="images">
            <div class="">
              <nuxt-img loading="lazy" src="/image/about/banner.png" width="100%" height="100%" />
            </div>
          </div>
          <p class="max-w-[860px] bannerp">Онколог, пластический и реконструктивный хирург.<br><br>Стаж работы: с 2016 года. Моим рукам доверилось уже больше 800 довольных пациентов, совершенно из разных городов<br>и стран: Германии, США, ОАЭ, Израиля, Великобритании и др.</p>
          <ui-elements-button class="bd" title="Записаться" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.fluide{
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
.images{
  width: 40%;
  height: auto;
  & div{
    width: 100%;
    height: 100%;
    & img{
      object-fit: cover;
    }
  }
}
.mob{
  display: none;
}
.bd{
  padding-top: 82px;
}
@media screen and (max-width: 1600px) {
  .block{
    padding: 72px 42px;
  }
  .images{
    width: 50%;
    & div{
      & img{
      }
    }
  }
}
@media screen and (max-width: 1440px) {
  .block{
    padding: 42px 62px;
  }
  .images{
    width: 70%;
  }
}
@media screen and (max-width: 1024px) {
  h1{
    font-size: 42px;
  }
  .bannerp{
    font-size: 22px;
  }
  .images{
    width: 100%;
  }
}
@media screen and (max-width: 425px) {
  .mob{
    display: block;
  }
  .dec{
    display: none;
  }
  h1{
    font-size: 36px;
  }
  .block{
    padding: 38px;
  }
  .images{
    & img{
      border-radius: 100px 100px 0px 0px !important;
      margin-top: 35px;
      margin-bottom: 28px;
    }
  }
  .bd{
    transform: translate(20%, -20%);
  }
}
@media screen and (max-width: 390px) {
  .block{
    padding: 36px 24px 24px;
  }
}
</style>