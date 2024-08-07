<script setup lang="ts">
import VideoCard from "~/components/blog/video/videoCard.vue";
const isModalOpen = ref(false);
const videoUrl = ref('');

const openModal = (url: string) => {
  videoUrl.value = url;
  isModalOpen.value = true;
};
</script>

<template>
  <div class="container">
    <div class="flex justify-between flex-wrap gap-y-[64px] pt-[80px]">
      <video-card
          title="Анализы"
          text="Какие анализы нужно подготовить перед абдоминопластикой?"
          imge="/image/blog/video/prewOne.png"
          src="/image/blog/video/new/breast_lift.mp4"
          big="first"
      />

      <video-card
          title="Подтяжка груди"
          text="Можно ли &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; подтянуть грудь &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; через ареолу?"
          imge="/image/blog/video/prewTwo.png"
          src="/image/blog/video/new/breast_reduction.mp4"
          big="bbis"
      />

      <video-card
          title="Консультации"
          text="Есть ли бесплатные консультации? Есть ли онлайн консультации?"
          imge="/image/blog/video/prewThree.png"
          src="/image/blog/video/new/Abdominoplasty4hernias.mp4"
          big="biss"
      />

      <video-card
          title="заживление шва"
          text="Через какое время заживают швы на теле после абдоминопластики?"
          imge="/image/blog/video/prewFore.png"
          src="/image/blog/video/new/scarring.mp4"
          big="qwecc"
      />

      <video-card
          title="После родов"
          text="Когда можно делать маммопластику после родов? И можно ли?"
          imge="/image/blog/video/prewFive.png"
          src="/image/blog/video/new/typesoflifts.mp4"
          big="bis"
      />

      <video-card
          title="Опасность"
          text="Чем опасна абдоминопластика? Какие могут быть осложнения?"
          imge="/image/blog/video/prewSix.png"
          src="/image/blog/video/new/Anesthesiologistanswer.mp4"
          big="njhld"
      />


    </div>
  </div>
</template>

<style scoped lang="scss">

</style>