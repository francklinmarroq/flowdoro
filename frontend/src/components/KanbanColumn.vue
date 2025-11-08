<template>
    <div
        class="h-[760px] flex flex-col border-2 w-1/3 min-w-1/3 rounded-xl"
        :class="{
            'bg-todo/5 border-todo/30': state === taskState.TODO,
            'bg-in-progress/5 border-in-progress/30':
                state === taskState.IN_PROGRESS,
            'bg-completed/5 border-completed/30': state === taskState.DONE,
        }"
    >
        <div class="flex justify-between items-center pl-4 py-4 pr-4">
            <h3
                class="font-semibold uppercase"
                :class="{
                    'text-todo': state === taskState.TODO,
                    'text-in-progress': state === taskState.IN_PROGRESS,
                    'text-completed': state === taskState.DONE,
                }"
            >
                {{ title }}
            </h3>
            <button
                @click="openCreateModal"
                class="text-2xl font-bold text-gray-500 hover:text-gray-700 transition-colors"
                title="Create new task"
            >
                +
            </button>
        </div>

        <div
            @drop="handleDrop"
            @dragover="handleDragOver"
            @dragenter="handleDragEnter"
            @dragleave="handleDragLeave"
            class="overflow-y-auto w-full h-full px-4 scrollbar-thin"
            :class="{ 'bg-gray-100': isDragOver }"
        >
            <TodoCard
                v-for="task in tasks"
                :key="task.id"
                :task="task"
                @edit="openEditModal(task)"
                @delete="handleDelete(task.id)"
            />
        </div>

        <TaskDetails
            :is-open="isModalOpen"
            :task="selectedTask"
            @close="closeModal"
        />
    </div>
</template>

<script setup lang="ts">
import TodoCard from "./TodoCard.vue";
import TaskDetails from "./TaskDetails.vue";
import type { Task } from "@/stores/tasks";
import { taskState, useTasksStore } from "@/stores/tasks";
import { ref } from "vue";

const tasksStore = useTasksStore();
const isDragOver = ref(false);
const isModalOpen = ref(false);
const selectedTask = ref<Task | null>(null);

const props = defineProps<{
    state: taskState;
    title: string;
    tasks: Task[];
}>();

function handleDragOver(event: DragEvent) {
    event.preventDefault();
    if (event.dataTransfer) {
        event.dataTransfer.dropEffect = "move";
    }
}

function handleDragEnter() {
    isDragOver.value = true;
}

function handleDragLeave(event: DragEvent) {
    const target = event.currentTarget as HTMLElement;
    const relatedTarget = event.relatedTarget as HTMLElement;

    if (!target.contains(relatedTarget)) {
        isDragOver.value = false;
    }
}

function handleDrop(event: DragEvent) {
    event.preventDefault();
    isDragOver.value = false;

    if (event.dataTransfer) {
        const taskId = parseInt(event.dataTransfer.getData("taskId"));
        tasksStore.updateTaskState(taskId, props.state);
    }
}

function openCreateModal() {
    selectedTask.value = null;
    isModalOpen.value = true;
}

function openEditModal(task: Task) {
    selectedTask.value = task;
    isModalOpen.value = true;
}

function closeModal() {
    isModalOpen.value = false;
    selectedTask.value = null;
}

function handleDelete(taskId: number) {
    tasksStore.removeTask(taskId);
}
</script>
