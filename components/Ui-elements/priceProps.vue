<script setup lang="ts">
const props = defineProps<{
  title: string;
  price: string; // Определите и добавьте пропс `price`
}>();
</script>

<template>
  <div class="bo">
    <p class="title">{{ props.title }}</p>
    <p class="price">{{ props.price }}</p>
  </div>
</template>

<style scoped lang="scss">
.price{
  font-size: 30px;
  font-weight: 500;
  background: white;
  padding: 16px 0;
  color: black;
  border-radius: 20px;
  width: 249px;
  text-align: center;
}
.title{
  font-size: 25px;
  font-weight: 400;
  max-width: 1053px;
}
.bo{
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #ffffff;
  padding: 21px;
}

@media screen and (max-width: 1024px){
  .title{
    font-size: 18px;
    max-width: 700px;
  }
  .bo{
    padding: 21px 0px 21px 0px;
  }
  .price{
    width: 130px;
    font-size: 16px;
  }
}
@media screen and (max-width: 768px){
  .title{
    max-width: 500px;
  }
  .price{
    width: 130px;
    font-size: 16px;
  }
}
@media screen and (max-width: 425px){
  .title{
    max-width: 277px;
    font-size: 14px;
  }
  .price{
    width: 100px;
    font-size: 12px;
  }
}
@media screen and (max-width: 390px){
  .title{
    max-width: 240px;
    font-size: 14px;
  }
  .price{
    width: 100px;
    font-size: 12px;
  }
}
</style>