<script setup lang="ts">
defineProps({
  link: String,
  title: String,
})
</script>

<template>
  <div>
    <nuxt-link :to="link">
      {{ title }}
      <svg xmlns="http://www.w3.org/2000/svg" width="58" height="57" viewBox="0 0 58 57" fill="none">
        <circle cx="29.1133" cy="28.3212" r="20" transform="rotate(-135 29.1133 28.3212)" fill="white"/>
        <path d="M35.9543 22.4793C35.9543 21.927 35.5066 21.4793 34.9543 21.4793L25.9543 21.4793C25.402 21.4793 24.9543 21.927 24.9543 22.4793C24.9543 23.0315 25.402 23.4793 25.9543 23.4793L33.9543 23.4793L33.9543 31.4793C33.9543 32.0315 34.402 32.4793 34.9543 32.4793C35.5066 32.4793 35.9543 32.0315 35.9543 31.4793L35.9543 22.4793ZM24.3477 34.5001L35.6614 23.1864L34.2472 21.7722L22.9335 33.0859L24.3477 34.5001Z" fill="black"/>
      </svg>
    </nuxt-link>
  </div>
</template>

<style scoped lang="scss">
div{
  & a{
    border: 2px solid #fff;
    position: relative;
    border-radius: 60px;
    padding: 16px 45px;
    font-weight: 500;
    font-size: 30px;
    display: inline;
  }
  & svg{
    position: absolute;
    top: 5px;
    right: -30px;
  }
}
</style>