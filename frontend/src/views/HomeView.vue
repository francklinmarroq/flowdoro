<template>
    <div class="flex justify-center">
        <TaskDetails />
        <div
            class="bg-white w-full xl:w-3/5 lg:w-4/5 p-8 mt-6 shadow-md rounded-xl"
        >
            <PomodoroContainer />
        </div>
    </div>
</template>

<script setup lang="ts">
import PomodoroContainer from "@/components/PomodoroContainer.vue";
import TaskDetails from "@/components/TaskDetails.vue";
</script>
