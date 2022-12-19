import { useState } from "react";
import { Checkbox } from "./Form/Checkbox";
import { Input } from "./Form/Input";
import { Radio } from "./Form/Radio";
import { Select } from "./Form/Select";
import useForm from "./Hooks/useForm";

function App() {
  const [produto, setProduto] = useState("");
  const [cor, setCor] = useState("Azul");
  const [linguagens, setLinguagens] = useState([]);

  const cep = useForm("cep");
  const email = useForm("email");
  const nome = useForm();

  function handleSubmit(event) {
    event.preventDefault();
    if (cep.validate()) {
      console.log("Enviou");
    } else {
      console.log("Não enviou");
    }
  }
  return (
    <form onSubmit={handleSubmit}>
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

      <Input
        label="CEP"
        id="cep"
        type="text"
        {...cep}
        placeholder="00000-000"
      />
      <Input
        label="Email"
        id="email"
        type="email"
        {...email}
      />
       <Input
        label="nome"
        id="nome"
        type="text"
        {...nome}
      />

      <button>Enviar</button>
    </form>
  );
}

export default App;
