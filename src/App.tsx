import { useEffect, useState } from "react";
import { Todo } from "./types";
import TodoForm from "./TodoForm";
import Style from "./App.module.css";
import TodoList from "./TodoList";

const App = (): JSX.Element => {
  // Global state
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>(() => {
    const lsTodos: string | null = localStorage.getItem("todos");
    if (!lsTodos) return [];
    return JSON.parse(lsTodos);
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <h1 className={Style.heading}>This is heading</h1>
      <TodoForm todo={todo} setTodo={setTodo} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
};

export default App;
