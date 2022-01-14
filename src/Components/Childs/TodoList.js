const TodoList = (props) => {
  console.log(props);

  return (
    <div>
      <ul>
        {props.data.map((todo) => {
          return <li key={todo.id}>{todo.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default TodoList;
