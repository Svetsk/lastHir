<template>
  <button @click="handleLogout" class="logout-button">Logout</button>
</template>

<script setup>
import { useRouter } from '#app'

const router = useRouter()

const handleLogout = () => {
  // Удаляем информацию о пользователе из localStorage
  localStorage.removeItem('authenticated')

  // Перенаправляем пользователя на страницу логина или домашнюю страницу
  router.push('/auth')
}
</script>

<style scoped>
.logout-button {
  padding: 10px;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.logout-button:hover {
  background-color: #d32f2f;
}
</style>
