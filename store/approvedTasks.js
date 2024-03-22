export const useApprovedTasksStore = defineStore({
  id: "approvedTasks",
  state: () => ({
    approvedTasks: [],
  }),
  actions: {
    addApprovedTask(newTaskText) {
      const newTask = {
        id: Date.now(),
        text: newTaskText,
      };
      this.approvedTasks.push(newTask);
    },
    deleteApprovedTask(taskId) {
      this.approvedtasks = this.approvedtasks.filter(
        (task) => task.id !== taskId
      );
    },
  },
  persist: true,
});
