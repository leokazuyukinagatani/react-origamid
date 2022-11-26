import { useContext } from "react";
import { GlobalContext } from "./GlobalContext";



export function ButtonLimpar() {
  const {limparDados}= useContext(GlobalContext)
  return(
    <button onClick={limparDados}>Limpar</button>
  )
}