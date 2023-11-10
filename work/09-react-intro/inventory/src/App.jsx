import { useState } from 'react';
import './App.css';
import Reorder from './Reorder';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="card">
        {/* Displays a count for an inventory */}
        <p>Count is {count}</p>
        {/* increase/decrease the displayed count using +/- buttons */}
        <button onClick={() => setCount((count) => count + 1)}>
          +
        </button>
        {/* Does not allow you to decrease the count below 0*/}
        <button disabled={!count} onClick={() => setCount((count) => count - 1)}>
          -
        </button>

        {/*Offers a "Reorder" button when the count is 0
        Clicking the Reorder button will add 5 to the count*/}
        {count === 0 && <Reorder onReorder={() => setCount((count) => count + 5)} />}
      </div>
    </>
  )
}

export default App;
