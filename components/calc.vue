<template>
  <div class="container">
    <header class="flex items-center justify-between gap-[30px] pt-[30px] pb-[100px]">
      <div class="flex items-center gap-[30px]">
        <nuxt-img src="/image/ui/logo.svg" class="w-[300px]" />
        <p class="textwhia">|</p>
        <p class="textwhia text-[30px] font-[400]">Калькулятор</p>
      </div>
      <div>
        <ui-elements-logout-button />
      </div>
    </header>
    <nuxt-img src="/image/calcbg.svg" class="h-[150vh] top-0 fixed right-[-300px] z-0 " />
  </div>
  <div class="calculator relative z-[200]">
    <!-- Список выбранных услуг -->
    <div class="section">
      <label class="label">Выбранные услуги:</label>
      <ul class="selected-services">
        <li v-for="service in selectedServices" :key="service.id" class="selected-service">
          {{ service.name }} - {{ service.price }} ₽
          <button @click="removeService(service.id)" class="remove-button">Удалить</button>
        </li>
      </ul>
    </div>
    <!-- Инпуты для количества единиц -->
    <div class="section">
      <label class="label">Количество единиц:</label>
      <div class="input-group">
        <button @click="changeUnits(-1)" class="button">-</button>
        <input type="number" :value="units" @input="updateUnits($event.target.value)" class="input" />
        <button @click="changeUnits(1)" class="button">+</button>
      </div>
    </div>
    <!-- Инпуты для количества дней -->
    <div class="section">
      <label class="label">Количество дней:</label>
      <div class="input-group">
        <button @click="changeDays(-1)" class="button">-</button>
        <input type="number" :value="days" @input="updateDays($event.target.value)" class="input" />
        <button @click="changeDays(1)" class="button">+</button>
      </div>
    </div>
    <!-- Инпуты для количества минут -->
    <div class="section">
      <label class="label">Количество минут:</label>
      <div class="input-group">
        <button @click="changeMinutes(-30)" class="button">-30 мин</button>
        <input type="number" :value="minutes" @input="updateMinutes($event.target.value)" class="input" />
        <button @click="changeMinutes(30)" class="button">+30 мин</button>
      </div>
    </div>
    <!-- Чекбокс для дополнительной суммы -->
    <div class="section">
      <label class="checkbox-label">
        <input type="checkbox" v-model="additionalCharge" @change="updateSummary" class="checkbox" />
        Дополнительная плата 21 ₽
      </label>
    </div>
    <!-- Область для отображения выбранных услуг и итоговой стоимости -->
    <div class="summary">
      <h2 class="summary-title">Итоговая сумма:</h2>
      <div v-if="summary.length > 0" class="summary-list">
        <ul>
          <li v-for="item in summary" :key="item.name" class="summary-item">
            {{ item.name }} - {{ item.price }} ₽
          </li>
        </ul>
      </div>
      <h2 class="total">Итоговая сумма: {{ total }} ₽</h2>
    </div>
  </div>
  <div class="max-w-[960px] relative z-[100]">
    <div class="section">
      <label class="label">Выберите операции 1</label>
      <div class="custom-select-wrapper">
        <select @change="addService($event.target.value, 1)" class="select custom-select" multiple>
          <option v-for="service in servicesList1" :key="service.id" :value="service.id">
            {{ service.name }} - {{ service.price }} ₽
          </option>
        </select>
      </div>
    </div>
    <div class="section">
      <label class="label">Выберите операции 2</label>
      <div class="custom-select-wrapper">
        <select @change="addService($event.target.value, 2)" class="select custom-select" multiple>
          <option v-for="service in servicesList2" :key="service.id" :value="service.id">
            {{ service.name }} - {{ service.price }} ₽
          </option>
        </select>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue';

definePageMeta({
  middleware: 'auth'
});

// Данные об услугах для первого селектора
const servicesList1 = [
  { id: 1, name: 'Услуга 1', price: 100 },
  { id: 2, name: 'Услуга 2', price: 200 },
  { id: 3, name: 'Услуга 3', price: 300 },
];

// Данные об услугах для второго селектора
const servicesList2 = [
  { id: 4, name: 'Услуга 4', price: 150 },
  { id: 5, name: 'Услуга 5', price: 250 },
  { id: 6, name: 'Услуга 6', price: 350 },
];

// Состояния компонента
const selectedServices1 = ref([]);
const selectedServices2 = ref([]);
const units = ref(1);
const days = ref(1);
const minutes = ref(30);
const additionalCharge = ref(false);

// Функция для добавления услуги
function addService(serviceId, listNumber) {
  const service = listNumber === 1
      ? servicesList1.find(s => s.id === parseInt(serviceId))
      : servicesList2.find(s => s.id === parseInt(serviceId));

  if (!service) return;

  if (listNumber === 1) {
    if (!selectedServices1.value.some(s => s.id === service.id)) {
      selectedServices1.value.push(service);
      updateSummary();
    }
  } else {
    if (!selectedServices2.value.some(s => s.id === service.id)) {
      selectedServices2.value.push(service);
      updateSummary();
    }
  }
}

// Функция для удаления услуги
function removeService(serviceId) {
  selectedServices1.value = selectedServices1.value.filter(service => service.id !== serviceId);
  selectedServices2.value = selectedServices2.value.filter(service => service.id !== serviceId);
  updateSummary();
}

// Функция для изменения количества единиц
function changeUnits(amount) {
  units.value = Math.max(1, units.value + amount);
  updateSummary();
}

function updateUnits(value) {
  units.value = Math.max(1, parseInt(value) || 1);
  updateSummary();
}

// Функция для изменения количества дней
function changeDays(amount) {
  days.value = Math.max(1, days.value + amount);
  updateSummary();
}

function updateDays(value) {
  days.value = Math.max(1, parseInt(value) || 1);
  updateSummary();
}

// Функция для изменения количества минут
function changeMinutes(amount) {
  minutes.value = Math.max(30, minutes.value + amount);
  updateSummary();
}

function updateMinutes(value) {
  minutes.value = Math.max(30, parseInt(value) || 30);
  updateSummary();
}

// Функция для обновления итогового расчета
function updateSummary() {
  const totalServicesPrice = [...selectedServices1.value, ...selectedServices2.value].reduce((acc, service) => acc + service.price, 0);
  const totalUnitsPrice = units.value * 100;
  const totalDaysPrice = days.value * 500;
  const totalMinutesPrice = (minutes.value / 30) * 200;
  const additionalPrice = additionalCharge.value ? 21 : 0;

  const totalPrice = totalServicesPrice + totalUnitsPrice + totalDaysPrice + totalMinutesPrice + additionalPrice;

  summary.value = [
    ...selectedServices1.value.map(service => ({ id: service.id, name: service.name, price: service.price })),
    ...selectedServices2.value.map(service => ({ id: service.id, name: service.name, price: service.price })),
    { name: 'Единицы', price: units.value * 100 },
    { name: 'Дни', price: days.value * 500 },
    { name: 'Минуты', price: (minutes.value / 30) * 200 },
    additionalCharge.value ? { name: 'Дополнительная плата', price: 21 } : null,
  ].filter(item => item !== null);

  total.value = totalPrice;
}

// Список всех услуг, не выбраных в обоих селекторах
const services = computed(() => [...servicesList1, ...servicesList2]);

const summary = ref([]);
const total = ref(0);

updateSummary();
</script>
<style scoped>
/* Основные стили контейнера */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
}

/* Стиль для заголовка */
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 2px solid #e0e0e0;
}

header .logo {
  display: flex;
  align-items: center;
}

header .logo img {
  width: 100px;
  height: auto;
}

header h1 {
  font-size: 24px;
  color: #333;
}

/* Стиль для кнопки выхода */
.ui-elements-logout-button {
  background-color: #ff4d4d;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.ui-elements-logout-button:hover {
  background-color: #e04343;
}

/* Стиль для калькулятора */
.calculator {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

/* Разделы калькулятора */
.section {
  margin-bottom: 20px;
}

/* Стили для меток и элементов управления */
.label {
  display: block;
  font-size: 18px;
  font-weight: 500;
  color: #333;
  margin-bottom: 10px;
}

/* Стиль для выпадающих списков */
.select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  color: #333;
  font-size: 16px;
}

.custom-select-wrapper {
  position: relative;
  display: inline-block;
}

.custom-select-wrapper::after {
  content: '';
  position: absolute;
  top: 50%;
  right: 10px;
  width: 16px;
  height: 16px;
  transform: translateY(-50%);
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 6L8 11L13 6" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>') no-repeat center center;
  background-size: contain;
}

/* Стили для кнопок */
.button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

.button:hover {
  background-color: #0056b3;
}

.input-group {
  display: flex;
  align-items: center;
}

/* Стиль для полей ввода */
.input {
  width: 60px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
  font-size: 16px;
}

/* Стили для чекбоксов */
.checkbox-label {
  display: flex;
  align-items: center;
  font-size: 16px;
}

.checkbox {
  margin-right: 10px;
}

/* Стили для списка выбранных услуг */
.selected-services {
  list-style: none;
  padding: 0;
  margin: 0;
}

.selected-service {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #e0e0e0;
}

.remove-button {
  background-color: #ff4d4d;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.remove-button:hover {
  background-color: #e04343;
}

/* Стиль для сводной информации */
.summary {
  margin-top: 20px;
}

.summary-title {
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;
}

.summary-list {
  max-height: 200px;
  overflow-y: auto;
  border: 1px solid #e0e0e0;
  padding: 10px;
  background-color: #fff;
  border-radius: 4px;
}

.summary-item {
  margin-bottom: 5px;
  font-size: 16px;
}

/* Итоговая сумма */
.total {
  font-size: 20px;
  font-weight: 600;
  color: #007bff;
  margin-top: 20px;
}

</style>