import { useReducer } from "react";
import "./App.css";

function App() {
  function reducer(state, action) {
    if (action.type == "INCREMENT") {
      return state + 1;
    }
    return state;
  }

  const initialState = 0;
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>useReducer Hook in React</h1> <br />
      <h2>{state}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Count</button>
    </>
  );
}

export default App;
