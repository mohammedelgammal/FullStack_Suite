import React, { FormEventHandler, useEffect, useState } from "react";
import Style from "./App.module.css";

type Todo = {
  id: number;
  content: String;
  isChecked: boolean;
};

const App = (): JSX.Element => {
  // state
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>(() => {
    const lsTodos: string | null = localStorage.getItem("todos");
    if (!lsTodos) return [];
    return JSON.parse(lsTodos);
  });

  // methods
  const handleTodoChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTodo(e.target.value);
  };
  const handleSubmit: FormEventHandler = (
    e: React.FormEvent<HTMLInputElement>
  ) => {
    e.preventDefault();
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: todos.length + 1, content: todo, isChecked: false },
    ]);
    setTodo("");
  };
  const handleCheck = (id: number): void => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            isChecked: !todo.isChecked,
          };
        }
        return todo;
      });
    });
  };
  const handleDelete = (id: number) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id != id);
    });
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <h1 className={Style.heading}>This is heading</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input value={todo} type="text" onChange={handleTodoChange} />
          <button disabled={!todo.length}>Add</button>
        </div>
      </form>
      <h2>Todo List</h2>
      <ol>
        {todos.map(({ id, content, isChecked }) => (
          <li key={id}>
            <input
              name="check"
              type="checkbox"
              checked={isChecked}
              onChange={() => handleCheck(id)}
            />
            <label
              style={{
                textDecoration: isChecked ? "line-through" : "",
              }}
              htmlFor="check"
              onClick={() => handleCheck(id)}
            >
              {content}
            </label>
            <button onClick={() => handleDelete(id)}>delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default App;
