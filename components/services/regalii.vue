<script setup lang="ts">

</script>

<template>
  <div class="container-fluide">
    <div class="flex justify-between gap-[60px] pt-[60px] pb-[180px] as">
      <div class="left">
        <nuxt-img loading="lazy" src="/image/services/evg.png" class="kor" />
        <nuxt-link to="/about" prefetch>
          <div class="flex justify-between items-center aaa">
            <p>Онколог, пластический<br>и реконструктивный хирург</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="108" height="109" viewBox="0 0 108 109" fill="none">
              <circle cx="53.9336" cy="54.2362" r="38.0913" transform="rotate(-135 53.9336 54.2362)" fill="white"/>
              <path d="M66.5575 43.1105C66.5575 42.2821 65.8859 41.6105 65.0575 41.6105L51.5575 41.6105C50.729 41.6105 50.0575 42.2821 50.0575 43.1105C50.0575 43.9389 50.729 44.6105 51.5575 44.6105L63.5575 44.6105L63.5575 56.6105C63.5575 57.4389 64.229 58.1105 65.0575 58.1105C65.8859 58.1105 66.5575 57.4389 66.5575 56.6105L66.5575 43.1105ZM44.5704 65.7189L66.1181 44.1712L63.9968 42.0499L42.4491 63.5975L44.5704 65.7189Z" fill="black"/>
            </svg>
          </div>
          <h3>Корниясова Евгения<br>Альбертовна</h3>
        </nuxt-link>
      </div>
      <nuxt-link loading="lazy" to="/reviews" class="right" prefetch>
        <p>Стаж работы: с 2016 года.<br >Моим рукам доверилось уже больше 800 довольных пациентов.</p>
        <div class="flex items-center justify-between ab">
          <p>800+</p>
          <div>
            <nuxt-img loading="lazy" src="/image/services/800.png" class="qs" />
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
.qs{
  width: 263px;
  height: auto;
}
.ab{
  & p{
    font-size: 65px;
    font-weight: 500;
  }
}
.right{
  display: flex;
  flex-direction: column;
  padding: 36px 20px 36px 40px;
  border-radius: 40px;
  background: #4D3E35;
  & > p{
    font-size: 25px;
    font-weight: 500;
    max-width: 523px;
  }
}
.left{
  border-radius: 40px;
  background: rgba(167, 167, 167, 0.30);
  display: flex;
  gap: 72px;
  align-items: center;
  padding: 36px 20px 36px 80px;
}
.kor{
  background: white;
  background-size: 40%;
  border-radius: 20px;
  width: 168px;
  height: 203px;
}
.aaa{
  width: 760px;
  & p{
    opacity: 0.6;
    font-size: 25px;
    font-weight: 500;
  }
}
h3{
  font-size: 45px;
  font-weight: 500;
  text-transform: uppercase;
}
@media screen and (max-width: 1440px) {
  .aaa{
    width: 400px;
    & p{
      font-size: 18px !important;
    }
  }
  h3{
    font-size: 28px;
  }
  .right{
    & p{
      font-size: 18px;
    }
  }
  .ab{
    & p{
      font-size: 48px;
    }
  }
}
@media screen and (max-width: 1400px) {
  .left{
    padding-left: 40px;
  }
  .ab{
    & p{
      font-size: 32px;
    }
  }
}
@media screen and (max-width: 1300px) {
  .left{
    padding-left: 20px;
    gap: 48px;
  }
}
@media screen and (max-width: 1200px) {
  .aaa{
    max-width: 320px;
  }
  .left{
    padding-left: 10px;
    gap: 24px;
    & p{
      font-size: 16px;
    }
    & h3{
      font-size: 24px;
    }
    & svg{
      width: 28px;
      height: 28px;
    }
  }
}
@media screen and (max-width: 900px) {
  .as{
    flex-direction: column;
    & svg{
      display: none;
    }
  }
  .left{
    flex-direction: column;
  }
}
</style>