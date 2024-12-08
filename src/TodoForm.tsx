import { TodoFormProps } from "./types";

const TodoForm = ({ todo, setTodo, setTodos }: TodoFormProps) => {
  const handleTodoChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTodo(e.target.value);
  };
  const handleSubmit: React.FormEventHandler = (
    e: React.FormEvent<HTMLInputElement>
  ) => {
    e.preventDefault();
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: prevTodos.length + 1, content: todo, isChecked: false },
    ]);
    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input value={todo} type="text" onChange={handleTodoChange} />
        <button disabled={!todo.length}>Add</button>
      </div>
    </form>
  );
};

export default TodoForm;
