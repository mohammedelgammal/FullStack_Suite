type Todo = {
  id: number;
  content: String;
  isChecked: boolean;
};

type TodoFormProps = {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

type TodoListProps = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

enum ButtonEnum {
  Add = 1,
  Delete,
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: string | JSX.Element;
  btnType: ButtonEnum;
};

export { ButtonEnum };
export type { Todo, TodoFormProps, TodoListProps, ButtonProps };
