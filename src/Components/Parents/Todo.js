import TodoList from "../Childs/TodoList";
import { useState } from "react";
import CreateTodo from "../Childs/Create";
const Todo = () => {
  const [getTodos, setTodos] = useState([
    { id: 1, title: "eat" },
    { id: 2, title: "sleep" },
    { id: 3, title: "code" },
  ]);

  const CreateTodoList = (todo) => {
    setTodos(getTodos.concat(todo));
  };

  return (
    <div>
      <h2>Todo List</h2>
      <CreateTodo onCreateTodo={CreateTodoList} />
      <TodoList data={getTodos} />
    </div>
  );
};

export default Todo;
