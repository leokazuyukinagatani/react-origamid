import { Titulo } from "./Titulo";

export function Home() {
  return(
    <section>
      <Titulo texto="Home" />
      <p>Esta é a home</p>
      {/* {
        produtos &&
        produtos.map((produto) => <Produto data={produto}/>)
      } */}
    </section>
  )
}