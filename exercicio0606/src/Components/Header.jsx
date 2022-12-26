import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";


export function Header() {
  return(
    <nav className={styles.header}>
      <ul>
        <li><NavLink className={styles.link} to='/' end>Home</NavLink></li>
        <li><NavLink className={styles.link} to='/contact'>Contato</NavLink></li>
      </ul>
    </nav>
  )
}