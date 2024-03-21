<template>
  <div class="header__burger-menu-shadow">
    <div class="header__burger-menu">
      <UISignInOrSingUpBtn></UISignInOrSingUpBtn>
      <button @click="closeBurgerMenu" class="header__burger-menu-close-btn">
        <img src="@/public/imgs/cross.svg" alt="" />
      </button>
    </div>
  </div>
</template>

<script setup>
const closeBurgerMenu = () => {
  document.querySelector(".header__burger-menu-shadow").style.display = "none";
};
</script>

<style lang="scss" scoped>
@import "@/assets/App.scss";
.header__burger-menu-shadow {
  display: none;
  position: absolute;
  background: rgba(0, 0, 0, 0.54);
  width: 100%;
  height: 100vh;
  top: 0rem;
  right: 0rem;
  z-index: 2;
}
.header__burger-menu {
  position: absolute;
  width: 288px;
  height: 100vh;
  background: rgb(226, 122, 122);
  left: 0rem;
  top: 0rem;
  padding: 1.1rem;
  box-sizing: border-box;
  z-index: 2;
}
.header__burger-menu-close-btn {
  @include btn;
  position: absolute;
  right: 1.3rem;
  top: 1.3rem;
}
</style>
