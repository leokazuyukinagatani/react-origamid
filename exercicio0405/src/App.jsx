import { useState } from "react";

const coresArray = ["azul", "roxo", "laranja", "verde", "vermelho", "cinza"];
function App() {
  const [cores, setCores] = useState([]);

  function handleChange({ target }) {
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

  return (
    <form action="">
      {coresArray.map((cor) => (
        <label key={cor} style={{textTransform:'capitalize'}}>
          <input
            type="checkbox"
            value={cor}
            checked={cores.includes(cor)}
            onChange={handleChange}
          />
          {cor}
        </label>
      ))}
    </form>
  );
}

export default App;
