import { TodoListProps } from "./types";

const TodoList = ({ todos, setTodos }: TodoListProps) => {
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

  return (
    <>
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
    </>
  );
};

export default TodoList;
