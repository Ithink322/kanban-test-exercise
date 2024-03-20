<template>
  <button class="header__burger-btn">
    <img src="@/public/imgs/burger-btn.svg" alt="" />
  </button>
</template>

<style lang="scss" scoped>
@import "@/assets/App.scss";
.header__burger-btn {
  @include btn;
}
/* 768px = 48em */
@media (min-width: 48em) {
  .header__burger-btn {
    display: none;
  }
}
</style>
