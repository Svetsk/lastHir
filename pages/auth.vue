<template>
  <div class="container">
    <header class="flex items-center justify-between gap-[30px] p-[30px]">
      <div class="flex items-center gap-[30px]">
        <nuxt-img src="/image/ui/logo.svg" class="w-[300px]" />
        <p>|</p>
        <p class="ascl text-[30px] font-[400]">Калькулятор</p>
      </div>
      <div>
        <ui-elements-logout-button />
      </div>
    </header>
  </div>
  <div class="relative pt-[60px] pb-[200px]">
    <div class="container">
      <h1>Пожалуйста, выполните вход</h1>
    </div>
    <div class="containerz">
      <form @submit.prevent="handleSubmit">
        <div class="input-group">
          <label for="username">Username</label>
          <input class="text-black" v-model="username" type="text" id="username" required />
        </div>
        <div class="input-group">
          <label for="password">Password</label>
          <input class="text-black" v-model="password" type="password" id="password" required />
        </div>
        <button type="submit" class="button">Login</button>
        <div v-if="message" class="message">{{ message }}</div>
      </form>
    </div>
    <nuxt-img src="/image/calcbg.svg" class="h-[1000px] w-[700px] absolute right-0 top-[-150px]" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from '#app'

const username = ref('')
const password = ref('')
const message = ref('')
const router = useRouter()

const handleSubmit = () => {
  if (username.value === 'admin' && password.value === 'admin') {
    localStorage.setItem('authenticated', 'true')
    message.value = 'Login successful!'
    // Перенаправление на страницу калькулятора
    router.push('/calc')
  } else {
    message.value = 'Invalid username or password'
  }
}
</script>

<style scoped>
.ascl{
  color: #ffffff !important;
}
h1{
  font-size: 56px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
}
.containerz {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #000000;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.input-group {
  margin-bottom: 15px;
}
.input-group label {
  display: block;
  margin-bottom: 5px;
}
.input-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
.button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #000000;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.button:hover {
  background-color: #0056b3;
}
.message {
  margin-top: 15px;
  color: #ff0000;
}
footer{
  position: absolute !important;
  bottom: 0 !important;
}
</style>
