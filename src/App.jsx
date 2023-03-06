import { createContext } from "react";
import "./App.css";
import User from "./components/User";

export const userContext = createContext();

function App() {
  return (
    <userContext.Provider value="Asad">
      <h1>useContext Hook in React</h1> <br />
      <User />
    </userContext.Provider>
  );
}

export default App;
