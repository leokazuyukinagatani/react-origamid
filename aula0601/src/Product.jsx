import { useParams, useLocation } from "react-router-dom";

export function Product() {
  const params = useParams();
  const location = useLocation();
  console.log(location)
  
  const search = new URLSearchParams(location.search)
  console.log(search.get('memoria'))


  return <h1>Produto: {params.id}</h1>;
}
