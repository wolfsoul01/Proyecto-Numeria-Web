import React from "react";

const TableBiseccion = ({ resultsArray, polinomioUsado }) => {
  return (
    <>
      <h1 className='text-center text-xl text-orange-500 font-extrabold m-0'>
        Resultados
      </h1>
      <div className='overflow-x-auto max-w-full'>
        <table className='bg-white table-auto mt-8 border-collapse border border-gray-300'>
          <thead>
            <tr>
              <th className='border border-gray-300 px-4 py-2'>
                {"Iteración"}
              </th>
              <th className='border border-gray-300 px-4 py-2'>{"a"}</th>
              <th className='border border-gray-300 px-4 py-2'>{"f(a)"}</th>
              <th className='border border-gray-300 px-4 py-2'>{"b"}</th>
              <th className='border border-gray-300 px-4 py-2'>{"f(b)"}</th>
              <th className='border border-gray-300 px-4 py-2'>{"c"}</th>
              <th className='border border-gray-300 px-4 py-2'>{"error"}</th>
            </tr>
          </thead>
          <tbody>
            {resultsArray.resultados.map((result, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-200" : ""}>
                <td className='border border-gray-300 px-4 py-2'>
                  {result.iteracion}
                </td>
                <td className='border border-gray-300 px-4 py-2'>{result.a}</td>
                <td className='border border-gray-300 px-4 py-2'>
                  {result.fa}
                </td>
                <td className='border border-gray-300 px-4 py-2'>{result.b}</td>
                <td className='border border-gray-300 px-4 py-2'>
                  {result.fb}
                </td>
                <td className='border border-gray-300 px-4 py-2'>{result.c}</td>
                <td className='border border-gray-300 px-4 py-2'>
                  {result.fc}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h3 className='text-orange-500 font-black'>
        Polinomio : <span className='text-gray-900'>{polinomioUsado}</span>
      </h3>
      <h3 className='text-orange-500 font-black'>
        Resultado final:{" "}
        <span className='text-gray-900'>{resultsArray.raiz}</span>
      </h3>
    </>
  );
};

export default TableBiseccion;
