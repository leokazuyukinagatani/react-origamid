import { useState } from "react";

import "./App.css";

function App() {
  const [textarea, setTextarea] = useState("");
  const [select, setSelect] = useState("");
  const [radio, setRadio] = useState("");
  function handleChange({ target }) {
    setRadio(target.value);
  }
  return (
    <form action="">
      <textarea
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
    </form>
  );
}

export default App;
