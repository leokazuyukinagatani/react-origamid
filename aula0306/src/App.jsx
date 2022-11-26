import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import "./App.css";
import { useFetch } from "./hooks/useFetch";
import { useLocalStorage } from "./hooks/useLocalStorage";
function App() {
  const [produto, setProduto] = useLocalStorage("produto", "");
  const inputProduto = useRef();

  const { request, data, loading, error } = useFetch();
  function handleSubmit() {
    setProduto(inputProduto.current.value);
  }

  useEffect(() => {
   async function fetchData(){
    const { response, json } = await request(
      "https://ranekapi.origamid.dev/json/api/produto"
    )
    console.log(response, json)
    }

    fetchData()
  }, [request]);


  console.log(data);

  if (error) return <div>{error}</div>;
  if (loading) return <div>Carregando</div>;
  return (
    <>
      <p>{produto}</p>
      {data &&
        data.map((item) => {
          return (
            <div key={item.id}>
              <h1>{item.nome}</h1>
            </div>
          );
        })}
      <input ref={inputProduto} />
      <button onClick={handleSubmit}>Enviar</button>
    </>
  );
}

export default App;
