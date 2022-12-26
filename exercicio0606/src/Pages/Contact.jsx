import styles from "./Contact.module.css";
import typewriter from "../assets/typewriter.jpg";
import { Head } from "../Components/Head";
export function Contact() {
  return (
    <section className={`${styles.contact} animeLeft`}>
      <Head title="Ranek | Contato" description="Entre em contato"/>
      <img src={typewriter} alt="Máquina de escrever" />
      <div>
        <h1>Entre em contato.</h1>
        <ul className={styles.data}>
          <li>leokazuyukinagatani@gmail.com</li>
          <li>48 98841-4660</li>
          <li>São José-SC</li>
        </ul>
      </div>
    </section>
  );
}
