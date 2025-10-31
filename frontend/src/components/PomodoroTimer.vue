<template>
    <div
        class="flex flex-col border-2 mt-4 p-10 rounded-xl"
        :class="
            timer.isBreak
                ? 'bg-completed/10 border-completed/20'
                : 'bg-accent-orange/10 border-primary-red/20'
        "
    >
        <div class="flex mb-4 justify-center">
            <StatusBadge />
        </div>
        <div class="flex mb-4 justify-center">
            <Timer />
        </div>
        <div class="flex mb-4 justify-center">
            <p class="text-dark-gray/80 text-sm">
                Sessions Completed {{ timer.sessionCount }}
            </p>
        </div>
        <div class="flex justify-center items-center gap-4">
            <div
                @click="toggleTimerRunning"
                class="size-12 rounded-full bg-primary-red hover:cursor-pointer"
            ></div>
            <div
                @click="resetTimer"
                class="size-11 rounded-full bg-white hover:cursor-pointer"
            ></div>
        </div>
    </div>
</template>

<script setup>
import StatusBadge from "./StatusBadge.vue";
import Timer from "./Timer.vue";
import { useTimerStore } from "@/stores/timer";
const timer = useTimerStore();
function toggleTimerRunning() {
    timer.toggleIsRunning();
}
function resetTimer() {
    timer.resetTimer();
}
</script>
