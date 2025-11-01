<template>
    <div
        class="h-[760px] flex flex-col border-2 w-1/3 rounded-xl p-4"
        :class="{
            'bg-todo/5 border-todo/50': type === 'to-do',
            'bg-in-progress/5 border-in-progress/50': type === 'in-progress',
            'bg-completed/5 border-completed/50': type === 'completed',
        }"
    >
        <div class="mb-2">
            <h3
                class="font-semibold uppercase"
                :class="{
                    'text-todo': type === 'to-do',
                    'text-in-progress': type === 'in-progress',
                    'text-completed': type === 'completed',
                }"
            >
                {{
                    type === "to-do"
                        ? "To Do"
                        : type === "in-progress"
                          ? "In Progress"
                          : "Done"
                }}
            </h3>
        </div>

        <div class="overflow-scroll">
            <p>card</p>
            <p>card</p>
            <p>card</p>
            <p>card</p>
            <p>card</p>
            <p>card</p>
            <p>card</p>
            <p>card</p>
            <p>card</p>
            <p>card</p>
            <p>card</p>
            <p>card</p>
            <p>card</p>
            <p>card</p>
            <p>card</p>
            <p>card</p>
            <p>card</p>
            <p>card</p>
            <p>card</p>
            <p>card</p>
            <p>card</p>
            <p>card</p>
            <p>card</p>
            <p>card</p>
            <p>card</p>
            <p>card</p>
            <p>card</p>
            <p>card</p>
            <p>card</p>
            <p>card</p>
            <p>card</p>
            <p>card</p>
            <p>card</p>
            <p>card</p>
            <p>card</p>
            <p>card</p>
            <p>card</p>
            <p>card</p>
            <p>card</p>
            <p>card</p>
            <p>card</p>
            <p>card</p>
            <p>card</p>
            <p>card</p>
            <p>card</p>
            <p>card</p>
            <p>card</p>
            <p>card</p>
            <p>card</p>
            <p>card</p>
            <p>card</p>
            <p>card</p>
            <p>card</p>
            <p>card</p>
        </div>
    </div>
</template>

<script setup>
defineProps({
    type: String,
});
</script>
