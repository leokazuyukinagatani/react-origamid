import { useMemo } from "react";
import { useCallback } from "react";
import { useState } from "react";
import "./App.css";

// function operacaoLenta() {
//   let count;
//   for (let i = 0; i < 1000000; i++) {
//     count = i + i / 10;
//   }
//   return count;
// }
const set1 = new Set();
const set2 = new Set();
const Produto = () => {
  const func1 = () => {
    console.log("func1");
  };

  const func2 = useCallback(() => {
    console.log("func2");
  }, []);

  set1.add(func1);
  set2.add(func2);

  console.log("Set1:", set1)
  console.log("Set2:", set2)
  return (
    <div>
      <p onClick={func1}>Produto 1</p>
      <p onClick={func2}>Produto 2</p>
    </div>
  );
};

function App() {
  const [contar, setContar] = useState(0);

  // const handleClick = useCallback(() => {
  //   setContar((contar) => contar + 1);
  // }, []);

  // // const valor = useMemo(() => {
  // //   const localItem = window.localStorage.getItem("produto");
  // //   console.log('Aconteceu o memo')
  // //   return localItem
  // // },[]);

  // const tempoInicial = performance.now();
  // const valor = useMemo(() => operacaoLenta(), []);
  // const tempoTotal = performance.now() - tempoInicial;

  // console.log(tempoTotal);
  return (
    <>
      <Produto />
      <p>{contar}</p>
      <button onClick={() => setContar(contar + 1)}>Add +1</button>
    </>
  );
}

export default App;
