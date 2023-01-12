import { useState } from "react";

export function UserPost() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleUserPost(event) {
    event.preventDefault();
    console.log(username, email, password);

    try {
      const response = await fetch(
        "https://dogsapi.origamid.dev/json/api/user",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
          }),
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
    <form onSubmit={handleUserPost}>
      <input
        type="text"
        value={username}
        onChange={({ target }) => setUsername(target.value)}
        placeholder="username"
      />
      <input
        type="text"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
        placeholder="email"
      />

      <input
        type="password"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
        placeholder="password"
      />

      <button>Enviar</button>
    </form>
  );
}
