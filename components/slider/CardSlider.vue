<template>
  <div class="container">
    <ui-elements-title title="отзывы" class="pb-[65px] pt-[65px]" />
  </div>
  <div class="slider-container">
    <div class="slider">
      <Card
          v-for="(card, index) in cards"
          :key="index"
          :image="card.image"
          :text="card.text"
          :num="card.num"
      />
    </div>
  </div>
  <svg class="pt-[20px] sadasd" xmlns="http://www.w3.org/2000/svg" width="152" height="49" viewBox="0 0 152 49" fill="none">
    <rect x="1" y="1.8866" width="150" height="45.1791" rx="22.5896" stroke="white" stroke-width="2"/>
    <path d="M119.233 26.3141C119.819 25.7284 119.819 24.7786 119.233 24.1928L109.687 14.6469C109.102 14.0611 108.152 14.0611 107.566 14.6469C106.98 15.2327 106.98 16.1824 107.566 16.7682L116.051 25.2535L107.566 33.7388C106.98 34.3245 106.98 35.2743 107.566 35.8601C108.152 36.4459 109.102 36.4459 109.687 35.8601L119.233 26.3141ZM33.8271 26.7535H118.173V23.7535H33.8271V26.7535Z" fill="white"/>
  </svg>
  <div class="decs">
    <svg xmlns="http://www.w3.org/2000/svg" width="240" height="150" viewBox="0 0 240 150" fill="none">
      <rect x="1.47266" y="1.97266" width="236.859" height="146.093" rx="39" stroke="white" stroke-width="2"/>
      <path d="M187.942 79.2268C188.918 78.2504 188.918 76.6675 187.942 75.6912L172.032 59.7813C171.056 58.805 169.473 58.805 168.497 59.7813C167.52 60.7576 167.52 62.3405 168.497 63.3168L182.639 77.459L168.497 91.6011C167.52 92.5774 167.52 94.1603 168.497 95.1367C169.473 96.113 171.056 96.113 172.032 95.1367L187.942 79.2268ZM53.6299 79.959H186.174V74.959H53.6299V79.959Z" fill="white"/>
    </svg>
  </div>
</template>

<script setup>
import Card from '~/components/slider/Card.vue';

const cards = [
  {
    image: '/image/sl/sl1.png',
    num: 'Пациент 1',
    text: 'Евгения Альбертовна, мой лучший хирург, благодаря которому можно наконец-то носить купальник, как хочется....',
  },
  {
    image: '/image/sl/sl2.png',
    num: 'Пациент 2',
    text: 'Евгения Альбертовна, у вас золотые руки, которые не просто украшают тела, но и дарят женщинам безграничное счастье  и уверенность...',
  },
  {
    image: '/image/sl/sl3.png',
    num: 'Пациент 3',
    text: 'Я выбирала хирурга по двум критериям: это должен быть маммолог, а также хирург-женщина. Сейчас прошло 4 месяца, но я даже не представляю, как было “до”...',
  },
  {
    image: '/image/sl/sl4.png',
    num: 'Пациент 4',
    text: 'Доктор, я очень довольна результатом!! Счастье!!! Евгения Альбертовна, у Вас золотые руки!!! Самое приятное, что девочки приходят и говорят....',
  },
  {
    image: '/image/sl/sl5.png',
    num: 'Пациент 5',
    text: 'Прекрасный доктор, я буду благодарна вам до конца жизни!!! Вы исполнили мою мечту!!! Сотворили счастье своими руками',
  },
  {
    image: '/image/sl/sl6.png',
    num: 'Пациент 6',
    text: 'Моё чувство благодарности поймет тот, кому говорили, что невозможно сделать так, как ты хочешь, но для Евгении Альбертовны нет невозможного...',
  },
  {
    image: '/image/sl/sl7.png',
    num: 'Пациент 7',
    text: 'У меня была фиброаденома. Евгения Альбертовна на приеме простроила четкий план действий. Хочу поделиться фото ювелирной работы доктора...',
  },
  {
    image: '/image/sl/sl8.png',
    num: 'Пациент 8',
    text: 'Желающих узнать моего врача ну ооочень много. Поэтому всегда рекомендую Евгению Альбертовну. Рада, что доверилась именно вам....',
  },
  // добавьте больше карточек по необходимости
];
</script>

<style scoped>
.decs{
  margin-top: 0;
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
}
.sadasd{
  margin: 0 auto;
  display: none;
}
.slider-container {
  overflow-x: auto; /* Горизонтальный скролл */
  overflow-y: hidden; /* Без вертикального скролла */
  padding: 0px 0 65px 0;
  scrollbar-width: thin; /* Firefox */
  scrollbar-color: #E8E8E8 #E8E8E8; /* Firefox */
}

.slider-container::-webkit-scrollbar {
  height: 12px; /* Высота скроллбара */
}

.slider-container::-webkit-scrollbar-thumb {
  background-color: #FFF; /* Цвет ползунка */
  border-radius: 100px; /* Радиус скругления для ползунка */
  border: 3px solid #E8E8E8; /* Цвет фона вокруг ползунка */
}

.slider-container::-webkit-scrollbar-track {
  background: #E8E8E8; /* Цвет фона скроллбара */
  border-radius: 100px; /* Радиус скругления для трека скроллбара */
}

.slider {
  display: flex;
  gap: 20px; /* Расстояние между карточками */
}
</style>
