import { Header } from "./Header";
import { Home } from "./Home";
import { Produto } from "./Produto";
import { Produtos } from "./Produtos";

function App() {
 
  const { pathname } = window.location
  let pagina = (pathname == '/') ? 'home' : 'produtos'

  return (
    <section>
      <Header />
      {
        pagina == 'home' ? <Home /> : <Produtos />
      }
    </section>
  );
}

export default App;
