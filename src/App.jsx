import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrement, increment, incrementBy } from './store/slices/counter';

function App() {
  const { count } = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div className='App'>
      <div>
        <h1>Redux Toolkit</h1>
        <h2>Count is {count}</h2>
      </div>
      <div className='card'>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <br />
        <button onClick={() => dispatch(incrementBy(2))}>Increment By 2</button>
        <br />
        <button disabled={count === 0} onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
