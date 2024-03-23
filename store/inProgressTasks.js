import axios from "axios";
export const useInProgressTasksStore = defineStore({
  id: "inProgressTasks",
  state: () => ({
    inProgressTasks: [],
  }),
  actions: {
    async addInProgressTask(newTaskText) {
      const newTask = {
        id: null,
        row: "1",
        text: newTaskText,
      };

      const token = localStorage.getItem("token");

      try {
        const response = await axios.post(
          "https://trello.backend.tests.nekidaem.ru/api/v1/cards/",
          {
            row: newTask.row,
            text: newTask.text,
          },
          {
            headers: {
              Authorization: `JWT ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        console.log("Карточка успешно добавлена в API:", response.data);
        newTask.id = response.data.id;
        this.inProgressTasks.push(newTask);
      } catch (error) {
        console.error("Ошибка при добавлении карточки в API:", error);
      }
    },
    async deleteInProgressTask(taskId) {
      this.inProgressTasks = this.inProgressTasks.filter(
        (task) => task.id !== taskId
      );
      const token = localStorage.getItem("token");
      try {
        const response = await axios.delete(
          `https://trello.backend.tests.nekidaem.ru/api/v1/cards/${taskId}/`,
          {
            headers: {
              Authorization: `JWT ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
      } catch (error) {
        console.error("Ошибка при удалении карточки из API:", error);
      }
    },
  },
  persist: true,
});
