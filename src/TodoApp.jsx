import { useState } from 'react';
import {
  useGetTodoQuery,
  // useGetTodosQuery
} from './store/apis';

const liStyle = {
  border: '1px solid blue',
  margin: 5,
  padding: 15,
};

export const TodoApp = () => {
  const [todoId, setTodoId] = useState(1);
  // RTK Query: desestructuramos algunas cosas que trae listas para usarlas 🤩
  // const { data: todos = [], isLoading } = useGetTodosQuery();
  // ! LEEME: useGetTodoQuery es porque al crear la api le pusimos por nombre "getTodo"
  // ! Entonces se le agrega el "use" y el "Query" antes y después de nuestro nombre elegido
  // ! Quedando use + GetTodo + Query = useGetTodoQuery()
  const { data: todo, isLoading } = useGetTodoQuery(todoId);

  const prevTodo = () => {
    setTodoId(todoId - 1);
  };

  const nextTodo = () => {
    setTodoId(todoId + 1);
  };

  return (
    <div className='App'>
      <h1>Todos - RTK Query</h1>
      <hr />
      <h4>isLoading: {isLoading ? 'TRUE' : 'FALSE'}</h4>

      <pre>{JSON.stringify(todo)}</pre>
      <button disabled={todoId === 1} onClick={prevTodo}>
        Prev Todo
      </button>
      <button disabled={isLoading} onClick={nextTodo}>
        Next Todo
      </button>
      <button>{todoId}</button>

      {/* <ul>
        {todos.map(({ completed, id, title }) => (
          <li key={id} style={liStyle}>
            <strong style={{ color: completed ? 'green' : 'red' }}>
              {completed ? 'DONE' : 'Pending'}
            </strong>
            <p>{title}</p>
          </li>
        ))}
      </ul> */}
    </div>
  );
};
