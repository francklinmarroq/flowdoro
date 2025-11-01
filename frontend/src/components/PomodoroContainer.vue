<template>
    <div class="border-2 border-light-gray rounded-xl p-6 mb-8">
        <h1 class="text-text-primary font-bold text-lg">Pomodoro Timer</h1>
        <PomodoroTimer />
    </div>
    <div class="border-2 border-light-gray rounded-xl p-6">
        <h1 class="text-text-primary font-bold text-lg">Kanban Board</h1>
        <KanbanBoard />
    </div>
</template>
<script setup>
import KanbanBoard from "./KanbanBoard.vue";
import PomodoroTimer from "./PomodoroTimer.vue";
</script>
