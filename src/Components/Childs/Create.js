import { useState } from "react";
const CreateTodo = (props) => {
  const [getInputTodo, setInputTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodos = {
      id: Math.floor(Math.random() * 100) + 1,
      title: getInputTodo,
    };

    props.onCreateTodo(newTodos);

    setInputTodo("");
  };
  const handleInputTodo = (e) => {
    setInputTodo(e.target.value);
    console.log(handleInputTodo);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <input
            type="text"
            value={getInputTodo}
            className="form-control"
            onChange={handleInputTodo}
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default CreateTodo;
