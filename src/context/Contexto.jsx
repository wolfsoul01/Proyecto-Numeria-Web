import React, { createContext, useState } from "react";

export const Contexto = createContext();

export const Data = ({ children }) => {
  //Calcular Function state.
  const [func, setFunc] = useState("");
  const [evaluar, setEvaluar] = useState("");
  //Biseccion.
  const [resultsArray, setResultsArray] = useState([]);

  return (
    <Contexto.Provider
      value={{
        func,
        evaluar,
        setFunc,
        setEvaluar,
        resultsArray,
        setResultsArray,
      }}
    >
      {children}
    </Contexto.Provider>
  );
};
