import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import { Produto } from './Produto'

function App() {
  const [produto, setProduto] = useState(null);

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  useEffect(() => {
    const produtoLocal = localStorage.getItem("produto");
    if (produtoLocal !== null) setProduto(produtoLocal);
  }, []);

  useEffect(() => {
    if (produto !== null) localStorage.setItem("produto", produto);
  }, [produto]);

  return (
    <div>
      <h1>Preferência: {produto}</h1>
      <button onClick={handleClick} style={{ marginRight: "1rem" }}>
        notebook
      </button>
      <button onClick={handleClick} style={{ marginRight: "1rem" }}>
        smartphone
      </button>

      <Produto produto={produto}/>
    </div>
  );
}

export default App;
