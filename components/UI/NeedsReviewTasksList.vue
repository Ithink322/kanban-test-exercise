<template>
  <draggable
    :list="needsReviewTasks"
    :animation="200"
    ghost-class="ghost-card"
    group="tasks"
    class="container__needs-review-tasks-list"
  >
    <template #item="{ element }">
      <UITaskItem
        :task="element"
        :tasksArray="needsReviewTasks"
        :key="element.id"
      ></UITaskItem>
    </template>
  </draggable>
</template>

<script setup>
import draggable from "vuedraggable";
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
