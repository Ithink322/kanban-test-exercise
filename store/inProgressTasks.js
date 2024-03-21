export const useInProgressTasksStore = defineStore({
  id: "inProgressTasks",
  state: () => ({
    inProgressTasks: [],
  }),
  actions: {
    addInProgressTask(newTaskText) {
      const newTask = {
        id: Date.now(),
        text: newTaskText,
      };
      this.inProgressTasks.push(newTask);
    },
  },
});
