<script setup lang="ts">

</script>

<template>
  <div class="pt-[200px]">
    <div class="container">
      <div class="flex justify-between flex-wrap gap-y-[40px]">
        <div>
          <div class="flex items-center gap-[24px] pb-[16px] asd">
            <div class="line"></div>
            <ui-elements-title title="инструменты" />
          </div>
          <p>
            В работе я использую инструменты из медицинской стали, титана от <u>самых лучших фирм.</u><br><br>Они абсолютно стерильны, так как наши мед. сестры тщательно их промывают, обрабатывают, упаковывают.<br><br>Из операционной инструменты никуда<br>не выносятся, не перемещаются.
          </p>
        </div>
        <nuxt-link to="/blog">
          <div class="toolss">
            <nuxt-img src="/image/about/history/tools.png" class="tools" />
            <svg xmlns="http://www.w3.org/2000/svg" width="76" height="76" viewBox="0 0 76 76" fill="none">
              <path d="M29.4409 18.8403L49.3323 39.866L29.4412 57.7225" stroke="white" stroke-width="2"/>
              <path d="M75.5 38C75.5 58.7107 58.7107 75.5 38 75.5C17.2893 75.5 0.5 58.7107 0.5 38C0.5 17.2893 17.2893 0.5 38 0.5C58.7107 0.5 75.5 17.2893 75.5 38Z" stroke="white"/>
            </svg>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
p{
  font-size: 25px;
  font-weight: 500;
  max-width: 744px;
}
.toolss{
  position: relative;
  & svg{
    background: black;
    border-radius: 100px;
    position: absolute;
    right: -18px;
    top: 42%;
    z-index: 3;
  }
}
.tools{
  width: 626px;
  height: 416px;
}
@media screen and (min-width: 1440px) {
  .toolss{
    & svg{
      right: -32px;
    }
  }
}
@media screen and (max-width: 600px) {
  .tools{
    height: auto;
  }
  .toolss{
    & svg{
      width: 48px;
      height: 48px;
      top: 40% !important;
    }
  }
}
</style>