<script setup lang="ts">
import { useToDoStore } from '@/stores/todo';

const ToDoStore = useToDoStore();
</script>


<template>
    <div class="list-content">
        <div class="list-content_title">
            ToDo List
        </div>
        <div class="list-content_item" v-for="todo in ToDoStore.listToDo" :key="todo.id">
            {{ todo.name }}
            <button @click="ToDoStore.removeItem(todo)">
                Remove
            </button>
        </div>
    </div>
</template>

<style>
.list-content {
    width: 600px;
    margin: 50px auto 0 auto;
}

.list-content_title {
    font-size: 22px;
    border-bottom: 2px solid rgba(255, 255, 255, .35);
    padding-bottom: 6px;
    margin-bottom: 20px;
}

.list-content_item {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>