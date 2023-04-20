import React, { createContext, useState } from "react";

export const Contexto = createContext();

export const Data = ({ children }) => {
  //Calcular Function state.
  const [func, setFunc] = useState("");
  const [evaluar, setEvaluar] = useState("");
  //Biseccion.
  const [polinomio, setPolinomio] = useState([]);
  const [primerIntervalo, setPrimerIntervalo] = useState([]);
  const [segundoIntervalo, setSegundoIntervalo] = useState([]);
  const [error, setError] = useState([]);

  return (
    <Contexto.Provider
      value={{
        func,
        evaluar,
        setFunc,
        setEvaluar,
        polinomio,
        setPolinomio,
        primerIntervalo,
        setPrimerIntervalo,
        segundoIntervalo,
        setSegundoIntervalo,
        error,
        setError,
      }}
    >
      {children}
    </Contexto.Provider>
  );
};
