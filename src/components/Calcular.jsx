import { useState } from "react";

function Calcular() {
  const [option, setOption] = useState("");
  const [result, setResult] = useState("");
  const [resultsArray, setResultsArray] = useState([]);

  const handleChange = (event) => {
    setOption(event.target.value);
  };
  // Resultado de ejemplo calculamos el polinomio ;)
  const handleSubmit = (event) => {
    event.preventDefault();
    setResult("resultado");

    // Resultado de ejemplo cuando calculamos por Bicepccion ;)
    setResultsArray([
      {
        col1: "1523",
        col2: "22",
        col3: "3534",
        col4: "423",
        col5: "523",
        col6: "123",
        col7: "123",
        col8: "8123123123123123",
      },
      {
        col1: "123",
        col2: "223",
        col3: "2343",
        col4: "423",
        col5: "5234",
        col6: "6123",
        col7: "7234",
        col8: "812312312312312312312313",
      },
    ]);
  };

  return (
    <div className='min-h-screen bg-gray-100 flex flex-col justify-center items-center'>
      <form
        className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
        onSubmit={handleSubmit}
      >
        <div className='mb-4'>
          <label
            className='block text-gray-700 font-bold mb-2'
            htmlFor='option'
          >
            Numeria:
          </label>
          <div className='relative'>
            <select
              className='block appearance-none w-full bg-gray-200 focus:bg-white border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline'
              id='option'
              value={option}
              onChange={handleChange}
            >
              <option value=''>Seleccione una opción</option>
              <option value='option1'>Calcular Polinomio</option>
              <option value='option2'>Biseccion</option>
            </select>
            <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
              <svg
                className='fill-current h-4 w-4'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
              >
                <path
                  fillRule='evenodd'
                  d='M14.95 7.95a1 1 0 01-1.414 0L10 4.414l-3.536 3.536a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
          </div>
        </div>
        {option === "option1" && (
          <>
            <div className='mb-4'>
              <label
                className='block text-gray-700 font-bold mb-2'
                htmlFor='input1'
              >
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
              <label
                className='block text-gray-700 font-bold mb-2'
                htmlFor='input5'
              >
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
        )}
        {option === "option2" && (
          <div>
            <div className='mb-4'>
              <label
                className='block text-gray-700 font-bold mb-2'
                htmlFor='input2'
              >
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
              <label
                className='block text-gray-700 font-bold mb-2'
                htmlFor='input3'
              >
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
              <label
                className='block text-gray-700 font-bold mb-2'
                htmlFor='input4'
              >
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
              <label
                className='block text-gray-700 font-bold mb-2'
                htmlFor='input4'
              >
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
        )}
        <div className='flex items-center justify-between'>
          <button
            className='bg-orange-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            type='submit'
          >
            Calcular
          </button>
          <div className='inline-block align-baseline font-bold text-sm text-orange-500 hover:text-blue-800'>
            {result}
          </div>
        </div>
      </form>
      {option === "option2" && resultsArray.length > 0 && (
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
      )}
    </div>
  );
}

export default Calcular;
