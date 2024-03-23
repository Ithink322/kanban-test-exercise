import axios from "axios";
export const useOnHoldTasksStore = defineStore({
  id: "onHoldTasks",
  state: () => ({
    onHoldTasks: [],
  }),
  actions: {
    async addHoldOnTask(newTaskText) {
      const newTask = {
        id: null,
        row: "0",
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
        this.onHoldTasks.push(newTask);
      } catch (error) {
        console.error("Ошибка при добавлении карточки в API:", error);
      }
    },
    async deleteHoldOnTask(taskId) {
      this.onHoldTasks = this.onHoldTasks.filter((task) => task.id !== taskId);
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
