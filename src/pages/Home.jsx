import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import fondo from "../assets/fondo.svg";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <div className='flex h-screen'>
      <div
        className='flex flex-col justify-center items-center w-full h-full bg-cover bg-center'
        style={{ backgroundImage: `url('${fondo}')` }}
      >
        <h1 className='text-center text-3xl text-dark font-black'>
          "Hazlo facil con nosotros"
        </h1>
        <p className='text-center text-gray-500 font-light'>
          Haz cálculos precisos y controlados <br /> como un experto en
          matemáticas con nuestro método exclusivo
          <br /> ¡Deja una migaja de pan en cada paso!
        </p>
        <NavLink
          to={"/calcular"}
          className='hover:scale-105 py-4 bg-orange-500 m-5 flex place-items-center hover:bg-gray-700 text-white font-bold px-4 rounded'
        >
          <span className='flex place-items-center'>
            Comenzar{" "}
            <BsFillArrowRightCircleFill className='ml-4 animate-pulse' />
          </span>
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
