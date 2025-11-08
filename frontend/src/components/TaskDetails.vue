<template>
    <div
        v-if="isOpen"
        class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        @click.self="closeModal"
    >
        <div class="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
            <h2 class="text-2xl font-bold mb-4">
                {{ isEditMode ? "Edit Task" : "Create New Task" }}
            </h2>

            <form @submit.prevent="handleSubmit">
                <div class="mb-4">
                    <label
                        for="title"
                        class="block text-sm font-medium text-gray-700 mb-2"
                    >
                        Title
                    </label>
                    <input
                        id="title"
                        v-model="formData.title"
                        type="text"
                        required
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter task title"
                    />
                </div>

                <div class="mb-4">
                    <label
                        for="description"
                        class="block text-sm font-medium text-gray-700 mb-2"
                    >
                        Description
                    </label>
                    <textarea
                        id="description"
                        v-model="formData.description"
                        rows="4"
                        required
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                        placeholder="Enter task description"
                    ></textarea>
                </div>

                <div class="mb-6">
                    <label
                        for="state"
                        class="block text-sm font-medium text-gray-700 mb-2"
                    >
                        Status
                    </label>
                    <select
                        id="state"
                        v-model="formData.state"
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option :value="taskState.TODO">To Do</option>
                        <option :value="taskState.IN_PROGRESS">
                            In Progress
                        </option>
                        <option :value="taskState.DONE">Done</option>
                    </select>
                </div>

                <div class="flex justify-end gap-3">
                    <button
                        type="button"
                        @click="closeModal"
                        class="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        class="px-4 py-2 text-white bg-primary-red rounded-xl hover:bg-accent-orange transition-colors"
                    >
                        {{ isEditMode ? "Update" : "Create" }}
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useTasksStore, taskState, type Task } from "@/stores/tasks";

const tasksStore = useTasksStore();

const props = defineProps<{
    isOpen: boolean;
    task?: Task | null;
}>();

const emit = defineEmits<{
    close: [];
}>();

const isEditMode = ref(false);
const formData = ref({
    title: "",
    description: "",
    state: taskState.TODO,
});

// Watch for changes to the task prop to populate form
watch(
    () => props.task,
    (newTask) => {
        if (newTask) {
            isEditMode.value = true;
            formData.value = {
                title: newTask.title,
                description: newTask.description,
                state: newTask.state,
            };
        } else {
            isEditMode.value = false;
            resetForm();
        }
    },
    { immediate: true },
);

function resetForm() {
    formData.value = {
        title: "",
        description: "",
        state: taskState.TODO,
    };
}

function handleSubmit() {
    if (isEditMode.value && props.task) {
        // Update existing task
        tasksStore.updateTask(props.task.id, {
            title: formData.value.title,
            description: formData.value.description,
            state: formData.value.state,
        });
    } else {
        // Create new task
        const newTask: Task = {
            id: tasksStore.getNextId(),
            title: formData.value.title,
            description: formData.value.description,
            state: formData.value.state,
        };
        tasksStore.addTask(newTask);
    }

    closeModal();
}

function closeModal() {
    resetForm();
    emit("close");
}
</script>
