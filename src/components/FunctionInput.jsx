import React from "react";

const FunctionInput = () => {
  return (
    <>
      <div className='mb-4'>
        <label className='block text-gray-700 font-bold mb-2' htmlFor='input1'>
          Polinomio
        </label>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          id='input1'
          type='text'
          placeholder='Ej:2x^3'
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
        />
      </div>
    </>
  );
};

export default FunctionInput;
