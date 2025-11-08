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
    tasks: [] as Task[],
  }),
  actions: {
    addTask(task: Task) {
      this.tasks.push(task);
    },
    removeTask(id: number) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
    updateTask(id: number, updatedTask: Partial<Task>) {
      const task = this.tasks.find((task) => task.id === id);
      if (task) {
        Object.assign(task, updatedTask);
      }
    },
    updateTaskState(id: number, newState: taskState) {
      const task = this.tasks.find((task) => task.id === id);
      if (task) {
        task.state = newState;
      }
    },
    getNextId(): number {
      return this.tasks.length > 0
        ? Math.max(...this.tasks.map((t) => t.id)) + 1
        : 1;
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
