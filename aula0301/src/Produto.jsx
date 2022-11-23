export function Produto({ nome, preco, fotos, descricao, vendido }) {
  return (
    <>
      <p>Nome: {nome}</p>
      <p>Preco: {preco}</p>
      {fotos && <img src={fotos[0].src} alt={fotos[0].titulo} />}
      <p>Descricao: {descricao}</p>
      <p>Status: {vendido === "true" ? "Vendido" : "Disponivel"}</p>
    </>
  );
}
