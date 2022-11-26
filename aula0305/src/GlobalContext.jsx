import { useState } from "react";
import { createContext } from "react";

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const [contar, setContar] = useState(0);

  return (
    <GlobalContext.Provider value={{ contar, setContar }}>
      {children}
    </GlobalContext.Provider>
  );
};
