<template>
  <header class="header">
    <UIBurgerBtn @click="showBurgerMenu"></UIBurgerBtn>
    <UIBurgerMenu></UIBurgerMenu>
    <UISignInOrSingUpBtn
      class="header__sign-in-or-sign-up-btn-hide-show"
    ></UISignInOrSingUpBtn>
  </header>
</template>

<script setup>
const showBurgerMenu = () => {
  document.querySelector(".header__burger-menu").style.display = "block";
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: right;
  background: #008000;
  height: 40px;
  padding: 0.2rem 1rem;
}
.header__sign-in-or-sign-up-btn-hide-show {
  display: none;
}
/* 768px = 48em */
@media (min-width: 48em) {
  .header__sign-in-or-sign-up-btn-hide-show {
    display: block;
  }
}
</style>
