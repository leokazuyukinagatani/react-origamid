import { useEffect, useState } from "react";
import styles from "./Products.module.css";
import { Link } from "react-router-dom";
import { Head } from "../Components/Head";

export function Products() {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto")
      .then((response) => response.json())
      .then((json) => setProducts(json));
  }, []);

  if (products === null) return null;
  return (
    <section className={styles.products + " animeLeft"}>
      <Head title={`Ranek`} descrition={`Descricao do site Ranek`} />
      {products.map((product) => (
        <Link to={`product/${product.id}`} key={product.id}>
          <img src={product.fotos[0].src} alt={product.fotos[0].titulo} />
          <h1 className={styles.nome}>{product.nome}</h1>
        </Link>
      ))}
    </section>
  );
}
