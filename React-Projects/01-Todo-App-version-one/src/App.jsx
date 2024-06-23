import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import AppName from "./Todo-Components/AppName";
import AddTodo from "./Todo-Components/Add-Todo";
import TodoItem1 from "./Todo-Components/Todo-item-1";
import Todoitem2 from "./Todo-Components/Todo-item-2";
import "./App.css";

function App() {
  return (
    <center className="Todo-Container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <div className="items-container">
        <TodoItem1></TodoItem1>
        <Todoitem2></Todoitem2>
      </div>
    </center>
  );
}

export default App;
