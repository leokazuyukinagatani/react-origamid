import { useState } from "react";

export function PhotoPost() {
  const [token, setToken] = useState("");
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [image, setImage] = useState("");

  async function handlePhotoPost(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('img', image)
    formData.append('nome', name)
    formData.append('peso', weight)
    formData.append('idade', age)
    try {
      const response = await fetch(
        "https://dogsapi.origamid.dev/json/api/photo",
        {
          method: "POST",
          headers: {
           Authorization: 'Bearer' + token
          },
          body: formData,
        }
      );

      const json = await response.json();
      console.log(json);
      return json;
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form onSubmit={handlePhotoPost}>
      <input
        type="text"
        value={token}
        onChange={({ target }) => setToken(target.value)}
        placeholder="token"
      />
      <input
        type="text"
        value={name}
        onChange={({ target }) => setName(target.value)}
        placeholder="name"
      />
      <input
        type="number"
        value={weight}
        onChange={({ target }) => setWeight(target.value)}
        placeholder="weight"
      />
      <input
        type="number"
        value={age}
        onChange={({ target }) => setAge(target.value)}
        placeholder="age"
      />

      <input type="file" onChange={({ target }) => setImage(target.files[0])} />

      <button>Enviar</button>
    </form>
  );
}
