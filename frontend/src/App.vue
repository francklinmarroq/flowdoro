<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import NavButton from "@/components/buttons/NavButton.vue";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div class="wrapper py-4 px-12 bg-background">
    <div class="flex justify-center">
      <Navbar />
    </div>
    <RouterView />
  </div>
</template>

<style></style>
