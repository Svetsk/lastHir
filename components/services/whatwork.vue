<script setup>
const scrollTo = (selector) => {
  const element = document.querySelector(selector);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
</script>

<template>
  <div class="container">
    <div class="flex items-center gap-[24px] pt-[160px] pb-[112px] asd">
      <div class="line"></div>
      <ui-elements-title title="Какие обследования я делаю:" />
    </div>
    <div class="flex flex-wrap justify-between gap-y-[62px] gf">
      <div class="bls bls__one">
        <div class="flex flex-col items-center gap-[160px]">
          <h3>Тонкоигольная<br>биопсия (шприцом)</h3>
          <nuxt-link @click.prevent="scrollTo('#tonk')">
            читать
          </nuxt-link>
        </div>
      </div>
      <div class="bls bls__two">
        <div class="flex flex-col items-center gap-[160px]">
          <h3>Трепан биопсия<br>(пистолетом)</h3>
          <nuxt-link @click.prevent="scrollTo('#pistolb')">
            читать
          </nuxt-link>
        </div>
      </div>
      <div class="bls bls__three">
        <div class="flex flex-col items-center gap-[160px]">
          <h3>Хирургическая<br>биопсия</h3>
          <nuxt-link @click.prevent="scrollTo('#hirurgiyab')">
            читать
          </nuxt-link>
        </div>
      </div>
      <div class="bls bls__four">
        <div class="flex flex-col items-center gap-[120px]">
          <h3>Биопсия<br>сигнального<br>лимфоузла</h3>
          <nuxt-link @click.prevent="scrollTo('#signal')">
            читать
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.bls{
  border-radius: 40px;
  border: 3px solid #FFF;
  width: 360px;
  height: 360px;
  display: flex;
  justify-content: center;
  align-items: center;
}
h3{
  font-size: 25px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
}
a{
  font-size: 16px;
  font-weight: 500;
  background: #FFF;
  border-radius: 10px;
  color: black;
  padding: 5px 32px;
}
.bls__one{
  background: url("/image/blog/fireOne.png") center;
}
.bls__two{
  background: url("/image/blog/fireFore.png") center;
}
.bls__three{
  background: url("/image/blog/fireSeven.png") center;
}
.bls__four{
  background: url("/image/blog/fireFive.svg") center;
}
@media screen and (max-width: 1440px) {
  .bls{
    width: 320px;
    height: 320px;
    & > div{
      gap: 120px;
    }
  }
}
@media screen and (max-width: 1024px) {
  .bls{
    width: 220px;
    height: 220px;
    & > div{
      gap: 60px;
    }
  }
  h3{
    font-size: 16px;
  }
}
@media screen and (max-width: 425px) {
  .bls{
    width: 360px;
    height: 360px;
    & > div{
      gap: 160px;
    }
  }
  h3{
    font-size: 24px;
    font-size: 24px;
  }
  .gf{
    justify-content: center;
  }
}
</style>