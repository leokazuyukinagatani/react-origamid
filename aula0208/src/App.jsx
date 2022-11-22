function App() {
  const produtos = ["Notebook", "Tablet", "Smartphone"];
  const livros = [
    {
      nome: "A Game of Thrones",
      ano: 1996,
    },
    {
      nome: "A Clash of Kings",
      ano: 1998,
    },
    {
      nome: "A Storm of Swords",
      ano: 2000,
    },
  ];
  return (
    <>
      <h2>Produtos</h2>
      <ul>
        {produtos.map((produto) => (
          <li key={produto}>{produto}</li>
        ))}
      </ul>

      <h2>Livros</h2>
      <ul>
        {livros
          .filter(({ ano }) => ano >= 1998)
          .map(({ nome, ano }) => (
            <li key={nome}>
              {nome}, publicado em {ano}
            </li>
          ))}
      </ul>
    </>
  );
}

export default App;
