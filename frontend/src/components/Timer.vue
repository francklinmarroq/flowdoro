<template>
    <div>
        <div>
            <p class="text-7xl font-extrabold text-center text-text-primary">
                {{ timeLeftInMinutes }}
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useTimerStore } from "@/stores/timer";
const timer = useTimerStore();
const timeLeftInMinutes = computed(() => timer.timeLeftInMinutes);
</script>
