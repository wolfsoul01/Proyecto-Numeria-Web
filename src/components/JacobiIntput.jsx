import React from "react";
import { useContext } from "react";
import { Contexto } from "../context/Contexto";
const JacobiIntput = () => {
  const {matrix, setMatrix, base, setBase, tolerance, setTolerance, maxIterations, setMxIterations } = useContext(Contexto);

  return (
    <div>
      <div className='mb-4'>
        <label className='block text-gray-700 font-bold mb-2' htmlFor='input2'>
        Matrix:
        </label>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          id='input2'
          type='text'
          placeholder='Ej:[[5, -1], [1, -3]]'
          onChange={(e) => setMatrix(e.target.value)}
          value={matrix}
          required
        />
      </div>
      <div className='mb-4'>
        <label className='block text-gray-700 font-bold mb-2' htmlFor='input4'>
        Base:
        </label>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          id='input4'
          type='text'
          placeholder='Ej:[4, 1]'
          onChange={(e) => setBase(e.target.value)}
          value={base}
          required
        />
      </div>
      <div className='mb-4'>
        <label className='block text-gray-700 font-bold mb-2' htmlFor='input3'>
        Tolerance:
        </label>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          id='input3'
          type='number'
          placeholder='Ej:0.0001'
          onChange={(e) => setTolerance(e.target.value)}
          value={tolerance}
          required
        />
      </div>
      <div className='mb-4'>
        <label className='block text-gray-700 font-bold mb-2' htmlFor='input4'>
        MaxIterations:
        </label>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          id='input4'
          type='number'
          placeholder='Ej:100'
         onChange={(e) => setMxIterations(e.target.value)}
          value={maxIterations}
          required
        />
      </div>   
    </div>
  );
};

export default JacobiIntput;
