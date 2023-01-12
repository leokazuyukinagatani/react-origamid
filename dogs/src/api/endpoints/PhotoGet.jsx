import { useState } from "react";

export function PhotoGet() {
  const [photoId, setPhotoId] = useState("");

  async function handlePhotoGet(event) {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://dogsapi.origamid.dev/json/api/photo/" + photoId
      );

      const json = await response.json();
      console.log(json);
      return json;
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form onSubmit={handlePhotoGet}>
      <input
        type="text"
        value={photoId}
        onChange={({ target }) => setPhotoId(target.value)}
      />

      <button>Buscar</button>
    </form>
  );
}
