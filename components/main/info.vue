<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div class="ccon dec flex justify-between pt-[145px]">
      <div>
        <div class="gel flex items-center gap-[24px]">
          <p class="gelen">г.Геленджик, клиника «Ланцетъ»</p>
          <div class="flex items-center gap-[16px]">
            <nuxt-link to="/contact" class="contact">
              контакты
            </nuxt-link>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="22" viewBox="0 0 36 22" fill="none">
              <line x1="0.663086" y1="1" x2="27.9036" y2="1" stroke="white" stroke-width="2"/>
              <path d="M27.1962 21.5977C27.5867 21.9883 28.2199 21.9883 28.6104 21.5977L34.9744 15.2338C35.3649 14.8432 35.3649 14.2101 34.9744 13.8196C34.5839 13.429 33.9507 13.429 33.5602 13.8196L27.9033 19.4764L22.2465 13.8196C21.8559 13.429 21.2228 13.429 20.8323 13.8196C20.4417 14.2101 20.4417 14.8432 20.8323 15.2338L27.1962 21.5977ZM26.9033 0.185547L26.9033 20.8906L28.9033 20.8906L28.9033 0.185547L26.9033 0.185547Z" fill="white"/>
            </svg>
          </div>
        </div>
        <div>
          <h2>Корниясова <u>Евгения</u> Альбертовна</h2>
          <p class="text-[25px] font-[500] max-w-[860px] pb-[80px]">
            Онколог, пластический и реконструктивный хирург.<br><br>Стаж работы: с 2016 года. Почитать про мой путь, образование, сообщества, подход к работе, вы можете, нажав кнопку ниже.
          </p>
          <ui-elements-button title="Подробнее обо мне" link="/about" />
        </div>
      </div>
      <div>
        <nuxt-img src="/image/main/photoEvg.png" class="w-[800px] h-auto" />
      </div>
    </div>
    <div class="ccon mob flex justify-between pt-[145px]">
      <div>
        <div class="gel flex items-center gap-[24px]">
          <p class="gelen">г.Геленджик, клиника «Ланцетъ»</p>
          <div class="flex items-center gap-[16px]">
            <nuxt-link to="/contact" class="contact">
              контакты
            </nuxt-link>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="22" viewBox="0 0 36 22" fill="none">
              <line x1="0.663086" y1="1" x2="27.9036" y2="1" stroke="white" stroke-width="2"/>
              <path d="M27.1962 21.5977C27.5867 21.9883 28.2199 21.9883 28.6104 21.5977L34.9744 15.2338C35.3649 14.8432 35.3649 14.2101 34.9744 13.8196C34.5839 13.429 33.9507 13.429 33.5602 13.8196L27.9033 19.4764L22.2465 13.8196C21.8559 13.429 21.2228 13.429 20.8323 13.8196C20.4417 14.2101 20.4417 14.8432 20.8323 15.2338L27.1962 21.5977ZM26.9033 0.185547L26.9033 20.8906L28.9033 20.8906L28.9033 0.185547L26.9033 0.185547Z" fill="white"/>
            </svg>
          </div>
        </div>
        <div>
          <h2>Корниясова <u>Евгения</u> Альбертовна</h2>
          <div class="asdfx">
            <nuxt-img src="/image/main/photoEvg.png" class="w-[800px] sssss" />
          </div>
          <p class="text-[25px] font-[500] max-w-[860px] pb-[80px] zxc">
            Онколог, пластический и реконструктивный хирург.<br><br>Стаж работы: с 2016 года. Почитать про мой путь, образование, сообщества, подход к работе, вы можете, нажав кнопку ниже.
          </p>
          <p class="text-[25px] font-[500] max-w-[860px] pb-[80px] zxct">
            Онколог, пластический<br>и реконструктивный хирург.<br><br>Стаж работы: с 2016 года. Почитать про мой путь, образование, сообщества, подход к работе, вы можете, нажав кнопку ниже.
          </p>
          <ui-elements-button title="Подробнее обо мне" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.mob{
  display: none;
}
h2{
  font-size: 70px;
  font-weight: 400;
  text-transform: uppercase;
  padding: 45px 0 45px;
}
.gelen{
  color: rgba(255, 255, 255, 0.80);
  font-size: 25px;
  font-weight: 500;
}
.contact{
  background: white;
  color: black;
  font-size: 25px;
  font-weight: 500;
  text-decoration-line: underline;
  padding: 6px 24px 10px;
  border-radius: 40px;
}
svg{
  transform: translateY(10px);
}

@media screen and (max-width: 1140px) {
  .dec{
    display: none;
  }
  .mob{
    display: flex;
    .sssss{
      padding-top: 0;
      padding-bottom: 48px;
      width: 803px !important;
      height: auto;
    }
  }
  .ccon{
    flex-direction: column !important;
  }
  img{
    max-width: 50%;
    padding-top: 100px;
    margin: 0 auto;
  }
}
.zxct{
  display: none;
}
@media screen and (max-width: 550px) {
  h2{
    font-size: 34px;
  }
  .contact{
    font-size: 22px;
  }
  img{
    padding-top: 40px;
  }
  .gelen{
    font-size: 22px;
  }
  .gel{
    flex-direction: column;
    align-items: flex-start;
  }
  .mob{
    & .sssss{
      width: 400px !important;
    }
  }
  .zxc{
    display: none;
  }
  .zxct{
    display: block;
  }
}
@media screen and (max-width: 425px) {
  //.mob{
  //  display: flex;
  //  .sssss{
  //    width: 503px !important;
  //    height: 400px;
  //  }
  //}
}
</style>