<template>
    <div class="flex gap-4 mt-4">
        <KanbanColumn
            :state="taskState.TODO"
            title="To Do"
            :tasks="tasks.todo"
        />
        <KanbanColumn
            :state="taskState.IN_PROGRESS"
            title="In Progress"
            :tasks="tasks.inProgress"
        />
        <KanbanColumn
            :state="taskState.DONE"
            title="Done"
            :tasks="tasks.done"
        />
    </div>
</template>
<script setup lang="ts">
import { useTasksStore, taskState } from "@/stores/tasks";
const tasks = useTasksStore();
import KanbanColumn from "./KanbanColumn.vue";
</script>
