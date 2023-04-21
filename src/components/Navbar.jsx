import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Numeria from "../assets/N.png";
import { NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className={` top-0 left-0 right-0 z-50 bg-white  backdrop-filter bg-opacity-10 shadow-sm backdrop-blur-sm `}
    >
      <div className='container mx-auto py-4 px-6 md:px-8'>
        <div className='flex justify-between items-center'>
          <NavLink
            to={"/"}
            className='self-center font-bold text-gray-800 cursor-pointer select-none hover:scale-90'
          >
            <img src={Numeria} className='h-12' alt='Numeria' />
          </NavLink>
          <div className='hidden md:block'>
            <ul className='flex items-center space-x-4'>
              <li>
                <NavLink
                  to={"/"}
                  className='text-gray-800 hover:text-orange-500 cursor-pointer select-none'
                >
                  Inicio
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/calcular"}
                  className='text-gray-800 hover:text-orange-500 cursor-pointer select-none'
                >
                  Calcular
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/documentation"}
                  className='text-gray-800 hover:text-orange-500 cursor-pointer select-none'
                >
                  Doc
                </NavLink>
              </li>
              <li>
                <a
                  className='text-gray-800 hover:text-orange-500 cursor-pointer select-none'
                  target='_blank'
                  href='https://github.com/wolfsoul01/Proyecto-Numeria-Web'
                >
                  <FaGithub size={30} />
                </a>
              </li>
            </ul>
          </div>

          <div className='md:hidden'>
            <input onClick={() => setIsOpen(!isOpen)} type='checkbox' id='checkbox' />
            <label for='checkbox' class='toggle'>
              <div class='bars' id='bar1'></div>
              <div class='bars' id='bar2'></div>
              <div class='bars' id='bar3'></div>
            </label> 
          </div>
        </div>

        <Transition
          show={isOpen}
          enter='transition ease-out duration-100 transform'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='transition ease-in duration-75 transform'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          {(ref) => (
            <div className='md:hidden mt-4' ref={ref}>
              <ul className='flex flex-col space-y-2'>
                <li>
                  <NavLink
                    to={"/"}
                    className='text-gray-800 hover:text-orange-500 cursor-pointer select-none'
                  >
                    Inicio
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/calcular"}
                    className='text-gray-800 hover:text-orange-500 cursor-pointer select-none'
                  >
                    Calcular
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/documentation"}
                    className='text-gray-800 hover:text-orange-500 cursor-pointer select-none'
                  >
                    Doc
                  </NavLink>
                </li>
                <li>
                  <a
                    className='text-gray-800 hover:text-orange-500 cursor-pointer select-none'
                    target='_blank'
                    href='https://github.com/wolfsoul01/Proyecto-Numeria-Web'
                  >
                    <FaGithub size={30} />
                  </a>
                </li>
              </ul>
            </div>
          )}
        </Transition>
      </div>
    </nav>
  );
};

export default Navbar;
