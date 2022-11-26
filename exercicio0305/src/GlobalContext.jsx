import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const [dados, setDados] = useState();
  function limparDados() {
    setDados(null)
  }

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://ranekapi.origamid.dev/json/api/produto"
      );
      setDados(await response.json());
    })();
  }, []);
  return (
    <GlobalContext.Provider value={{ dados, setDados,limparDados }}>
      {children}
    </GlobalContext.Provider>
  );
};
