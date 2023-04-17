import React from "react";

const TableBiseccion = ({ resultsArray }) => {
  return (
    <>
      <table className='bg-white table-auto mt-8 border-collapse border border-gray-300'>
        <thead>
          <tr>
            <th className='border border-gray-300 px-4 py-2'>{"Iteración"}</th>
            <th className='border border-gray-300 px-4 py-2'>{"a"}</th>
            <th className='border border-gray-300 px-4 py-2'>{"f(a)"}</th>
            <th className='border border-gray-300 px-4 py-2'>{"b"}</th>
            <th className='border border-gray-300 px-4 py-2'>{"f(b)"}</th>
            <th className='border border-gray-300 px-4 py-2'>{"c"}</th>
            <th className='border border-gray-300 px-4 py-2'>{"f(c)"}</th>
            <th className='border border-gray-300 px-4 py-2'>{"err"}</th>
          </tr>
        </thead>
        <tbody>
          {resultsArray.map((result, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-gray-200" : ""}>
              <td className='border border-gray-300 px-4 py-2'>
                {result.col1}
              </td>
              <td className='border border-gray-300 px-4 py-2'>
                {result.col2}
              </td>
              <td className='border border-gray-300 px-4 py-2'>
                {result.col3}
              </td>
              <td className='border border-gray-300 px-4 py-2'>
                {result.col4}
              </td>
              <td className='border border-gray-300 px-4 py-2'>
                {result.col5}
              </td>
              <td className='border border-gray-300 px-4 py-2'>
                {result.col6}
              </td>
              <td className='border border-gray-300 px-4 py-2'>
                {result.col7}
              </td>
              <td className='border border-gray-300 px-4 py-2'>
                {result.col8}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TableBiseccion;
