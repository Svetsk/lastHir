<script setup lang="ts">

</script>

<template>
  <div>
    <div class="container">
      <blog-menu />
      <div class="pt-[170px] flex justify-between gap-y-[48px] flex-wrap asda">
        <blog-textss title="Увеличение груди" text="Что такое маммопластика? Кому нужна данная операция? Процесс реабилитации." />
        <blog-textss title="Увеличение груди" text="Что такое маммопластика? Кому нужна данная операция? Процесс реабилитации." />
        <blog-textss title="пластика живота" text="Что такое абдоминопластика?Кому нужна данная операция? Процесс реабилитации." />
        <blog-textss title="Пластика плеч" text="Что такое пластика плеч? Кому нужна операция? Процесс реабилитации." />
        <blog-textss title="Пластика бедер" text="Что такое пластика бедер? Кому нужна операция? Процесс реабилитации." />
        <blog-textss title="Коррекция малых половых губ" text="Что такое коррекция малых половых губ? Кому нужна операция? Процесс реабилитации." />
      </div>
    </div>
    <ui-footer-form class="pt-[176px]" />
    <ui-footer-contact-footer class="pt-[241px]" />
  </div>
</template>

<style scoped lang="scss">

.router-link-active{
  font-weight: 700;
  text-decoration-line: underline;
}
@media screen and (max-width: 768px) {
  .asda{
    justify-content: center;
  }
}
</style>