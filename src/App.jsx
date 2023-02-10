import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { increment } from './store/slices/counter';

function App() {
  const { counter } = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div className='App'>
      <div>
        <h1>Redux Toolkit</h1>
      </div>
      <div className='card'>
        <button onClick={() => dispatch(increment())}>count is {counter}</button>
      </div>
    </div>
  );
}

export default App;
