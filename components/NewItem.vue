<script setup lang="ts">
import { useToDoStore } from '@/stores/todo';

const ToDoStore = useToDoStore();
</script>

<template>
    <div class="todo-add">
        <label for="new-item">New ToDo</label>
        <input type="text" id="new-item" v-model="ToDoStore.newToDo">
        <button @click="ToDoStore.addNew">Add new item</button>
    </div>
</template>

<style>
.todo-add {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
}

input {
    background-color: transparent;
    border: 2px solid rgba(0, 0, 0, .35);
    color: #000;
}
</style>