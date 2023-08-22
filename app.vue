<script setup lang="ts">
import NewItem from './components/NewItem.vue';
import ToDoList from './components/ToDoList.vue';
</script>

<template>
  <div class="title">
    <h1>
      To Do App
    </h1>
  </div>
  <main>
    <NewItem></NewItem>
    <ToDoList></ToDoList>
  </main>
</template>


<style>
body {
  background-color: #bebebe;
  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
}

h1 {
  font-weight: 600;
}

.title {
  margin-top: 40px;
  text-align: center;
  width: 100%;
}

input,
button {
  height: 48px;
  box-shadow: none;
  outline: none;
  padding-left: 12px;
  padding-right: 12px;
  border-radius: 6px;
  font-size: 18px;
  margin-top: 6px;
  margin-bottom: 12px;
}

button {
  border: 0;
  cursor: pointer;
}
</style>