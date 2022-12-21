import { useEffect} from 'react'
import { NavLink, useLocation } from "react-router-dom";

export function Header() {
  const location = useLocation ()

  useEffect(() => {
    console.log('mudou a rota')
  }, [location])
  
  console.log(<NavLink />);
  return (
    <nav>
      <NavLink
        to="/"
        style={(isActive) => ({
          color: isActive ? "green" : "blue",
        })}
        end
      >
        Home{" |  "}
      </NavLink>
      <NavLink
        to="about"
        style={(isActive) => ({
          color: isActive ? "green" : "blue",
        })}
      >
        Sobre{" |  "}
      </NavLink>
      <NavLink
        to="login"
        style={(isActive) => ({
          color: isActive ? "green" : "blue",
        })}
      >
        Login
      </NavLink>
    </nav>
  );
}
