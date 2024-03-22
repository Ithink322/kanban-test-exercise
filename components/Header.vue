<template>
  <header v-if="showHeader" class="header">
    <UIBurgerBtn @click="showBurgerMenu"></UIBurgerBtn>
    <UIBurgerMenu></UIBurgerMenu>
    <UISignInOrSingUpBtn
      class="header__sign-in-or-sign-up-btn-hide-show"
    ></UISignInOrSingUpBtn>
  </header>
</template>

<script setup>
const showBurgerMenu = () => {
  document.querySelector(".header__burger-menu-shadow").style.display = "block";
};
const route = useRouter();
const showHeader = ref(true);

onMounted(() => {
  updateHeaderState();
});
watch(
  computed(() => route.currentRoute.value.name),
  () => {
    updateHeaderState();
  }
);
const updateHeaderState = () => {
  showHeader.value =
    route.currentRoute.value.name !== "LoginOrRegistrationPage";
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: right;
  align-items: center;
  background: rgb(107, 189, 91);
  height: 40px;
  padding: 0.2rem 1rem;
}
.header__sign-in-or-sign-up-btn-hide-show {
  display: none;
}
/* 768px = 48em */
@media (min-width: 48em) {
  .header {
    padding: 0rem 2.5rem;
  }
  .header__sign-in-or-sign-up-btn-hide-show {
    display: block;
  }
}
/* 1440px = 90em */
@media (min-width: 90em) {
  .header {
    padding: 0rem 10rem;
  }
}
/* 1920px = 120em */
@media (min-width: 120em) {
  .header {
    padding: 0rem 15.938rem;
  }
}
</style>
