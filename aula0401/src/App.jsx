import { useState } from "react";
import "./App.css";

function App() {
  
  const [response, setResponse] = useState(null)

  const formFields = [
    {
      id: "nome",
      label: "Nome",
      type: "text",
    },
    {
      id: "email",
      label: "Email",
      type: "email",
    },
    {
      id: "senha",
      label: "Senha",
      type: "password",
    },
    {
      id: "cep",
      label: "Cep",
      type: "number",
    },
    {
      id: "rua",
      label: "Rua",
      type: "text",
    },
    {
      id: "numero",
      label: "Numero",
      type: "number",
    },
    {
      id: "bairro",
      label: "Bairro",
      type: "text",
    },
    {
      id: "cidade",
      label: "Cidade",
      type: "text",
    },
    {
      id: "estado",
      label: "Estado",
      type: "text",
    },
  ];

  const forms = formFields.reduce((acc, field) => {
    return {
      ...acc,
      [field.id]: '',
    }
  },{})
  
  const [form, setForm] = useState(forms);


  async function handleSubmit(event) {
    event.preventDefault();
    const response = await fetchUsuario();
    setResponse(response)
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  async function fetchUsuario() {
    const response = await fetch(
      "https://ranekapi.origamid.dev/json/api/usuario",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      }
    );

    return response;
  }

  return (
    <form onSubmit={handleSubmit}>
      {formFields.map(({ id, label, type }) => (
        <div key={id}>
          <label htmlFor={id}>{label}</label>
          <input
            id={id}
            type={type}
            value={form[id]}
            onChange={handleChange}
          />
        </div>
      ))}
      {
        response && response.ok && <p>Usuário criado</p>
      }
      <button>Enviar</button>
    </form>
  );
}

export default App;
