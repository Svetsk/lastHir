<script setup lang="ts">

</script>

<template>
  <div class="container pt-[200px]">
    <div>
      <div>
        <div class="flex items-center gap-[24px] pb-[44px]">
          <div class="line"></div>
          <ui-elements-title title="Образование" />
        </div>
        <div class="flex justify-between flex-wrap lg:flex-nowrap gap-[76px]">
          <div class="flex  flex-wrap gap-[70px]">
            <div class="flex flex-col gap-[16px]">
              <div class="flex flex-col gap-[4px]">
                <h3>Диплом</h3>
                <p class="year">2006-2010</p>
              </div>
              <p class="max-w-[456px] year__text">Кропоткинский медицинский колледж. Лечебный факультет, специальность «Лечебное дело».</p>
            </div>
            <div class="flex flex-col gap-[16px]">
              <div class="flex flex-col gap-[4px]">
                <h3>Диплом</h3>
                <p class="year">2016-2018</p>
              </div>
              <p class="max-w-[456px] year__text">Кубанский государственный медицинский университет,  г. Краснодар, ординатура по онкологии  с курсом торакальной хирургии.</p>
            </div>
            <div class="flex flex-col gap-[16px]">
              <div class="flex flex-col gap-[4px]">
                <h3>Диплом</h3>
                <p class="year">2006-2010</p>
              </div>
              <p class="max-w-[456px] year__text">Кропоткинский медицинский колледж. Лечебный факультет, специальность «Лечебное дело».</p>
            </div>
            <div class="flex flex-col gap-[16px]">
              <div class="flex flex-col gap-[4px]">
                <h3>Диплом</h3>
                <p class="year">2006-2010</p>
              </div>
              <p class="max-w-[456px] year__text">Кропоткинский медицинский колледж. Лечебный факультет, специальность «Лечебное дело».</p>
            </div>
          </div>
          <div class="bg-[#3A3A3A] immf">
            <div class="px-[40px] py-[20px] flex flex-col items-center">
              <div class="flex gap-[14px] items-center pr-[40px]">
                <p class="text-[70px] font-[600]">30+</p>
                <p>стажировок, конгрессов,<br>конференций, симпозиумов</p>
              </div>
              <div>
                <nuxt-img class="w-[1002px]" src="/image/about/educ.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.immf{
  border-radius: 40px;
  border: 1px solid #fff;
}
h3{
  font-size: 25px;
  font-weight: 500;
}
.year{
  font-size: 15px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.70);
}
.year__text{
  font-size: 20px;
  font-weight: 500;
}
</style>