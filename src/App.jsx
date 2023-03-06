import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  function handleSubmit() {
    alert("Your name is " + name + "and you are " + age + " years old");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Enter Your name:
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          value={name}
        />
      </label>
      <br />
      <label htmlFor="age">
        Enter Your age:
        <input
          onChange={(e) => setAge(e.target.value)}
          type="text"
          name="age"
          id="age"
          value={age}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
