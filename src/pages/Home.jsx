import React from "react";
import { BiArrowFromLeft } from "react-icons/bi";
import fondo from "../assets/fondo.jpg";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div className='flex flex-col h-screen'>
      <div
        className='flex flex-col justify-center items-center w-full h-full bg-cover bg-center'
        style={{ backgroundImage: `url('${fondo}')` }}
      >
        <h1 className='text-center text-orange-500 text-3xl text-dark font-black'>
          "Hazlo facil con nosotros"
        </h1>
        <p className='text-center text-gray-200 font-light'>
          Haz cálculos precisos y controlados <br /> como un experto en
          matemáticas con nuestro método exclusivo
          <br /> ¡Deja una migaja de pan en cada paso!
        </p>
     
        <NavLink
          to={"/calcular"}
          className='cta flex place-items-center font-black m-5 text-gray-600'
        >
          <span>Comenzar </span>
          <BiArrowFromLeft className='svg ' />
        </NavLink>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
