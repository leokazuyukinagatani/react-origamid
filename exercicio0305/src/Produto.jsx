import { useContext } from "react";
import { GlobalContext } from "./GlobalContext";

export function Produto() {
  const global = useContext(GlobalContext)
  console.log(global)
  if(!global.dados) return null
  return (<div>
    Produtos:{global.dados.map(produto => <li key={produto.id}>{produto.nome}</li>)}
  </div>)
}