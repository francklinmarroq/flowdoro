<script setup>
import NavButton from '@/components/buttons/NavButton.vue'
</script>

<template>
  <nav class="flex justify-around w-3/5 h-14 px-16 items-center shadow-xs rounded-xl bg-white">
    <div class="flex grow">
      <p class="momo-trust-display-regular text-2xl font-bold antialiased text-primary-red">
        flowdoro
      </p>
    </div>
    <div class="flex gap-3">
      <NavButton to="/">Home</NavButton>
      <!-- <NavButton to="/about">About</NavButton> -->
    </div>
  </nav>
</template>
