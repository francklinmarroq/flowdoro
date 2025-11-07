import { defineStore } from "pinia";
export enum taskState {
  TODO,
  IN_PROGRESS,
  DONE,
}

export interface Task {
  id: number;
  title: string;
  description: string;
  state: taskState;
}

export const useTasksStore = defineStore("tasks", {
  state: () => ({
    tasks: [
      {
        id: 1,
        title: "Title for the task 1",
        description: "Description for Task 1",
        state: taskState.TODO,
      },
      {
        id: 2,
        title: "This is the title for task number 2",
        description: "Description for Task 2",
        state: taskState.IN_PROGRESS,
      },
      {
        id: 3,
        title:
          "This is the title for task number 3, im making them lonker to test the functionality of the application",
        description:
          "Description for Task 3, it provides a detailed description of the task. It helps users understand the purpose and requirements of the task. im making them lonker to test the functionality of the application",
        state: taskState.DONE,
      },
    ],
  }),
  actions: {
    addTask(task: Task) {
      this.tasks.push(task);
    },
    removeTask(id: number) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
    updateTaskState(id: number, newState: taskState) {
      const task = this.tasks.find((task) => task.id === id);
      if (task) {
        task.state = newState;
      }
    },
  },
  getters: {
    todo(): Task[] {
      return this.tasks.filter((task) => task.state === taskState.TODO);
    },
    inProgress(): Task[] {
      return this.tasks.filter((task) => task.state === taskState.IN_PROGRESS);
    },
    done(): Task[] {
      return this.tasks.filter((task) => task.state === taskState.DONE);
    },
  },
});
