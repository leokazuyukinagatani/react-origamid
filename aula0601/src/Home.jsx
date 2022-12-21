import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <h1>Home</h1>
      <p>Este é o home</p>
      <Link to="product/notebook">Notebook</Link>{' '}
      <Link to="product/smarthphone">Smarthphone</Link>
    </>
  );
}
