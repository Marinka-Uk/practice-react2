export const TodoList = ({ todos, onDelete }) => {
  return (
    <ul>
      {todos.map(todo => {
        return (
          <li key={todo.id}>
            <label>
              <input type="checkbox" name="agree" />
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
