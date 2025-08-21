const todoItems = [];

  export const addTodo = (newTodo) => {
    const id = todoItems.length > 0 ? todoItems[todoItems.length - 1].id + 1 : 1;
    newTodo.id = id;
    newTodo.created = new Date().toLocaleDateString();
    todoItems.push(newTodo);
    
    console.log("Todo added:", newTodo);
  }

  export const getTodos = () => {
    return todoItems;
  }