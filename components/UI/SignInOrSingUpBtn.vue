<template>
  <NuxtLink to="/LoginOrRegistrationPage">
    <button class="sign-in-or-sign-up-btn">Войти / Зарегистрироваться</button>
  </NuxtLink>
</template>

<style lang="scss" scoped>
@import "@/assets/App.scss";
.sign-in-or-sign-up-btn {
  @include btn;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  color: #fff;
}
</style>
