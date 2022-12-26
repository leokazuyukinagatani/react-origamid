import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Head } from "../Components/Head";
import styles from "./Product.module.css";

export function Product() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();
  useEffect(() => {
    async function fetchProduct(url) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProduct(json);
      } catch (erro) {
        setError("Um erro ocorreu");
      } finally {
        setLoading(false);
      }
    }

    fetchProduct(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

  if (loading) return <div className="loading"></div>;
  if (error) return <p> {error}</p>;
  if (product === null) return <></>;
  return (
    <section className={styles.product + " animeLeft"}>
      <Head
        title={`Ranek | ${product.nome}`}
        descrition={`Ranek | Esse é um produto: ${product.nome}`}
      />
      <div>
      {product.fotos.map((foto) => (
        <img key={foto.src} src={foto.src} alt={foto.title} />
      ))}
      </div>
   
      <div>
        <h1>{product.nome}</h1>
        <span className={styles.price}>R${product.preco}</span>
        <p className={styles.description}>{product.descricao}</p>
      </div>
    </section>
  );
}
