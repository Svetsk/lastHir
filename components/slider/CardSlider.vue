<template>
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
.slider-container {
  overflow-x: auto; /* Горизонтальный скролл */
  overflow-y: hidden; /* Без вертикального скролла */
  padding: 10px 0;
  scrollbar-width: thin; /* Firefox */
  scrollbar-color: #E8E8E8 #E8E8E8; /* Firefox */
  padding-top: 200px;
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
