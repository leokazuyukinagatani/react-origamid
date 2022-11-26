import { useContext } from "react";
import { Usercontext } from "./UserContext";
import { GlobalContext } from "./GlobalContext";

export function Produto() {
  const global = useContext(GlobalContext);
  const dados = useContext(Usercontext);
  console.log(global);
  function handleClick() {
    global.setContar((contar) => contar+1)
  }
  return (
    <>
      <div>Produto: {global.contar}</div>
      <button onClick={handleClick}>Add+1</button>
    </>
  );
}
