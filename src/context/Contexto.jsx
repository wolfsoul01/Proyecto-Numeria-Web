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
  //Jacobi state.matrix, b, tolerance, maxIterations
  const [matrix, setMatrix] = useState([]);
  const [base, setBase] = useState([]);
  const [tolerance, setTolerance] = useState([]);
  const [maxIterations, setMxIterations] = useState([]);


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
        setError, matrix, setMatrix, base, setBase, tolerance, setTolerance, maxIterations, setMxIterations
      }}
    >
      {children}
    </Contexto.Provider>
  );
};
