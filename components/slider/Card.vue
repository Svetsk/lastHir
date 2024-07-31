<!-- components/Card.vue -->
<template>
  <div class="card">
    <img :src="image" alt="Card image" />
    <div class="card-content">
      <div class="flex gap-[36px]">
        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="121" viewBox="0 0 120 121" fill="none">
          <circle cx="60" cy="60.1738" r="59.5" stroke="black"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M64.9296 43.7441H45.2146C43.0359 43.7441 40.9465 44.6096 39.406 46.1501C37.8655 47.6907 37 49.7801 37 51.9587V68.3879C37 70.5665 37.8655 72.656 39.406 74.1965C40.9465 75.737 43.0359 76.6025 45.2146 76.6025H64.9296C67.1082 76.6025 69.1977 75.737 70.7382 74.1965C72.2787 72.656 73.1442 70.5665 73.1442 68.3879V51.9587C73.1442 49.7801 72.2787 47.6907 70.7382 46.1501C69.1977 44.6096 67.1082 43.7441 64.9296 43.7441ZM40.2858 51.9587C40.2858 50.6515 40.8051 49.3979 41.7294 48.4736C42.6538 47.5493 43.9074 47.03 45.2146 47.03H64.9296C66.2368 47.03 67.4904 47.5493 68.4148 48.4736C69.3391 49.3979 69.8583 50.6515 69.8583 51.9587V68.3879C69.8583 69.6951 69.3391 70.9487 68.4148 71.8731C67.4904 72.7974 66.2368 73.3167 64.9296 73.3167H45.2146C43.9074 73.3167 42.6538 72.7974 41.7294 71.8731C40.8051 70.9487 40.2858 69.6951 40.2858 68.3879V51.9587Z" fill="black"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M80.465 47.2899L70.6798 53.6546C70.4524 53.802 70.2651 54.0033 70.1343 54.2407C70.0036 54.478 69.9337 54.744 69.9306 55.0149L69.8419 63.5975C69.8386 63.8743 69.9052 64.1474 70.0356 64.3916C70.166 64.6357 70.3559 64.8429 70.5878 64.994L80.4585 71.408C80.7064 71.5696 80.9934 71.6612 81.2891 71.6731C81.5848 71.6851 81.8782 71.617 82.1384 71.4759C82.3986 71.3349 82.6158 71.1262 82.7672 70.8719C82.9186 70.6176 82.9985 70.3272 82.9984 70.0312V48.67C82.9991 48.3738 82.9196 48.0829 82.7685 47.8281C82.6173 47.5733 82.4001 47.3642 82.1398 47.2228C81.8796 47.0813 81.5859 47.0129 81.2899 47.0247C80.9939 47.0366 80.7066 47.1282 80.4585 47.2899M79.7159 67.005L73.1409 62.7301L73.2099 55.9284L79.7159 51.6995V67.005Z" fill="black"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="121" height="121" viewBox="0 0 121 121" fill="none">
          <circle cx="60.9141" cy="60.1738" r="59.5" stroke="black"/>
          <path d="M71.8389 47.1719H41.248M80.5791 60.2822H41.248M67.6873 73.1741H41.248" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div>
        <p class="text-[30px] font-[600] pt-[60px] pb-[45px] bnb">Ангелина Щ.</p>
        <p class="text-[20px] w-[438px] pb-[45px] scx">Благодарю Евгению Альбертовну за такую прекрасную грудь. Долго выбирала своего хирурга  и не пожалела, что выбрала именно вас...</p>
        <div class="flex gap-[42px] items-center cvxc">
          <p class="text-[25px] font-[600] look">смотреть отзыв  полностью</p>
          <svg class="nexr" xmlns="http://www.w3.org/2000/svg" width="57" height="57" viewBox="0 0 57 57" fill="none">
            <circle cx="28.7187" cy="28.1738" r="28" transform="rotate(-90 28.7187 28.1738)" fill="black"/>
            <path d="M40.9919 28.8809C41.3824 28.4904 41.3824 27.8572 40.9919 27.4667L34.6279 21.1028C34.2374 20.7122 33.6042 20.7122 33.2137 21.1028C32.8232 21.4933 32.8232 22.1265 33.2137 22.517L38.8706 28.1738L33.2137 33.8307C32.8232 34.2212 32.8232 34.8544 33.2137 35.2449C33.6042 35.6354 34.2374 35.6354 34.6279 35.2449L40.9919 28.8809ZM17.8848 29.1738L40.2848 29.1738L40.2848 27.1738L17.8848 27.1738L17.8848 29.1738Z" fill="white"/>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  image: String,
});
</script>

<style scoped>
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
  width: 352px;
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
