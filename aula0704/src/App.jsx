import { useReducer, useState } from "react";
import "./App.css";
import { Example } from "./Example";

function reducer(state, action) {
  switch (action) {
    case "AUMENTAR":
      return state + 1;
    case "DIMINUIR":
      return state - 1;
    default:
      throw new Error("Invalid action " + action);
  }

  // console.log(action);
  // if (action === "aumentar") {
  //   return state + 1;
  // } else if (action === "diminuir") {
  //   return state - 1;
  // }
  // return new Error("Invalid action");
}

function App() {
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <button onClick={() => dispatch("AUMENTAR")}>Add</button>
      <button onClick={() => dispatch("DIMINUIR")}>Sub</button>
      <p>{state}</p>
      <Example />
    </div>
  );
}

export default App;
