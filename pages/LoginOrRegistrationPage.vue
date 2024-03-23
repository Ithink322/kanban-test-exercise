<template>
  <nav class="authorization" v-if="isUserRegistered">
    <div class="container">
      <form @submit.prevent class="container__form">
        <h1 class="container__form-title">Авторизация</h1>
        <input
          v-model="username"
          placeholder="Имя"
          type="text"
          class="container__form-input"
        />
        <input
          v-model="password"
          placeholder="Пароль"
          type="text"
          class="container__form-input"
        />
        <div class="container__form-btns-flex">
          <button @click.prevent="signIn" class="container__form-btn">
            Войти
          </button>
          <button @click.prevent="updateToSignUp" class="container__form-btn">
            Зарегистрироваться
          </button>
        </div>
      </form>
    </div>
  </nav>
  <nav class="registration" v-else>
    <div class="container">
      <form class="container__form">
        <h1 class="container__form-title">Регистрация</h1>
        <input
          v-model="username"
          placeholder="Имя"
          type="text"
          class="container__form-input"
        />
        <input
          v-model="email"
          placeholder="Почта"
          type="text"
          class="container__form-input"
        />
        <input
          v-model="password"
          placeholder="Пароль"
          type="text"
          class="container__form-input"
        />
        <div class="container__form-btns-flex">
          <button @click.prevent="signUp" class="container__form-btn">
            Зарегистрироваться
          </button>
          <button @click.prevent="updateToSignIn" class="container__form-btn">
            Войти
          </button>
        </div>
      </form>
    </div>
  </nav>
</template>

<script setup>
import axios from "axios";
const { notify } = useNotification();
const isUserRegistered = ref(false);

onMounted(() => {
  if (localStorage.getItem("username")) {
    isUserRegistered.value = true;
  }
});

const updateToSignUp = () => {
  isUserRegistered.value = false;
};
const updateToSignIn = () => {
  isUserRegistered.value = true;
};

const username = ref(""),
  email = ref(""),
  password = ref("");

let token = ref("");
const router = useRouter();
const signIn = () => {
  if (username.value && password.value !== "") {
    axios
      .post(
        "https://trello.backend.tests.nekidaem.ru/api/v1/users/token/",
        {
          username: username.value,
          password: password.value,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log("Вы авторизовались успешно");
        notify({
          type: "success",
          title: "Авторизация",
          text: "Вы авторизовались успешно!",
        });
        localStorage.setItem("username", username.value);
        token = response.data;
        router.push("/");
      })
      .catch((error) => {
        console.error("Ошибка при авторизации пользователя:", error);
        notify({
          type: "error",
          title: "Авторизация",
          text: "Ошибка при авторизации пользователя.",
        });
      });
  }
  if (username.value === "") {
    notify({
      type: "warn",
      title: "Важное сообщение",
      text: "Пожалуйста введите имя.",
    });
  }
  if (password.value === "") {
    notify({
      type: "warn",
      title: "Важное сообщение",
      text: "Пожалуйста введите пароль.",
    });
  } else if (password.value.length < 8 || password.value.length > 20) {
    notify({
      type: "warn",
      title: "Важное сообщение",
      text: "Ваш пароль должен быть не меньше 8 символов и не больше 20 символов.",
    });
  }
};

const signUp = async () => {
  if (username.value && password.value !== "") {
    axios
      .post(
        "https://trello.backend.tests.nekidaem.ru/api/v1/users/create/",
        {
          username: username.value,
          email: email.value,
          password: password.value,
        },
        {
          headers: {
            Authorization: "Bearer",
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log("Вы зарегистрировались успешно:", response.data);
        notify({
          type: "success",
          title: "Регистрация",
          text: "Вы зарегистрировались успешно!",
        });
        isUserRegistered.value = true;
      })
      .catch((error) => {
        console.error("Ошибка при регистрации пользователя:", error);
        notify({
          type: "error",
          title: "Регистрация",
          text: "Ошибка при регистрации пользователя.",
        });
      });
  }
  if (username.value === "") {
    notify({
      type: "warn",
      title: "Важное сообщение",
      text: "Пожалуйста введите имя.",
    });
  }
  if (password.value === "") {
    notify({
      type: "warn",
      title: "Важное сообщение",
      text: "Пожалуйста введите пароль.",
    });
  } else if (password.value.length < 8 || password.value.length > 20) {
    notify({
      type: "warn",
      title: "Важное сообщение",
      text: "Ваш пароль должен быть не меньше 8 символов и не больше 20 символов.",
    });
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/App.scss";
.container {
  background: rgb(54, 64, 68);
  height: 100vh;
  padding: 2rem;
}
.container__form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  margin-top: 5rem;
}
.container__form-title {
  display: block;
  text-align: center;
  margin: 0rem;
  font-family: "Montserrat", sans-serif;
  font-size: 1.75rem;
  color: #fff;
}
.container__form-input {
  border: none;
  border-radius: 0.25rem;
  padding: 0.875rem 1rem;
  font-family: "Montserrat", sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
}
.container__form-input:focus {
  outline: none;
}
.container__form-btns-flex {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}
.container__form-btn {
  @include btn;
  width: 100%;
  background: rgb(107, 189, 91);
  border-radius: 0.5rem;
  padding: 1rem;
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  font-weight: 700;
}
/* 768px = 48em */
@media (min-width: 48em) {
  .container {
    padding: 5rem 10rem;
  }
}
/* 1024px = 64em */
@media (min-width: 64em) {
  .container {
    padding: 5rem 15rem;
  }
  .container__form-title {
    font-size: 2.5rem;
  }
}
/* 1440px = 90em */
@media (min-width: 90em) {
  .container {
    padding: 5rem 25rem;
  }
}
/* 1920px = 120em */
@media (min-width: 120em) {
  .container {
    padding: 5rem 40rem;
  }
}
</style>
