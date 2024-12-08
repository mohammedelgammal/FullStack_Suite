import { useEffect, useState } from "react";
import { Todo } from "./types/types";
import TodoForm from "src/components/TodoForm";
import TodoList from "src/components/TodoList";

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
      <TodoForm todo={todo} setTodo={setTodo} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
};

export default App;
