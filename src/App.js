import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux'; 
import { increment, decrement, sample } from './redux/slice';
import './index.css';

function App() {
  const {count} = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className='torso'>
      <h1>Counter App</h1>
      <h2>{count}</h2>
      
      <button className='btn' id='increasebutton' onClick ={() => dispatch(increment())}>
        Increase
      </button>
      <button className='btn' id='decrease-button' onClick ={() => dispatch(decrement())}>
        Decrease
      </button>
      <button className='btn' id='reset-button' onClick ={() => dispatch(sample())}>
        Reset
      </button>

    </div>
  );
}

export default App;
