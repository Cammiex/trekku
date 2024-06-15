import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <div>{count}</div>
      <button onClick={() => setCount(count - 1)}>Increase</button>
      {/* <p className="text-black ">This Website in Development Process.</p> */}
    </div>
  );
}

export default App;
