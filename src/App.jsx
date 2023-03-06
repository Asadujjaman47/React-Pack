import { useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef();

  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}

export default App;
