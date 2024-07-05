<script setup>
import { ref } from 'vue';
import { defineProps } from 'vue';

const props = defineProps({
  title: String,
  subt: String,
  spanOne: String,
  spanTwo: String,
  spanThree: String,
  spanFore: String,
  textOne: String,
  textTwo: String,
  olOne: String,
  olTwo: String,
  olThree: String,
  ptext: String,
  textt: String,
});

const show = ref(false);

</script>

<template>
  <div class="container">
    <button @click="show = !show" class="items">
      <h3>{{ title }}</h3>
      <svg :class="{ 'rotate-90': show }" xmlns="http://www.w3.org/2000/svg" width="56" height="57" viewBox="0 0 56 57" fill="none">
        <circle cx="28.1421" cy="28.2095" r="27.8579" fill="white"/>
        <path d="M40.346 29.6354C40.9318 29.0496 40.9318 28.0998 40.346 27.514L30.8001 17.9681C30.2143 17.3823 29.2645 17.3823 28.6787 17.9681C28.093 18.5539 28.093 19.5036 28.6787 20.0894L37.164 28.5747L28.6787 37.06C28.093 37.6458 28.093 38.5955 28.6787 39.1813C29.2645 39.7671 30.2143 39.7671 30.8001 39.1813L40.346 29.6354ZM16.999 30.0747L39.2854 30.0747V27.0747L16.999 27.0747V30.0747Z" fill="black"/>
      </svg>
    </button>
    <Transition>
      <div v-if="show">
        <p class="texts">
          {{ subt }}
          <span>
            {{ spanOne }}
          </span>
          {{ textOne }}
          <br>
          {{ textt }}
          <br>
          <span class="underline">{{ spanTwo }}</span><br>
          {{ ptext }}
          <ul>
            <li>{{ olOne }}</li>
            <li>{{ olTwo }}</li>
            <li>{{ olThree }}</li>
          </ul>
          <br>
          <span>{{ spanThree }}</span>
          {{ textTwo }}
          <span>{{ spanFore }}</span>
        </p>

      </div>
    </Transition>
  </div>
</template>

<style scoped lang="scss">
ul{
  & li{
    padding: 0;
    margin: 0;
    //list-style: square;
    color: white;
  }
}

p{
  max-width: 1380px;
  font-size: 25px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.80);
  padding-bottom: 25px;
  & span{
    color: rgba(255, 255, 255, 0.80);
    font-weight: 700;
    &:nth-child(1){
      text-decoration-line: underline;
    }
  }
}
svg {
  transition: transform 0.3s ease-in-out;
}
.rotate-90 {
  transform: rotate(90deg);
  transition: transform 0.3s ease-in-out;
}
.rotate-0 {
  transform: rotate(90deg);
  transition: transform 0.3s ease-in-out;
}
.items{
  border-top: 2px solid white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 0;
  width: 100%;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
h3{
  font-size: 30px;
  font-weight: 600;
  text-transform: uppercase;
  text-align: start;
}

@media screen and (max-width: 720px){
  h3{
    font-size: 22px !important;
  }
  p{
    font-size: 18px;
  }
}
@media screen and (max-width: 540px){
  h3{
    font-size: 20px !important;
  }
  p{
    font-size: 16px;
  }
}
</style>