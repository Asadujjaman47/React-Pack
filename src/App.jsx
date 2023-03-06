import "./App.css";

function App() {
  function clicked(name) {
    alert("I am clicked! " + name);
  }

  return (
    <div className="container">
      <button onClick={clicked}>Click Me</button>

      {/* for pass argument, use arrow function  */}
      <button onClick={() => clicked("Asad")}>Click Me</button>
    </div>
  );
}

export default App;
