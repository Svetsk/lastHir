<template>
  <div class="rounded-[40px] overflow-hidden">
    <div id="map" class="map" style="width: 712px; height: 600px; border-radius: 40px"></div>
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
      controls: ['zoomControl'], // Оставляем только элементы управления зумом
      behaviors: ['drag', 'scrollZoom'], // Управление поведением карты
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

    // Настройка пользовательских стилей карты
    const style = document.createElement('style');
    style.innerHTML = `
      #map {
        background-color: #2c2c2c; /* Темный фон для контейнера карты */
      }
      .ymaps-2-1-79-control {
        background-color: #2c2c2c !important;
        border: none !important;
      }
      .ymaps-2-1-79-control__item {
        color: #f0f0f0 !important;
      }
      .ymaps-2-1-79-control__item:hover {
        background-color: #444 !important;
      }
      .ymaps-2-1-79-control__item_active {
        background-color: #666 !important;
      }
    `;
    document.head.appendChild(style);
  });
};

onMounted(() => {
  if (!window.ymaps) {
    const script = document.createElement('script');
    script.src = `https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=ccaf7b56-6b57-4b1e-8d13-2feb14818f9e`;
    script.onload = initMap;
    document.head.appendChild(script);
  } else {
    initMap();
  }
});
</script>

<style>

#map {
height: 100vh; /* Устанавливаем высоту карты */
background-color: #2c2c2c; /* Темный фон для контейнера карты */
}

.map {
  width: 100%;
  height: 600px;
  border-radius: 40px;
}

@media screen and (max-width: 1024px) {
  .map {
    width: 500px !important;
  }
}
@media screen and (max-width: 600px) {
  .map {
    width: 435px !important;
    height: 367px !important;
  }
}
@media screen and (max-width: 425px) {
  .map {
    width: 380px !important;
    height: 380px !important;
  }
}
@media screen and (max-width: 400px) {
  .map {
    width: 340px !important;
    height: 340px !important;
  }
}
</style>

