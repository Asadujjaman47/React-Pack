import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(count + 2);
  }, [count]);

  return (
    <>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>count</button>
      <h2>{calculation}</h2>
    </>
  );
}

export default App;
