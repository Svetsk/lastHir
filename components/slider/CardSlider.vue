<template>
  <div class="slider-container">
    <div class="slider">
      <Card
          v-for="(card, index) in cards"
          :key="index"
          :image="card.image"
      />
    </div>
  </div>
</template>

<script setup>
import Card from '~/components/slider/Card.vue';

const cards = [
  { image: '/image/scrollSlider/slideOne.png' },
  { image: '/image/scrollSlider/slideOne.png' },
  { image: '/image/scrollSlider/slideOne.png' },
  { image: '/image/scrollSlider/slideOne.png' },
  { image: '/image/scrollSlider/slideOne.png' },
  { image: '/image/scrollSlider/slideOne.png' },
  { image: '/image/scrollSlider/slideOne.png' },
  { image: '/image/scrollSlider/slideOne.png' },
  { image: '/image/scrollSlider/slideOne.png' },
  { image: '/image/scrollSlider/slideOne.png' },
  // добавьте больше карточек по необходимости
];
</script>

<style scoped>
.slider-container {
  overflow-x: auto; /* Горизонтальный скролл */
  overflow-y: hidden; /* Без вертикального скролла */
  //white-space: nowrap; /* Без переноса строк */
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
