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

export type { Todo, TodoFormProps, TodoListProps };
