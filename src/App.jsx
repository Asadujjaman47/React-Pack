import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function CountUpdate() {
    setCount(count + 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={CountUpdate}>Count</button>
    </div>
  );
}

export default App;
