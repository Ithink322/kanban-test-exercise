<template>
  <div id="app">
    <Header></Header>
    <NuxtPage></NuxtPage>
    <NuxtNotifications
      class="notification"
      position="bottom right"
      :speed="500"
    />
  </div>
</template>

<style lang="scss">
html {
  box-sizing: border-box;
}
*,
*::after,
*::before {
  box-sizing: inherit;
  /* outline: solid 1px red; */
}
body {
  min-width: 20em;
  background-color: #fff;
  margin: 0rem auto;
}
.notification {
  bottom: 2rem;
  width: 100% !important;
  padding: 2rem;
  font-family: Montserrat, sans-serif;
}
/* 768px = 48em */
@media (min-width: 48em) {
  .notification {
    width: 400px !important;
  }
}
</style>
