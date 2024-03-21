export const useNeedsReviewTasksStore = defineStore({
  id: "needsReviewTasks",
  state: () => ({
    needsReviewTasks: [],
  }),
  actions: {
    addNeedsReviewTask(newTaskText) {
      const newTask = {
        id: Date.now(),
        text: newTaskText,
      };
      this.needsReviewTasks.push(newTask);
    },
  },
});
