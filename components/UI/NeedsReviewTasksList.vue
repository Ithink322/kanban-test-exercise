<template>
  <div class="container__needs-review-tasks-list">
    <UITaskItem
      v-for="task in needsReviewTasks"
      :task="task"
      :key="task.id"
    ></UITaskItem>
  </div>
</template>

<script setup>
const props = defineProps(["needsReviewTasks"]);
</script>

<style lang="scss" scoped>
.container__needs-review-tasks-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.6rem 0rem;
}
</style>
