import React, { useEffect } from "react";
import { useState } from "react";
import Header from "./Header";
import TodoForm from "./TodoForm";
import TodoCard from "./TodoCard";
import SidebarHorizontal from "./SidebarHorizontal";
import {getTodos, addTodo, deleteTodo, toggleDone} from "./todoService";

const Todo = () => {

  const [todoItems, setTodoItems] = useState([]);
  const [reload, setReload] = useState(false); // false
  
  useEffect(() => {
    setTodoItems(getTodos()); // Fetch the todo items when the component mounts or reload changes
  }, [reload]); // you added reload value as a dependency 

 const handleDelete = (id) => {
    deleteTodo(id);      // Delete from service
    setReload(!reload);  // Trigger reload
  };

  const handleToggleDone = (id) => {
    toggleDone(id); // Toggle done status in service
    setReload(!reload);  // Trigger reload
  }

  return (
    <main className="col px-md-4 offset-lg-3 body">
      <Header />
      <SidebarHorizontal />
      <TodoForm onAddTodo={()=> setReload(!reload)} />
      <TodoCard todoItems={todoItems} onDelete={handleDelete} onToggleDone={handleToggleDone} />
    </main>
  );
};

export default Todo;
