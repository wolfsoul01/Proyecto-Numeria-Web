import React from "react";

const BiseccionInput = () => {
   
  return (
    <div>
      <div className='mb-4'>
        <label className='block text-gray-700 font-bold mb-2' htmlFor='input2'>
          El primer intervalo:
        </label>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          id='input2'
          type='number'
          placeholder='Ej:0'
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
        />
      </div>
      <div className='mb-4'>
        <label className='block text-gray-700 font-bold mb-2' htmlFor='input4'>
          Ingrese el error:
        </label>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          id='input4'
          type='text'
          placeholder='Ej:0.1'
        />
      </div>
      <div className='mb-4'>
        <label className='block text-gray-700 font-bold mb-2' htmlFor='input4'>
          Polinomio:
        </label>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          id='input4'
          type='text'
          placeholder='Ej:2x^3+1'
        />
      </div>
    </div>
  );
};

export default BiseccionInput;
