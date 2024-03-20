<template>
  <div class="header__burger-menu">
    <UISignInOrSingUpBtn></UISignInOrSingUpBtn>
    <button @click="closeBurgerMenu" class="header__burger-menu-close-btn">
      <img src="@/public/imgs/cross.svg" alt="" />
    </button>
  </div>
</template>

<script setup>
const closeBurgerMenu = () => {
  document.querySelector(".header__burger-menu").style.display = "none";
};
</script>

<style lang="scss" scoped>
@import "@/assets/App.scss";
.header__burger-menu {
  display: none;
  position: absolute;
  width: 288px;
  height: 100vh;
  background: #d67a7a;
  left: 0rem;
  top: 0rem;
  padding: 1.1rem;
  box-sizing: border-box;
}
.header__burger-menu-close-btn {
  @include btn;
  position: absolute;
  right: 1.3rem;
  top: 1.3rem;
}
</style>
