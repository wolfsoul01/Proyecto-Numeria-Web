import React from "react";
import { useContext } from "react";
import { Contexto } from "../context/Contexto";
const BiseccionInput = () => {
  const {
    polinomio,
    setPolinomio,
    primerIntervalo,
    setPrimerIntervalo,
    segundoIntervalo,
    setSegundoIntervalo,
    error,
    setError,
  } = useContext(Contexto);

  return (
    <div>
      <div className='mb-4'>
        <label className='block text-gray-700 font-bold mb-2' htmlFor='input2'>
          Polinomio:
        </label>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          id='input2'
          type='text'
          placeholder='Ej:2x^3'
          onChange={(e) => setPolinomio(e.target.value)}
          value={polinomio}
          required
        />
      </div>
      <div className='mb-4'>
        <label className='block text-gray-700 font-bold mb-2' htmlFor='input4'>
          Primer intervalo:
        </label>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          id='input4'
          type='number'
          placeholder='Ej:0'
          onChange={(e) => setPrimerIntervalo(e.target.value)}
          value={primerIntervalo}
          required
        />
      </div>
      <div className='mb-4'>
        <label className='block text-gray-700 font-bold mb-2' htmlFor='input3'>
          El 2do intervalo:
        </label>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          id='input3'
          type='number'
          placeholder='Ej:1'
          onChange={(e) => setSegundoIntervalo(e.target.value)}
          value={segundoIntervalo}
          required
        />
      </div>
      <div className='mb-4'>
        <label className='block text-gray-700 font-bold mb-2' htmlFor='input4'>
          Ingrese el error:
        </label>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          id='input4'
          type='number'
          placeholder='Ej:0.1'
          onChange={(e) => setError(e.target.value)}
          value={error}
          required
        />
      </div>
      
    </div>
  );
};

export default BiseccionInput;
