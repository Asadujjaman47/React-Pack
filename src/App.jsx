import "./App.css";

import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./actions/action";
import changeInterger from "./reducer/counter";
changeInterger;

function App() {
  const state = useSelector((state) => state.changeInterger);
  const dispatch = useDispatch();

  return (
    <div style={{ margin: "30px" }}>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <h3>{state}</h3>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;
