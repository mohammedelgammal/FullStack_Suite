import { ButtonEnum, TodoFormProps } from "src/types/types";
import Style from "./TodoForm.module.css";
import Button from "./ui/Button";

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
    <form className={Style.form} onSubmit={handleSubmit}>
      <div className={Style.inputContainer}>
        <input
          placeholder="Place todo here..."
          value={todo}
          type="text"
          onChange={handleTodoChange}
        />
        <Button btnType={ButtonEnum.Add} disabled={!todo.length}>
          Add +
        </Button>
      </div>
    </form>
  );
};

export default TodoForm;
