<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
  podTitle: string;
  title: string;
  subTitle: string;
  bottomTitle: string;
  image: string;
  src: string;
}>();


// Состояние для сердечка
const isRed = ref(false);

// Состояние для добавления в заметки
const isAdded = ref(false);

// Вычисляемый цвет заполнения для сердечка
const fillColor = computed(() => (isRed.value ? '#980000' : 'none'));

// Вычисляемый цвет заливки для иконки добавления
const fillColorAdded = computed(() => (isAdded.value ? 'red' : 'none'));

// Функция переключения цвета и состояния сердечка
const toggleColor = () => {
  isRed.value = !isRed.value;
};

// Функция переключения состояния добавления
const toggleAdded = () => {
  isAdded.value = !isAdded.value;
};
</script>

<template>
  <nuxt-link to="" prefetch>
    <div class="border-[3px] border-[#fff] w-[436px] h-[440px] rounded-[40px] relative jkjk">
      <!-- Проверка на наличие изображения -->
      <nuxt-img loading="lazy" v-if="props.image" :src="props.image" class="absolute bottom-0 w-[432px] h-[100%] z-[-1]" />
      <div class="pt-[40px] pl-[21px] flex flex-col justify-between">
        <div class="flex flex-col gap-[21px]">
          <p class="podtitle">{{ props.podTitle }}</p>
          <h3>{{ props.title }}</h3>
          <p class="st">{{ props.subTitle }}</p>
          <div>
            <nuxt-link class="learn" :to="src" prefetch>читать</nuxt-link>
          </div>
        </div>
        <p class="bottom__title">{{ props.bottomTitle }}</p>
      </div>
    </div>
    <div class="flex items-center justify-between p-[14px]">
      <div class="flex gap-[21px]">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="26"
            viewBox="0 0 31 26"
            :fill="fillColor"
            :class="{ like: isRed }"
            @click="toggleColor"
        >
          <path d="M9.20009 0.619143C4.82295 0.619143 1.27441 4.16768 1.27441 8.54481C1.27441 16.4705 10.6411 23.6756 15.6847 25.3516C20.7283 23.6756 30.095 16.4705 30.095 8.54481C30.095 4.16768 26.5465 0.619143 22.1694 0.619143C19.489 0.619143 17.1186 1.94993 15.6847 3.98683C14.9539 2.94584 13.983 2.09626 12.8542 1.51005C11.7254 0.923837 10.472 0.618243 9.20009 0.619143Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="26" viewBox="0 0 27 26" fill="none">
          <path d="M13.4607 25.351C15.9064 25.351 18.2972 24.6258 20.3308 23.267C22.3644 21.9082 23.9493 19.9769 24.8853 17.7173C25.8212 15.4577 26.0661 12.9714 25.589 10.5726C25.1118 8.17385 23.9341 5.97045 22.2047 4.24104C20.4753 2.51164 18.2719 1.3339 15.8731 0.856754C13.4744 0.379612 10.988 0.624499 8.72842 1.56045C6.46884 2.49639 4.53755 4.08137 3.17876 6.11493C1.81998 8.1485 1.09473 10.5393 1.09473 12.9851C1.09473 15.0296 1.58936 16.9573 2.46872 18.6555L1.09473 25.351L7.79019 23.977C9.48845 24.8564 11.4175 25.351 13.4607 25.351Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="26" viewBox="0 0 27 26" fill="none">
          <path d="M25.558 0.619141L16.9019 25.351L11.9555 14.2217M25.558 0.619141L0.826172 9.27529L11.9555 14.2217M25.558 0.619141L11.9555 14.2217" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="28"
          viewBox="0 0 23 28"
          :class="{ added: isAdded }"
          @click="toggleAdded"
          :fill="fillColorAdded"
      >
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.956177 4.58513C0.956177 3.53328 1.37402 2.52452 2.11779 1.78075C2.86155 1.03698 3.87032 0.619141 4.92216 0.619141H18.1421C19.194 0.619141 20.2027 1.03698 20.9465 1.78075C21.6903 2.52452 22.1081 3.53328 22.1081 4.58513V25.7741C22.1081 27.3869 20.2838 28.3255 18.9723 27.3882L11.5321 22.0738L4.09195 27.3882C2.77921 28.3269 0.956177 27.3882 0.956177 25.7754V4.58513ZM4.92216 3.26313C4.57155 3.26313 4.23529 3.40241 3.98737 3.65034C3.73945 3.89826 3.60017 4.23451 3.60017 4.58513V24.4904L10.3794 19.6479C10.7157 19.4076 11.1188 19.2784 11.5321 19.2784C11.9455 19.2784 12.3486 19.4076 12.6849 19.6479L19.4641 24.4904V4.58513C19.4641 4.23451 19.3248 3.89826 19.0769 3.65034C18.829 3.40241 18.4927 3.26313 18.1421 3.26313H4.92216Z" fill="white"/>
      </svg>
    </div>
  </nuxt-link>
</template>

<style scoped lang="scss">
.like {
  animation: pulse 0.8s ease;
}

/* Анимация пульсации */
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

.added {
  animation: addAnimation 0.6s ease-out;
  color: white; /* Цвет заполнения для добавленного состояния */
}

/* Анимация добавления */
@keyframes addAnimation {
  0% {
    transform: scale(1) rotate(0);
  }
  25% {
    transform: rotate(10deg);
  }
  50% {
    transform: scale(1.1) rotate(0deg);
  }
  75% {
    transform: rotate(-10deg);
  }
  100% {
    transform: scale(1) rotate(0deg);
  }
}
.podtitle{
  font-size: 20px;
  font-weight: 500;
}
h3{
  font-size: 25px;
  font-weight: 700;
  text-transform: uppercase;
}
.learn{
  border-radius: 10px;
  background: #FFF;
  font-size: 16px;
  font-weight: 500;
  color: black;
  padding: 5px 32px;
}
.bottom__title{
  font-size: 18px;
  text-align: center;
  font-weight: 500;
  padding-top: 108px;
}
.st{
  max-width: 280px;
}
@media screen and (max-width: 425px) {
  .jkjk{
    max-width: 380px;
  }
}
@media screen and (max-width: 400px) {
  .jkjk{
    max-width: 340px;
  }
  h3{
    font-size: 22px;
  }
  .podtitle{
    font-size: 16px;
  }
}
</style>
