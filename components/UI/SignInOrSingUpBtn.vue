<template>
  <NuxtLink to="/LoginOrRegistrationPage" class="custom-link">
    <button class="sign-in-or-sign-up-btn">
      <div v-if="username" class="text-and-btn-flex">
        <span @click.prevent>My account: {{ username }}</span>
        <button class="log-out-btn">Выйти</button>
      </div>
      <span v-else>Войти / Зарегистрироваться</span>
    </button>
  </NuxtLink>
</template>

<script setup>
let username = ref("");
onMounted(() => {
  if (localStorage.getItem("username")) {
    username = localStorage.getItem("username");
  }
});
</script>

<style lang="scss" scoped>
@import "@/assets/App.scss";
.sign-in-or-sign-up-btn {
  @include btn;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  color: #fff;
}
.custom-link {
  text-decoration: none;
  color: inherit;
}
.text-and-btn-flex {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.log-out-btn {
  @include btn;
  background: #fff;
  padding: 0.4rem 1rem;
  border-radius: 0.25rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
}
</style>
