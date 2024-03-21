<template>
  <div class="container__on-hold-tasks-list">
    <UITaskItem
      v-for="task in onHoldtasks"
      :task="task"
      :key="task.id"
    ></UITaskItem>
  </div>
</template>

<script setup>
const props = defineProps(["onHoldtasks"]);
</script>

<style lang="scss" scoped>
.container__on-hold-tasks-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.6rem 0rem;
}
</style>
