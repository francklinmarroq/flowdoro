<template>
    <div
        draggable="true"
        @dragstart="handleDragStart"
        @dragend="handleDragEnd"
        class="min-h-36 p-4 bg-white rounded-lg border-2 shadow-sm flex flex-col cursor-grab mb-2"
        :class="{
            'border-todo/30  shadow-todo/20': task.state === TASK_STATE.TODO,
            'border-in-progress/30 shadow-in-progress/20':
                task.state === TASK_STATE.IN_PROGRESS,
            'border-completed/30 shadow-completed/20':
                task.state === TASK_STATE.DONE,
            'opacity-50': isDragging,
        }"
    >
        <div class="grow">
            <p
                class="font-semibold overflow-hidden whitespace-nowrap text-ellipsis"
            >
                {{ task.title }}
            </p>

            <p class="text-sm text-gray-500 line-clamp-3">
                {{ task.description }}
            </p>
        </div>
        <div class="flex items-end justify-end mt-2">
            <button
                class="text-sm text-gray-500 hover:text-gray-700"
                @click="$emit('delete')"
            >
                Delete
            </button>
            <button
                class="text-sm text-gray-500 hover:text-gray-700 ml-2"
                @click="$emit('edit')"
            >
                Edit
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Task } from "@/stores/tasks";
import { taskState } from "@/stores/tasks";
import { ref } from "vue";

const TASK_STATE = taskState;
const isDragging = ref(false);

const props = defineProps<{
    task: Task;
}>();

function handleDragStart(event: DragEvent) {
    isDragging.value = true;
    if (event.dataTransfer) {
        event.dataTransfer.effectAllowed = "move";
        event.dataTransfer.setData("taskId", props.task.id.toString());
    }
}

function handleDragEnd() {
    isDragging.value = false;
}
</script>
