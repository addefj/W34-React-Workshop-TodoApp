const todoItems = [];

export const addTodo = (newTodo) => {
  const id = todoItems.length > 0 ? todoItems[todoItems.length - 1].id + 1 : 1;
  newTodo.id = id;
  newTodo.created = new Date().toLocaleDateString();
  todoItems.push(newTodo);

  console.log("Todo added:", newTodo);
};

export const getTodos = () => {
  return todoItems;
};

export const deleteTodo = (id) => {
  const index = todoItems.findIndex((item) => item.id === id);
  if (index !== -1) {
    todoItems.splice(index, 1); // Remove the todo from the array
    console.log(`Todo with id ${id} deleted`);
  }
};

export const toggleDone = (id) => {
  const todo = todoItems.find((item) => item.id === id);
  if (todo) {
    todo.done = !todo.done; // flip true/false
    console.log(`Todo with id ${id} done status: ${todo.done}`);
  }
};
