<template>
  <div class="container__in-progress-tasks-list">
    <UITaskItem
      v-for="task in inProgressTasks"
      :task="task"
      :key="task.id"
    ></UITaskItem>
  </div>
</template>

<script setup>
const props = defineProps(["inProgressTasks"]);
</script>

<style lang="scss" scoped>
.container__in-progress-tasks-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.6rem 0rem;
}
</style>
