<template>
  <div class="container-fluide">
    <div class="flex items-center gap-[24px] pb-[126px] asd">
      <div class="line"></div>
      <ui-elements-title title="Моя специализация:" />
    </div>
    <div class="tabs-container">
      <div class="tabss" ref="tabsElement">
        <div class="conta flex flex-col gap-[42px] items-center justify-center">
          <button
              class="tab-button"
              :class="{ active: activeIndex === 0 }"
              @click="selectTab(0)"
          >
            <nuxt-img loading="lazy" src="/image/services/tabs/tab1.png" class="w-[80px] h-[80px]" />
          </button>
          <h3 class="text-center text-[22px] text-[#8F8F8F]">пластика<br>бедер</h3>
        </div>
        <div class="conta flex flex-col gap-[42px] items-center justify-center">
          <button
              class="tab-button"
              :class="{ active: activeIndex === 1 }"
              @click="selectTab(1)"
          >
            <nuxt-img loading="lazy" src="/image/services/tabs/tab2.png" class="w-[80px] h-[80px]" />
          </button>
          <h3 class="text-center text-[22px] text-[#8F8F8F]">Подтяжка<br>груди</h3>
        </div>
        <div class="conta flex flex-col gap-[42px] items-center justify-center">
          <button
              class="tab-button"
              :class="{ active: activeIndex === 2 }"
              @click="selectTab(2)"
          >
            <nuxt-img loading="lazy" src="/image/services/tabs/tab3.png" class="w-[80px] h-[80px]" />
          </button>
          <h3 class="text-center text-[22px] text-[#8F8F8F]">Увеличение<br>груди</h3>
        </div>
        <div class="conta flex flex-col gap-[42px] items-center justify-center">
          <button
              class="tab-button"
              :class="{ active: activeIndex === 3 }"
              @click="selectTab(3)"
          >
            <nuxt-img loading="lazy" src="/image/services/tabs/tab4.png" class="w-[80px] h-[80px]" />
          </button>
          <h3 class="text-center text-[22px] text-[#8F8F8F]">Уменьшение<br>груди</h3>
        </div>
        <div class="conta flex flex-col gap-[42px] items-center justify-center">
          <button
              class="tab-button"
              :class="{ active: activeIndex === 4 }"
              @click="selectTab(4)"
          >
            <nuxt-img loading="lazy" src="/image/services/tabs/tab5.png" class="w-[80px] h-[80px]" />
          </button>
          <h3 class="text-center text-[22px] text-[#8F8F8F]">Пластика живота<br>(Абдоминопластика)</h3>
        </div>
      </div>
      <div class="tab-content">
        <div v-if="activeIndex === 0" class="image-tab-content">
          <services-tab
              title="пластика бедер"
              tab-title="Пластика бедер, или феморопластика — операция, которая позволяет избавиться от недостатков  и визуальных дефектов внутренней области бедер.  Вы можете подробнее узнать, что такое пластика бедер, кому нужна данная операция, а также почитать про процесс реабилитации, узнать, какие анализы нужны, в статье, по кнопке ниже."
              tab-sub="операция"
              tab-text-sub="Операция проходит под общей анестезией, длится  1,5-3,5 часа в зависимости от сложности и вида пластики. Вся операция проводится под точнейшим  и строжайшим контролем медиков и аппаратуры."
              image="/image/services/tabs/tabsimgSix.png"
          />
        </div>
        <div v-if="activeIndex === 1" class="background-tab-content">
          <services-tab
              title="реконструкция груди"
              tab-title="Реконструкция груди — пластическая операция цель которой восстановить форму груди, потерянную после перенесенной мастэктомии — операции по удалению молочной железы. Основные пациенты реконструкции груди — это те, кто  в прошлом перенёс рак молочной железы.  Вы можете подробнее узнать, что такое реконструкция груди, почитать про процесс реабилитации, по кнопке ниже."
              tab-sub="операция"
              tab-text-sub="Операция проходит под общей анестезией, длится  2-4 часа в зависимости от сложности и вида пластики. Вся операция проводится под точнейшим  и строжайшим контролем медиков и аппаратуры."
              image="/image/services/tabs/tabsimgFive.png"
          />
        </div>
        <div v-if="activeIndex === 2" class="default-tab-content">
          <services-tab
              title="Увеличение груди"
              tab-title="Благодаря такой пластической операции практически каждая женщина может скорректировать размер груди и ее форму, а вместе с этим и обрести уверенность.   Вы можете подробнее узнать, что такое маммопластика, кому нужна данная операция, а также почитать про процесс реабилитации, узнать, какие анализы нужны, в статье по кнопке ниже."
              tab-sub="операция"
              tab-text-sub="Операция проводится под общей внутривенной анестезией. Время операции – 1,5 часа. Вся процедура проводится под точнейшим и строжайшим контролем медиков и аппаратуры. Наложение швов делается таким образом, чтобы шрам остался незаметным и эстетичным."
              image="/image/services/tabs/tabsimgOne.png"
          />
        </div>
        <div v-if="activeIndex === 3" class="default-tab-content">
          <services-tab
              title="уменьшение груди"
              tab-title="Благодаря такой пластической операции практически каждая женщина может скорректировать размер груди и ее форму, а вместе с этим и обрести уверенность.   Вы можете подробнее узнать, что такое редукционная маммопластика, кому нужна данная операция, а также почитать про процесс реабилитации, узнать, какие анализы нужны, в статье по кнопке ниже."
              tab-sub="операция"
              tab-text-sub="Операция проводится под общей внутривенной анестезией. Время операции – 2,5 часа. Вся процедура проводится под точнейшим  и строжайшим контролем медиков и аппаратуры. Наложение швов делается таким образом,  чтобы шрам остался незаметным и эстетичным."
              image="/image/services/tabs/tabsimgThree.png"
          />
        </div>
        <div v-if="activeIndex === 4" class="default-tab-content">
          <services-tab
              title="пластика живота"
              tab-title="Абдоминопластика - это хирургическая операция  по  удалению излишков кожи, подкожной жировой клетчатки, а также коррекция растянутых мышц передней брюшной стенки.   Вы можете подробнее узнать, что такое пластика живота, кому нужна данная операция, а также почитать про процесс реабилитации, узнать, какие анализы нужны, в статье, по кнопке ниже."
              tab-sub="операция"
              tab-text-sub="Операция проходит под общим наркозом, длится  3-4 часа в зависимости от сложности и вида пластики. После операции пациент 1-2 дня проводит в палате  под наблюдением специалистов. Вся операция проводится под точнейшим и строжайшим контролем медиков и аппаратуры."
              image="/image/services/tabs/tabsimgFore.png"
          />
        </div>
        <!-- Добавьте дополнительные вкладки по мере необходимости -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch, nextTick } from 'vue';

const activeIndex = ref(2);
const tabsElement = ref(null);

const selectTab = (index) => {
  if (activeIndex.value !== index) {
    activeIndex.value = index;
    nextTick(() => {
      centerActiveTab();
    });
  }
};

const isPrevDisabled = computed(() => activeIndex.value === 0);
const isNextDisabled = computed(() => activeIndex.value === 5); // Количество вкладок - 1

const prevPage = () => {
  if (activeIndex.value > 0) {
    activeIndex.value--;
    nextTick(() => {
      centerActiveTab();
    });
  }
};

const nextPage = () => {
  if (activeIndex.value < 5) { // Количество вкладок - 1
    activeIndex.value++;
    nextTick(() => {
      centerActiveTab();
    });
  }
};

const centerActiveTab = () => {
  nextTick(() => {
    const tabsEl = tabsElement.value;
    const activeTabEl = tabsEl.querySelector('.tab-button.active');
    if (activeTabEl) {
      const tabsRect = tabsEl.getBoundingClientRect();
      const activeTabRect = activeTabEl.getBoundingClientRect();
      const scrollLeft = tabsEl.scrollLeft;
      const offset = activeTabRect.left - tabsRect.left + scrollLeft;
      const tabCenter = offset + activeTabRect.width / 2;
      const containerCenter = tabsRect.width / 2;
      const centerOffset = tabCenter - containerCenter;

      tabsEl.scrollTo({
        left: centerOffset,
        behavior: 'smooth',
      });
    }
  });
};

onMounted(() => {
  centerActiveTab();
  const tabsEl = tabsElement.value;
  const observer = new ResizeObserver(centerActiveTab);
  observer.observe(tabsEl);

  watch(activeIndex, centerActiveTab);
});
</script>

<style>
.tabs-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
h3{
  font-weight: 400;
  text-transform: uppercase;
}

.tabss {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  row-gap: 60px;
  white-space: nowrap;
  scroll-behavior: smooth;
  width: 100%;
  position: relative;
  background: url('/image/services/line.svg') no-repeat;
  background-position-y: 28%;
  background-size: 100%;
}

@media screen and (max-width: 910px) {
  .tabss{
    background: none;
  }
}

.tab-button {
  padding: 10px;
  cursor: pointer;
  transition: transform 0.3s, font-size 0.3s, color 0.3s;
  background: url('/image/services/tabsBg.svg') no-repeat center;
  background-size: 220%;
  width: 140px;
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.tab-button.active {
  font-weight: bold;
  transform: scale(1.3);
}
h3{
  transition: transform 0.3s, font-size 0.3s, color 0.3s;
}
.tab-button.active + h3{
  color: #ffffff; /* Измените на нужный цвет */
  font-weight: 500;
  transform: scale(1.3);
}
.pagination {
  margin-top: 10px;
}

.tab-content {
  width: 100%;
}

.background-tab-content {
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.default-tab-content {
  /* Добавьте стили по вашему усмотрению для вкладок по умолчанию */
}
</style>
