import { useState } from "react";
import "./App.css";

function App() {
  let time = new Date().toLocaleTimeString();

  const [currentTime, setCurrentTime] = useState(time);

  function updateTime() {
    time = new Date().toLocaleTimeString();
    setCurrentTime(time);
  }

  setInterval(updateTime, 1000);

  return (
    <div className="App">
      <h1>{time}</h1>
    </div>
  );
}

export default App;
