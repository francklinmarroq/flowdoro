<template>
    <RouterLink
        :to="to"
        active-class="bg-primary-red text-white shadow-lg hover:bg-primary-red"
        class="h-fit p-1.5 px-9 rounded-lg hover:bg-light-gray transition-colors text-gray-600 font-semibold"
    >
        <slot />
    </RouterLink>
</template>

<script setup>
defineProps({
    to: {
        type: String,
        required: true,
    },
});
</script>

<style scoped></style>
