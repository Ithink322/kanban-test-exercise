<template>
  <div class="container__approved-tasks-list">
    <UITaskItem
      v-for="task in approvedTasks"
      :task="task"
      :tasksArray="approvedTasks"
      :key="task.id"
    ></UITaskItem>
  </div>
</template>

<script setup>
const props = defineProps(["approvedTasks"]);
</script>

<style lang="scss" scoped>
.container__approved-tasks-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.6rem 0rem;
}
</style>
