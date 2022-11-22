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

  const products = [
    {
      id: 1,
      nome: "Smartphone",
      preco: "R$ 2000",
      cores: ["#29d8d5", "#252a34", "#fc3766"],
    },
    {
      id: 1,
      nome: "Notebook",
      preco: "R$ 3000",
      cores: ["#ffd045", "#d4394b", "#f37c59"],
    },
    {
      id: 1,
      nome: "Smartphone",
      preco: "R$ 1500",
      cores: ["#365069", "#47c1c8", "#f95786"],
    },
  ];

  const productsFiltered = products.filter(
    ({ preco }) => Number(preco.replace("R$ ", "")) > 1500
  );

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

      {productsFiltered.map(({ id, nome, preco, cores }) => (
        <div key={id}>
          <h2>{nome}</h2>
          <p>Preço:{preco}</p>
          <ul>
            {cores.map((cor) => (
              <li style={{ backgroundColor: cor, color: 'white' }} key={cor}>
                {cor}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}

export default App;
