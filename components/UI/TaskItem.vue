<template>
  <div class="container__on-hold-task-item">
    <div class="container__on-hold-task-item-id-and-id-text">
      <span class="container__on-hold-task-item-id"
        >id:
        <span class="container__on-hold-task-item-id-text">{{
          task.id
        }}</span></span
      >
      <span class="container__on-hold-task-item-text">{{ task.text }}</span>
    </div>
    <button class="container__on-hold-task-item-delete-btn">
      <img src="@/public/imgs/cross.svg" alt="" />
    </button>
  </div>
</template>

<script setup>
const props = defineProps(["task"]);
</script>

<style lang="scss" scoped>
@import "@/assets/App.scss";
.container__on-hold-task-item {
  position: relative;
  background: #141718;
  padding: 1.1rem 0.6rem;
}
.container__on-hold-task-item-id-and-id-text {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.container__on-hold-task-item-id {
  font-family: "Montserrat", sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  color: #fff;
}
.container__on-hold-task-item-id-text {
  font-family: "Montserrat", sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  color: rgb(153, 153, 153);
}
.container__on-hold-task-item-text {
  font-family: "Montserrat", sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  color: rgb(153, 153, 153);
}
.container__on-hold-task-item-delete-btn {
  @include btn;
  position: absolute;
  right: 0.6rem;
  top: 1.1rem;
}
</style>
