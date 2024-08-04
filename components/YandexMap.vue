<template>
  <div class="rounded-[40px] overflow-hidden">
    <div id="map" style="width: 712px; height: 600px; border-radius: 40px"></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

const initMap = () => {
  if (!window.ymaps) {
    return;
  }

  window.ymaps.ready(() => {
    const map = new window.ymaps.Map('map', {
      center: [44.568274, 38.075029], // Координаты центра карты
      zoom: 17,
    });

    // Координаты метки
    const placemarkCoordinates = [44.568274, 38.075029];

    // Создаем метку
    const placemark = new window.ymaps.Placemark(placemarkCoordinates, {
      balloonContent: 'Клиника Ланцеть', // Контент балуна
    }, {
      // Опции метки
      preset: 'islands#icon',
      iconColor: '#C20909',
    });

    // Добавляем метку на карту
    map.geoObjects.add(placemark);
  });
};

onMounted(() => {
  if (!window.ymaps) {
    const script = document.createElement('script');
    script.src = `https://api-maps.yandex.ru/2.1/?lang=ru_RU`;
    script.onload = initMap;
    document.head.appendChild(script);
  } else {
    initMap();
  }
});
</script>

<style scoped>
@media screen and (max-width: 1024px) {
  #map{
    width: 500px !important;
  }
}
@media screen and (max-width: 600px) {
  #map{
    width: 435px !important;
    height: 367px !important;
  }
}
@media screen and (max-width: 425px) {
  #map{
    width: 380px !important;
    height: 380px !important;
  }
}
@media screen and (max-width: 390px) {
  #map{
    width: 340px !important;
    height: 340px !important;
  }
}
</style>
