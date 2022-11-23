import { useState } from "react";
import "./App.css";
import { ButtonFetch } from "./ButtonFetch";
import { Produto } from "./Produto";
// import { ButtonModal } from "./ButtonModal";
// import { Modal } from "./Modal";

function App() {
  // const [modal, setModal] = useState(false);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  async function handleClick(event) {
    setLoading(true);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText.toLowerCase()}`
    );
    const json = await response.json();
    console.log(json);
    setData(json);
    setLoading(false);
  }

  return (
    // <>
    // <div>{modal ? 'Modal Aberto':'Modal Fechado'}</div>
    // <Modal modal={modal} setModal={setModal}/>
    // {
    //   !modal &&  <ButtonModal setModal={setModal}/>
    // }
    // </>

    <div>
      <button style={{ margin: ".5rem" }} onClick={handleClick}>
        Notebook
      </button>
      <button style={{ margin: ".5rem" }} onClick={handleClick}>
        Tablet
      </button>
      <button style={{ margin: ".5rem" }} onClick={handleClick}>
        Smartphone
      </button>
      {loading && <p>Carregando....</p>}
      {!loading && data && <Produto {...data} />}
    </div>
  );
}

export default App;
