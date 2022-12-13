import { useState } from "react";
import { Checkbox } from "./Form/Checkbox";
import { Input } from "./Form/Input";
import { Radio } from "./Form/Radio";
import { Select } from "./Form/Select";

function App() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [produto, setProduto] = useState("");
  const [cor, setCor] = useState("Azul");
  const [linguagens, setLinguagens] = useState([]);

  return (
    <form action="">
      {/* <h2>Checkbox</h2>
      <Checkbox
        options={["Javascript", "PHP", "Ruby"]}
        value={linguagens}
        setValue={setLinguagens}
      />
      <Radio options={["Azul", "Vermelho"]} value={cor} setValue={setCor} />
      <Input id="nome" label="Nome" value={nome} setValue={setNome} />
      <Input id="email" label="Email" value={email} setValue={setEmail} />
      <Select
        options={["smartphone", "notebook"]}
        value={produto}
        setValue={setProduto}
      /> */}


      
    </form>
  );
}

export default App;
