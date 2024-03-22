<template>
  <draggable
    :list="inProgressTasks"
    :animation="200"
    ghost-class="ghost-card"
    group="tasks"
    class="container__in-progress-tasks-list"
  >
    <template #item="{ element }">
      <UITaskItem
        :task="element"
        :tasksArray="inProgressTasks"
        :key="element.id"
      ></UITaskItem>
    </template>
  </draggable>
</template>

<script setup>
import draggable from "vuedraggable";
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
