import { useReducer } from "react";

import "./App.css";

function NameList() {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "SET_NAME":
          return { ...state, name: action.payload };
        case "ADD_NAME":
          return {
            ...state,
            names: [...state.names, state.name],
            name: " ",
          };
      }
    },
    { names: [], name: "" }
  );

  console.log(state);
  return (
    <div className="App">
      {state.names.map((name, index) => (
        <ul>
          <li key={index}>{name}</li>
        </ul>
      ))}
      <input
        type="text"
        value={state.name}
        onChange={(e) =>
          dispatch({ type: "SET_NAME", payload: e.target.value })
        }
      />
      <button onClick={() => dispatch({ type: "ADD_NAME" })}>Add Name</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <NameList />
    </div>
  );
}

export default App;
