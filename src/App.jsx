import "./App.css";

function App() {
  const users = [
    {
      id: 1,
      name: "Asad",
    },
    {
      id: 2,
      name: "Akul",
    },
    {
      id: 3,
      name: "Jaman",
    },
  ];

  return (
    <>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              {user.id} | {user.name}
            </li>
          );
        })}
      </ul>

      {/* pass in component  */}
      {/* {users.map((user) => {
        return <component key={user.id} id={user.id} name={user.name} />;
      })} */}
    </>
  );
}

export default App;
