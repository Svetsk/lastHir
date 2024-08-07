<script setup>
import { ref } from 'vue';

const fio = ref('');
const phone = ref('');
const comment = ref('');
const privacyPolicyAccepted = ref(false);
const notificationVisible = ref(false);
const notificationMessage = ref('');

const submitForm = async () => {
  try {
    if (!/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(phone.value)) {
      notificationMessage.value = 'Некорректный формат номера телефона';
      notificationVisible.value = true;
      setTimeout(() => {
        notificationVisible.value = false;
      }, 3000);
      return;
    }

    const response = await fetch('/api/sendMessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fio: fio.value,
        phone: phone.value,
        comment: comment.value,
      }),
    });

    const data = await response.json();
    if (data.ok) {
      notificationMessage.value = 'Сообщение отправлено успешно';
      fio.value = '';
      phone.value = '';
      comment.value = '';
    } else {
      notificationMessage.value = data.description || 'Ошибка отправки сообщения';
    }
  } catch (error) {
    console.error('Ошибка:', error);
    notificationMessage.value = 'Ошибка отправки сообщения';
  }
  notificationVisible.value = true;
  setTimeout(() => {
    notificationVisible.value = false;
  }, 5000);
};
</script>

<template>
  <div class="container-fluide">
    <div class="pb-[240px] ffaa" >
      <div class="container">
        <ui-elements-title title="заполните форму" class="pb-[65px] pt-[85px]" />
      </div>
      <div class="form bg-white rounded-[100px] flex justify-between">
        <form action="" id="formas" method="post" class="py-[82px] pl-[62px] flex flex-col gap-[45px] asd" @submit.prevent="submitForm">
          <label class="flex flex-col text-black text-[30px] font-[500]">
            Имя
            <input type="text" placeholder="Анастасия Калашникова" size="30" class="w-[760px] border-none inpt" v-model="fio" required>
          </label>

          <label class="flex flex-col text-black text-[30px] font-[500]">
            Номер телефона
            <input type="text" placeholder="+7 (900) 458-33-33" size="30" class="w-[760px] border-none inpt" v-model="phone" required>
          </label>

          <label class="flex flex-col text-black text-[30px] font-[500]">
            Комментарий
            <input type="text" name="comments" placeholder="Здравствуйте, меня беспокоит...." size="30" class="w-[760px] border-none inpt" v-model="comment" required>
          </label>
          <button type="submit">
            Отправить
            <svg xmlns="http://www.w3.org/2000/svg" width="58" height="57" viewBox="0 0 58 57" fill="none">
              <circle cx="29.1133" cy="28.3212" r="20" transform="rotate(-135 29.1133 28.3212)" fill="black"/>
              <path d="M35.9543 22.4793C35.9543 21.927 35.5066 21.4793 34.9543 21.4793L25.9543 21.4793C25.402 21.4793 24.9543 21.927 24.9543 22.4793C24.9543 23.0315 25.402 23.4793 25.9543 23.4793L33.9543 23.4793L33.9543 31.4793C33.9543 32.0315 34.402 32.4793 34.9543 32.4793C35.5066 32.4793 35.9543 32.0315 35.9543 31.4793L35.9543 22.4793ZM24.3477 34.5001L35.6614 23.1864L34.2472 21.7722L22.9335 33.0859L24.3477 34.5001Z" fill="white"/>
            </svg>
          </button>

          <div class="flex gap-[30px] items-center">
            <input type="checkbox" class="w-[48px] h-[48px] custom-checkbox" v-model="privacyPolicyAccepted" required>
            <label class="max-w-[746px] bhg">
              <nuxt-link to="/privacy" class="text-black text-[25px] offo">
                <u>Я соглашаюсь с политикой конфиденциальности и правилами обработки персональных данных</u>
              </nuxt-link>
            </label>
          </div>
        </form>
        <ui-Notification :show="notificationVisible" :message="notificationMessage" />
        <nuxt-img loading="lazy" src="/image/ui/formImg.png" class="w-[921px] h-auto mig"/>
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
.custom-checkbox {
  -webkit-appearance: none;
  -moz-appearance: none;
  //appearance: none;
  width: 48px !important;
  height: 40px !important;
  border: 2px solid #000; /* черная рамка */
  background-color: #fff; /* белый фон */
}

.custom-checkbox:checked {
  background-color: #000; /* черный фон при отметке */
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white' width='24px' height='24px'%3E%3Cpath d='M10 17l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'/%3E%3C/svg%3E"); /* белая галочка */
  //background-size: 70%;
  background-repeat: no-repeat;
  background-position: center;
}
.offo{
  width: 600px;
}
input{
  border-bottom: black 2px solid;
  padding: 18px 18px 18px 0;
  &::placeholder{
    font-size: 25px;
    color: #bdbdbd;
    font-weight: 400;
  }
  &:focus{
    border-bottom-color: #000;
    outline: 0;
  }
}

@media screen and (max-width: 1766px) {
  .inpt{
    width: 720px;
  }
}
@media screen and (max-width: 1684px) {
  .inpt{
    width: 700px;
  }
}
@media screen and (max-width: 1600px) {
  .inpt{
    width: 600px;
  }
}
.asd{
  & button{
    max-width: 264px;
  }
}
@media screen and (max-width: 1440px) {
  .inpt{
    width: 550px;
  }
  img{
    width: 900px;
    height: auto;
  }
  .asd{
    gap: 28px;
    padding-top: 56px;
    padding-bottom: 42px;
    & button{
      max-width: 264px;
    }
  }
  .bhg{
    & a{
      font-size: 18px;
    }
  }
}
@media screen and (max-width: 1200px) {
  .form{
    flex-wrap: wrap;
    justify-content: flex-end;
    background: none;
  }
  form{
    background: white;
    border-radius: 64px;
    margin: 0 auto;
    padding-bottom: 300px;
  }
  .inpt{
    width: 600px;
  }
  .mig{
    transform: translateY(-30px);
  }
}
@media screen and (max-width: 720px) {
  .inpt{
    width: 500px;
  }
  form{
    padding-left: 40px;
  }
  .foof{
    font-size: 14px;
    padding-right: 20px;
  }
  input{
    &::placeholder{
      font-size: 16px;
    }
  }
  .ffaa{
    padding-bottom: 0px;
  }
  button{
    font-size: 16px !important;
  }
}
@media screen and (max-width: 620px) {
  .inpt{
    width: 340px;
  }
  form{
    padding-left: 20px;
  }
  label{
    font-size: 24px;
  }
}
@media screen and (max-width: 420px) {
  .inpt{
    width: 320px;
  }
  form{
    padding-left: 20px;
  }
  label{
    font-size: 20px;
  }
}
@media screen and (max-width: 400px) {
  .form{
    margin: 0 auto;
    max-width: 390px;
    position: relative;
    left: 0%;
  }
  form{
    padding-left: 20px !important;
    padding-right: 20px !important;
    & .inpt{
      width: 250px;
      margin: 0 auto;
    }
    & label{
      padding-left: 4px;
    }
  }
}
button{
  color: black;
  border: 2px solid #000000;
  position: relative;
  border-radius: 60px;
  padding: 16px 45px;
  font-weight: 500;
  font-size: 30px;
  display: inline;
  max-width: 244px;
}
svg{
  position: absolute;
  top: 5px;
  right: -30px;
}
</style>