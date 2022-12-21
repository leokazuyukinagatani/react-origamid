import { Link } from "react-router-dom";
import { Head } from "./Head";

export function Home() {
  return (
    <>
      <Head title="Home" description="Este é a home page"/>
      <h1>Home</h1>
      <p>Este é o home</p>
      <Link to="product/notebook">Notebook</Link>{" "}
      <Link to="product/smarthphone">Smarthphone</Link>
    </>
  );
}
