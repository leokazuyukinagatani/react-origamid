import { useParams, useLocation, NavLink, Outlet } from "react-router-dom";
import { Helmet } from 'react-helmet';

export function Product() {
  const params = useParams();
  const location = useLocation();
  console.log(location);

  const search = new URLSearchParams(location.search);
  console.log(search.get("memoria"));

  return (
    <>
      <Helmet>
        <title>Product</title>
        <meta name="description" content="Esta é o pagina product" />
      </Helmet>
      <h1>Produto: {params.id}</h1>
      <Outlet/>
      <nav>
        <NavLink to="">Descricao</NavLink>
        <NavLink to="review">Avaliação</NavLink>
        <NavLink to="custom">Customizado</NavLink>
      </nav>
    </>
  );
}
