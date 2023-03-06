import "./App.css";

function App() {
  const name = "Asad";
  const element = <p> I am a JSX</p>;
  return (
    <div className="App">
      <h1>Hello {name}</h1>
      <p className="para">{name == "Asad" ? "true" : "false"}</p>
      <input type="text" placeholder="" name="" />
      {element}
    </div>
  );
}

export default App;
