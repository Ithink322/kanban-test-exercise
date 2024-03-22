<template>
  <NuxtLink to="/LoginOrRegistrationPage" class="custom-link">
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
.custom-link {
  text-decoration: none; /* Убираем подчеркивание ссылки */
  color: inherit; /* Наследуем цвет текста */
}
</style>
