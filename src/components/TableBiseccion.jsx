import React from "react";

const TableBiseccion = ({ resultsArray }) => {
  return (
    <>
      <h1 className='text-center text-xl font-extrabold m-0'>Resultados</h1>
      <table className='bg-white table-auto mt-8 border-collapse border border-gray-300'>
        <thead>
          <tr>
            <th className='border border-gray-300 px-4 py-2'>{"Iteración"}</th>
            <th className='border border-gray-300 px-4 py-2'>{"a"}</th>
            <th className='border border-gray-300 px-4 py-2'>{"f(a)"}</th>
            <th className='border border-gray-300 px-4 py-2'>{"b"}</th>
            <th className='border border-gray-300 px-4 py-2'>{"f(b)"}</th>
            <th className='border border-gray-300 px-4 py-2'>{"c"}</th>
            <th className='border border-gray-300 px-4 py-2'>{"err"}</th>
          </tr>
        </thead>
        <tbody>
          {resultsArray.resultados.map((result, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-gray-200" : ""}>
              <td className='border border-gray-300 px-4 py-2'>
                {result.iteracion}
              </td>
              <td className='border border-gray-300 px-4 py-2'>
                {result.a}
              </td>
              <td className='border border-gray-300 px-4 py-2'>
                {result.fa}
              </td>
              <td className='border border-gray-300 px-4 py-2'>
                {result.b}
              </td>
              <td className='border border-gray-300 px-4 py-2'>
                {result.fb}
              </td>
              <td className='border border-gray-300 px-4 py-2'>
                {result.c}
              </td>
              <td className='border border-gray-300 px-4 py-2'>
                {result.fc}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Resultado: {resultsArray.raiz}</h3>
    </>
  );
};

export default TableBiseccion;
