<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div class="flex items-center gap-[56px] jhj pt-[194px]">
      <div class="flex flex-col">
        <div class="borde">
          <div class="flex flex-col gap-[36px] pt-[42px] pl-[50px] pb-[42px] qqq qqqq">
            <div class="flex items-center gap-[24px]">
              <div class="line"></div>
              <ui-elements-title title="Моя история" />
            </div>
            <p class="text-[25px] max-w-[774px]">Фото и видео с операционной, а также мои экспертные ролики с ответами на самые частые вопросы пациентов, вы можете посмотреть, нажав на кнопку ниже.</p>
            <div class="pb-[42px]">
              <ui-elements-button title="Смотреть" class="blocka" link="/blog" />
            </div>
          </div>
        </div>
        <div class="mobs">
          <div class="bgg">
            <h3 class="uppercase text-[45px]">подготовка<br>к абдоминопластике</h3>
            <p>Какие анализы нужно подготовить перед операцией? Ответила на этот вопрос<br>в видео, жмите кнопку ниже</p>
            <div>
              <div class="zxc">
                <nuxt-link to="/blog">
                  Смотреть
                  <svg xmlns="http://www.w3.org/2000/svg" width="58" height="57" viewBox="0 0 58 57" fill="none">
                    <circle cx="29.1133" cy="28.3212" r="20" transform="rotate(-135 29.1133 28.3212)" fill="black"/>
                    <path d="M35.9543 22.4793C35.9543 21.927 35.5066 21.4793 34.9543 21.4793L25.9543 21.4793C25.402 21.4793 24.9543 21.927 24.9543 22.4793C24.9543 23.0315 25.402 23.4793 25.9543 23.4793L33.9543 23.4793L33.9543 31.4793C33.9543 32.0315 34.402 32.4793 34.9543 32.4793C35.5066 32.4793 35.9543 32.0315 35.9543 31.4793L35.9543 22.4793ZM24.3477 34.5001L35.6614 23.1864L34.2472 21.7722L22.9335 33.0859L24.3477 34.5001Z" fill="white"/>
                  </svg>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <div class="borde">
          <nuxt-link to="/blog/texts" class="flex flex-col gap-[45px] py-[42px] pl-[50px] qqq">
            <nuxt-img src="/image/about/blog/blog.png" class="ab"/>
          </nuxt-link>
        </div>
      </div>
      <div class="de">
        <div class="bgg">
          <h3 class="uppercase text-[45px]">подготовка<br>к абдоминопластике</h3>
          <p>Какие анализы нужно подготовить перед операцией? Ответила на этот вопрос<br>в видео, жмите кнопку ниже</p>
          <div>
            <div class="zxc">
              <nuxt-link to="/blog/texts">
                Смотреть
                <svg xmlns="http://www.w3.org/2000/svg" width="58" height="57" viewBox="0 0 58 57" fill="none">
                  <circle cx="29.1133" cy="28.3212" r="20" transform="rotate(-135 29.1133 28.3212)" fill="black"/>
                  <path d="M35.9543 22.4793C35.9543 21.927 35.5066 21.4793 34.9543 21.4793L25.9543 21.4793C25.402 21.4793 24.9543 21.927 24.9543 22.4793C24.9543 23.0315 25.402 23.4793 25.9543 23.4793L33.9543 23.4793L33.9543 31.4793C33.9543 32.0315 34.402 32.4793 34.9543 32.4793C35.5066 32.4793 35.9543 32.0315 35.9543 31.4793L35.9543 22.4793ZM24.3477 34.5001L35.6614 23.1864L34.2472 21.7722L22.9335 33.0859L24.3477 34.5001Z" fill="white"/>
                </svg>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.zxc{
  padding-top: 24px;
  display: flex;
  justify-content: flex-end;
  padding-right: 40px;
  & a{
    border: 2px solid #fff;
    position: relative;
    border-radius: 60px;
    padding: 16px 45px;
    font-weight: 500;
    font-size: 30px;
    display: inline;
    background: white;
    color: black;
  }
  & svg{
    position: absolute;
    top: 5px;
    right: -30px;
  }
}
.borde{
  background: url("/image/about/blog/bg.svg") no-repeat center;
  background-size: 100%;
}
.ab{
  width: 600px;
}
.bgg{
  background: url("/image/about/blog/bgg.png") no-repeat;
  padding: 520px 0 40px 80px;
  border: 1px solid #ffffff;
  border-radius: 40px;
}
.mobs{
  display: none;
}
@media screen and (max-width: 1440px) {
  h3{
    font-size: 36px;
  }
  .ab{
    width: 520px;
  }
  .bgg{
    padding: 470px 0 40px 80px;
  }
}
@media screen and (max-width: 1024px) {
  .jhj{
    flex-wrap: wrap;
    justify-content: center;
    & > div:nth-child(1){
      gap: 56px;
    }
  }
  .borde{
    background: none;
    border: 1px solid #ffffff;
    background-size: 100%;
    border-radius: 40px;
  }
  .ab{
    width: 600px;
  }
  .bgg{
    background: url("/image/about/blog/bgg.png") no-repeat;
    padding: 520px 0 40px 80px;
    border: 1px solid #ffffff;
    border-radius: 40px;
  }
}
@media screen and (max-width: 425px) {
  .mobs{
    display: block;
  }
  .de{
    display: none;
  }
  .bgg{
    max-width: 400px;
  }
  .qqq{
    padding: 0;
    overflow: hidden !important;
    & img{
      border-radius: 40px;
    }
  }
  .qqqq{
    padding: 18px;
  }
  .bgg{
    padding: 200px 0 40px 18px;
    background-position: center;
    background-size: 80%;
  }
  h3{
    font-size: 28px;
  }
}
@media screen and (max-width: 390px){
  h3{
    font-size: 24px;
  }
}
</style>