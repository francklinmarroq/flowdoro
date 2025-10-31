import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useTimerStore = defineStore("timer", () => {
  const breakTime = 5 * 60;
  const focusTime = 25 * 60;
  const timeLeft = ref(focusTime);
  const isRunning = ref(false);
  const isBreak = ref(false);
  const sessionCount = ref(0);
  let timerInterval: number | null = null;

  const timeLeftInMinutes = computed(() => {
    const minutes = Math.floor(timeLeft.value / 60);
    const seconds = timeLeft.value % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  });

  function startTimer() {
    isRunning.value = true;
    if (isRunning.value && timeLeft.value > 0) {
      timerInterval = setInterval(() => {
        if (timeLeft.value <= 0) {
          stopTimer(timerInterval);
          timeLeft.value = breakTime;
          startBreak();
          return;
        }
        timeLeft.value -= 1;
      }, 1000);
    }
  }

  function startBreak() {
    isBreak.value = true;
    isRunning.value = true;
    sessionCount.value++;
    if (isRunning.value && timeLeft.value > 0) {
      timerInterval = setInterval(() => {
        if (timeLeft.value <= 0) {
          stopTimer(timerInterval);
          isBreak.value = false;
          timeLeft.value = focusTime;
          startTimer();
          return;
        }
        timeLeft.value -= 1;
      }, 1000);
    }
  }

  function stopTimer(timerInterval: number | null) {
    if (timerInterval !== null) {
      clearInterval(timerInterval);
      timerInterval = null;
      isRunning.value = false;
    }
  }

  function toggleIsRunning() {
    isRunning.value = !isRunning.value;
    if (isRunning.value) {
      startTimer();
    } else {
      stopTimer(timerInterval);
    }
  }

  function resetTimer() {
    stopTimer(timerInterval);
    timeLeft.value = 25 * 60;
    isRunning.value = false;
    isBreak.value = false;
    sessionCount.value = 0;
  }

  return {
    timeLeftInMinutes,
    startTimer,
    stopTimer,
    isRunning,
    isBreak,
    toggleIsRunning,
    resetTimer,
    sessionCount,
  };
});
