import React, { useState } from "react";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

const ButtonCalcualr = ({ option , result }) => {
  
  
  return (
    <div className='flex items-center justify-between'>
      <button
        className='flex justify-center items-center p-2 bg-orange-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
        type='submit'
      >
        Calcular{" "}
        {option === "option2" || option === "option3"  && <BsFillArrowDownCircleFill className='ml-2' />}
      </button>
      {option === "option1" && (
        <div className='inline-block align-baseline font-bold text-sm text-gray-800 '>
          {result}
        </div>
      )}
    </div>
  );
};

export default ButtonCalcualr;
