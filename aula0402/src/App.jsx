import { useState } from "react";

import "./App.css";

function App() {
  const [textarea, setTextarea] = useState("");
  const [select, setSelect] = useState("");
  const [radio, setRadio] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [cores, setCores] = useState([]);

  function handleChangeColor({ target }) {
    console.log(cores)
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(
        cores.filter((cor) => {
          return cor !== target.value;
        })
      );
    }
  }
  function handleChange({ target }) {
    setRadio(target.value);
  }

  function checkColor(cor) {
    return cores.includes(cor)
  }
  return (
    <form action="">
      {/* <textarea
        value={textarea}
        onChange={(e) => setTextarea(e.target.value)}
      />
      <select
        id="produtos"
        value={select}
        onChange={({ target }) => setSelect(target.value)}
      >
        <option disabled value="">
          Selecione
        </option>
        <option value="notebook">Notebook</option>
        <option value="smarthphone">Smarthphone</option>
        <option value="tablet">Tablet</option>
      </select>
      {radio}
      <label>
        <input
          type="radio"
          value="notebook"
          name="produto"
          checked={radio === "notebook"}
          onChange={handleChange}
        />
        Notebook
      </label>
      <label>
        <input
          type="radio"
          value="smartphone"
          name="produto"
          checked={radio === "smartphone"}
          onChange={handleChange}
        />
        Smartphone
      </label>
      <label>
        <input
          type="radio"
          value="tablet"
          name="produto"
          checked={radio === "tablet"}
          onChange={handleChange}
        />
        Tablet
      </label>
      {
        checkbox && <p>Aceitou os termos</p>
      }
      <label>
        <input
          type="checkbox"
          value="Termos"
          checked={checkbox}
          onChange={({ target }) => setCheckbox(target.checked)}
        />
        Aceito os termos.
      </label> */}

      <label>
        <input type="checkbox" value="azul" checked={checkColor('azul')} onChange={handleChangeColor} />
        azul
      </label>
      <label>
        <input type="checkbox" value="vermelho" checked={checkColor('vermelho')} onChange={handleChangeColor} />
        vermelho
      </label>
    </form>
  );
}

export default App;
