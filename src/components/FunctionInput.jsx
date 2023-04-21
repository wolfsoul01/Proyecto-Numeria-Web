import React, { useState } from "react";
import {useContext} from 'react'
import {Contexto} from '../context/Contexto'

const FunctionInput = () => {
  const { setFunc , setEvaluar , func , evaluar} = useContext(Contexto);
  return (
    <>
      <div className='mb-4'>
        <label className='block text-gray-700 font-bold mb-2' htmlFor='input1'>
          Función
        </label>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          id='input1'
          type='text'
          placeholder='Ej:2x^3'
          onChange={(e) => setFunc(e.target.value) }
          value={func}
          required
        />
      </div>
      <div className='mb-4'>
        <label className='block text-gray-700 font-bold mb-2' htmlFor='input5'>
          Evaluar X como:
        </label>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          id='input5'
          type='number'
          placeholder='Ej:2'
          onChange={(e) => setEvaluar(e.target.value) }
          value={evaluar}
          required
        />
      </div>
    </>
  );
};

export default FunctionInput;
