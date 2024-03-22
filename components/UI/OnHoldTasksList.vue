<template>
  <draggable
    :list="onHoldTasks"
    :animation="200"
    ghost-class="ghost-card"
    group="tasks"
    class="container__on-hold-tasks-list"
  >
    <template #item="{ element }">
      <UITaskItem
        :task="element"
        :tasksArray="onHoldTasks"
        :key="element.id"
      ></UITaskItem>
    </template>
  </draggable>
</template>

<script setup>
import draggable from "vuedraggable";
const props = defineProps(["onHoldTasks"]);
</script>

<style lang="scss" scoped>
.container__on-hold-tasks-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.6rem 0rem;
}
</style>
