<template>
  <draggable
    :list="approvedTasks"
    :animation="200"
    ghost-class="ghost-card"
    group="tasks"
    class="container__approved-tasks-list"
  >
    <template #item="{ element }">
      <UITaskItem
        :task="element"
        :tasksArray="approvedTasks"
        :key="element.id"
      ></UITaskItem>
    </template>
  </draggable>
</template>

<script setup>
import draggable from "vuedraggable";
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
