import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    console.log('Fazer Login')
    navigate("/");
  }

  return <button onClick={handleLogin}>Login</button>;
}
