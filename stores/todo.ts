import { ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'

interface ToDo {
  name: string;
  id: number;
}

export const useToDoStore = defineStore('todo', () => {
  const newToDo = ref('')
  const listToDo: Ref<ToDo[]> = ref([]);
  function addNew() {
    let id: number;
    if (newToDo.value == '') return;
    if (listToDo.value.length == 0) {
      id = 1;
    }
    else {
      const item = listToDo.value[listToDo.value.length - 1];
      id = item.id;
    }

    listToDo.value.push({ id: id, name: newToDo.value })
    newToDo.value = ''
  }

  function removeItem(todo: ToDo) {
    listToDo.value = listToDo.value.filter((t) => t !== todo)
  }

  return { newToDo, listToDo, addNew, removeItem }
})
