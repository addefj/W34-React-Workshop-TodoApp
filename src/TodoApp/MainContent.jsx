import React from "react";
import { useState } from "react";
import Header from "./Header";
import Form from "./TodoForm";
import Card from "./TodoCard";
import SidebarHorizontal from "./SidebarHorizontal";

const MainContent = () => {

  const [todoItems, setTodoItems] = useState([]);

  return (
    <main className="col px-md-4 offset-lg-3">
      <Header />
      <SidebarHorizontal />
      <Form todoItems={todoItems} setTodoItems={setTodoItems} />
      <Card todoItems={todoItems} />
    </main>
  );
};

export default MainContent;
