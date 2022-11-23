export function Produto({nome, propriedades}) {
  return (
    <div style={{border: '1px solid black', width: '100%', margin: '1rem', padding:'1rem'}}> 
      <h3>{nome}</h3>
      <ul>
        {
          propriedades.map(propriedade => <li key={propriedade}>{propriedade}</li>)
        }
      </ul>
    </div>
  );
}
