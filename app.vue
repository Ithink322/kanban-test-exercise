<template>
  <div id="app">
    <Header></Header>
    <NuxtPage></NuxtPage>
    <NuxtNotifications
      style="
        bottom: 2rem;
        width: 100%;
        padding: 2rem;
        font-family: Montserrat, sans-serif;
      "
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
</style>
