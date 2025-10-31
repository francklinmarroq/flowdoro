<template>
    <div class="bg-white rounded-full shadow-xs">
        <div class="flex px-6 py-1.5 content-center items-center">
            <span
                v-if="!timer.isBreak"
                class="mr-2 size-2 rounded-full bg-primary-red animate-pulse"
            ></span>
            <span
                v-if="timer.isBreak"
                class="mr-2 size-2 rounded-full bg-completed animate-ping"
            ></span>
            <p class="text-text-primary font-semibold">{{ timeType }}</p>
        </div>
    </div>
</template>
<script setup>
import { computed } from "vue";
import { useTimerStore } from "@/stores/timer";
const timer = useTimerStore();
const timeType = computed(() => (timer.isBreak ? "Break Time" : "Focus Time"));
</script>
