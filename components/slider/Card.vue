<!-- components/Card.vue -->
<template>
  <div class="card">
    <nuxt-img loading="lazy" :src="image" class="ica" alt="Card image" />
    <div class="card-content">
      <div>
        <p class="text-[30px] font-[600] pb-[45px] bnb">{{ num }}</p>
        <p class="text-[20px] w-[438px] pb-[45px] scx">{{ text }}</p>
        <div class="flex gap-[42px] items-center cvxc">
          <p class="text-[25px] font-[600] look">смотреть отзыв полностью</p>
          <nuxt-link to="/reviews" prefetch>
            <svg class="nexr" xmlns="http://www.w3.org/2000/svg" width="57" height="57" viewBox="0 0 57 57" fill="none">
              <circle cx="28.7187" cy="28.1738" r="28" transform="rotate(-90 28.7187 28.1738)" fill="black"/>
              <path d="M40.9919 28.8809C41.3824 28.4904 41.3824 27.8572 40.9919 27.4667L34.6279 21.1028C34.2374 20.7122 33.6042 20.7122 33.2137 21.1028C32.8232 21.4933 32.8232 22.1265 33.2137 22.517L38.8706 28.1738L33.2137 33.8307C32.8232 34.2212 32.8232 34.8544 33.2137 35.2449C33.6042 35.6354 34.2374 35.6354 34.6279 35.2449L40.9919 28.8809ZM17.8848 29.1738L40.2848 29.1738L40.2848 27.1738L17.8848 27.1738L17.8848 29.1738Z" fill="white"/>
            </svg>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  image: String,
  text: String,
  num: String,
});
</script>

<style scoped>
.ica{
  border-radius: 40px;
}
.card {
  overflow: visible !important;
  padding: 32px 400px 32px 27px;
  margin: 0 10px;
  border: 1px solid #ddd;
  border-radius: 40px;
  display: flex;
  gap: 42px;
  background: white;
  width: 1000px !important;
}
.card img {
  width: 262px;
  height: auto;
}
p{
  color: black;
}
@media screen and (max-width: 768px) {
  .card img {
    width: 252px;
    height: 100%;
  }
  .bnb{
    padding: 16px 0 16px 0;
    text-transform: uppercase;
  }
  svg{
    width: 64px;
    height: 64px;
  }
  .scx{
    padding-bottom: 12px;
    max-width: 380px;
  }
  .card{
    padding: 32px 300px 32px 27px;
  }
  .cvxc{
    gap: 12px !important;
  }
  .look{
    width: 250px;
  }
}
@media screen and (max-width: 425px) {
  .card img {
    width: 170px;
    height: 267px;
  }
  .bnb{
    padding: 16px 0 16px 0;
    font-size: 14px;
  }
  svg{
    width: 56px;
    height: 56px;
  }
  .scx{
    padding-bottom: 12px;
    max-width: 163px;
    font-size: 9px;
  }
  .card{
    padding: 12px 190px 12px 12px;
  }
  .cvxc{
    gap: 12px !important;
  }
  .look{
    width: 105px;
    font-size: 12px;
  }
  .nexr{
    width: 27px;
    height: 27px;
  }
}

@media screen and (max-width: 390px) {
  .card{
    gap: 12px;
  }
}
</style>
