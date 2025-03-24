export const TodoList = ({ todos, onDelete , toggleComplete}) => {
  return (
    <ul>
      {todos.map(todo => {
        return (
          <li key={todo.id}>
            <label>
              <input type="checkbox" name="agree" checked={todo.completed}
              onChange={()=>{
toggleComplete(todo.id)
              }}
              />
            </label>
            <p>{todo.text}</p>
            <button
              onClick={() => {
                onDelete(todo.id);
              }}
              type="button"
            >
              Видалити
            </button>
          </li>
        );
      })}
    </ul>
  );
};

