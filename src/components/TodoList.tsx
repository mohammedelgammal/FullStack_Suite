import Style from "./TodoList.module.css";
import { TodoListProps } from "src/types/types";
import { ButtonEnum } from "src/types/types";
import Button from "./ui/Button";

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
      <ol className={Style.list}>
        {!todos.length ? (
          <h2 className={Style.heading}>Start by adding some todos!</h2>
        ) : (
          todos.map(({ id, content, isChecked }) => (
            <li className={Style.listItem} key={id}>
              <div>
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
              </div>
              <Button
                btnType={ButtonEnum.Delete}
                onClick={() => handleDelete(id)}
              >
                delete
              </Button>
            </li>
          ))
        )}
      </ol>
    </>
  );
};

export default TodoList;
