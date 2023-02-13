import { useGetTodosQuery } from './store/apis';

const liStyle = {
  border: '1px solid blue',
  margin: 5,
  padding: 15,
};

const strongStyle = {
  color: completed ? 'green' : 'red',
};

export const TodoApp = () => {
  // RTK Query: desestructuramos algunas cosas que trae listas para usarlas 🤩
  const { data: todos = [], isLoading } = useGetTodosQuery();

  return (
    <div className='App'>
      <h1>Todos - RTK Query</h1>
      <hr />
      <h4>isLoading: {isLoading ? 'TRUE' : 'FALSE'}</h4>

      <pre>...</pre>

      <ul>
        {todos.map(({ completed, id, title }) => (
          <li key={id} style={liStyle}>
            <strong style={strongStyle}>{completed ? 'DONE' : 'Pending'}</strong>
            <p>{title}</p>
          </li>
        ))}
      </ul>

      <button>Next Todo</button>
    </div>
  );
};
