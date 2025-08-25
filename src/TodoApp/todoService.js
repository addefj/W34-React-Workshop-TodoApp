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

export const sortTodos = (sortType) => {
  switch (sortType) {
    case "dueAsc":
      console.log("Sorting by due date ascending");
      return [...todoItems].sort((a, b) => new Date(a.due) - new Date(b.due));
    case "dueDesc":
      console.log("Sorting by due date descending");
      return [...todoItems].sort((a, b) => new Date(b.due) - new Date(a.due));
    case "title":
      console.log("Sorting by title A-Z");
      return [...todoItems].sort((a, b) => a.title.localeCompare(b.title));
    case "assignee":
      console.log("Sorting by assignee");
      return [...todoItems].sort((a, b) => a.assignee.localeCompare(b.assignee));
    case "created":
      console.log("Sorting by created date");
      return [...todoItems].sort((a, b) => new Date(a.created) - new Date(b.created));
    default:
      return todoItems;
  }
};
