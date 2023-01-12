import { useState } from "react";

export function TokenPost() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  async function handleTokenPost(event) {
    event.preventDefault();
    console.log(username, password);

    try {
      const response = await fetch(
        "https://dogsapi.origamid.dev/json/jwt-auth/v1/token",
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
      setToken(json.token)
      return json;
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form onSubmit={handleTokenPost}>
      <input
        type="text"
        value={username}
        onChange={({ target }) => setUsername(target.value)}
        placeholder="username"
      />
   
      <input
        type="password"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
        placeholder="password"
      />
      <p style={{wordBreak: 'break-all'}}>{token}</p>
      <button>Enviar</button>
    </form>
  );
}
