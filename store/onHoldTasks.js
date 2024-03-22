export const useOnHoldTasksStore = defineStore({
  id: "onHoldTasks",
  state: () => ({
    onHoldTasks: [],
  }),
  actions: {
    addHoldOnTask(newTaskText) {
      const newTask = {
        id: Date.now(),
        text: newTaskText,
      };
      this.onHoldTasks.push(newTask);
    },
    deleteHoldOnTask(taskId) {
      this.onHoldTasks = this.onHoldTasks.filter((task) => task.id !== taskId);
    },
  },
  persist: true,
});
