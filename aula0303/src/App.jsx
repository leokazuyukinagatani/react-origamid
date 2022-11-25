import { useEffect, useRef, useState } from "react";

function App() {
  // const [comentarios, setComentarios] = useState([]);
  // const [input, setInput] = useState("");

  // const inputElement = useRef();

  // function handleComentario(event) {
  //   setInput(event.target.value);
  // }

  // function handleAddComentario() {
  //   setComentarios((prevComentarios) => [...prevComentarios, input]);
  //   setInput("");
  //   inputElement.current.focus()
  // }

  const [carrinho, setCarrinho] = useState(0);
  const [notificacao, setNotificacao] = useState(null);
  const timeoutRef = useRef();

  function handleClick() {
    setCarrinho((prevCarrinho) => prevCarrinho + 1);
    setNotificacao("Item adicionado ao carrinho");

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setNotificacao(null);
    }, 2000);

    console.log(timeoutRef.current);
  }
  return (
    <>
      <p>{notificacao}</p>
      <button onClick={handleClick}>Adicionar Carrinho {carrinho}</button>
      {/* <ul>
        {comentarios.map((comentario) => (
          <li key={comentario}>{comentario}</li>
        ))}
      </ul>
      <input ref={inputElement} type="text" value={input} onChange={handleComentario} />
      <br />
      <button onClick={handleAddComentario}>Adicionar</button> */}
    </>
  );
}

export default App;
