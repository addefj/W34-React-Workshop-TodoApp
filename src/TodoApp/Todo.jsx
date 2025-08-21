import React, { useEffect } from "react";
import { useState } from "react";
import Header from "./Header";
import TodoForm from "./TodoForm";
import TodoCard from "./TodoCard";
import SidebarHorizontal from "./SidebarHorizontal";
import {getTodos, addTodo} from "./todoService";

const Todo = () => {

  const [todoItems, setTodoItems] = useState([]);
  const [reload, setReload] = useState(false); // false
  
  useEffect(() => {
    setTodoItems(getTodos()); // Fetch the todo items when the component mounts or reload changes
  }, [reload]); // you added reload value as a dependency 



  return (
    <main className="col px-md-4 offset-lg-3">
      <Header />
      <SidebarHorizontal />
      <TodoForm onAddTodo={()=> setReload(!reload)} />
      <TodoCard todoItems={todoItems} />
    </main>
  );
};

export default Todo;
