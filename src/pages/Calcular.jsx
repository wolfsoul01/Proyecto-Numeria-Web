import { useState } from "react";
import BiseccionInput from "../components/BiseccionInput";
import FunctionInput from "../components/FunctionInput";
import TableBiseccion from "../components/TableBiseccion";
import ButtonCalcualr from "../components/ButtonCalcualr";
import { useContext } from "react";
import { Contexto } from "../context/Contexto";
import { evaluarFuncion } from "../../back/evaluciacion";
import { mBiseccion } from "../../back/biseccion";

function Calcular() {
  const { func, evaluar, polinomio, primerIntervalo, segundoIntervalo, error } =
    useContext(Contexto);
  const [option, setOption] = useState("");
  const [result, setResult] = useState("");
  const [resultsArray, setResultsArray] = useState({ raiz: 0, resultados: [] });
  const [polinomioUsado, setPolinomioUsado] = useState("");
  const handleChange = (e) => {
    setOption(e.target.value);
  };
  // Resultado de ejemplo calculamos el polinomio ;)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (option == "option1") {
      setResult(evaluarFuncion(func, evaluar));
    } else if (option == "option2") {
      // Resultado de ejemplo cuando calculamos por Bicepccion ;)
      setResultsArray(
        mBiseccion(polinomio, primerIntervalo, segundoIntervalo, error)
      );
      setPolinomioUsado(polinomio);
    }
  };

  return (
    <div className='min-h-screen p-9 bg-gray-100 flex flex-col justify-center items-center'>
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
        {option === "option1" && <FunctionInput></FunctionInput>}
        {option === "option2" && <BiseccionInput></BiseccionInput>}
        <ButtonCalcualr option={option} result={result} />
      </form>
      {option === "option2" && resultsArray.resultados.length > 0 && (
        <TableBiseccion
          resultsArray={resultsArray}
          polinomioUsado={polinomioUsado}
        ></TableBiseccion>
      )}
    </div>
  );
}

export default Calcular;
