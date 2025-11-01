<template>
    <div class="flex gap-4 mt-4">
        <KanbanColumn type="to-do" />
        <KanbanColumn type="in-progress" />
        <KanbanColumn type="completed" />
    </div>
</template>
<script setup>
import KanbanColumn from "./KanbanColumn.vue";
</script>
