import React from 'react';
import Guille from '../assets/Guille.png'
import Ale from '../assets/Ale.jpg'
import Dayanis from '../assets/Dayanis.jpg'
function Footer() {
  return (
    <footer className="bg-gray-800 py-4 text-11px">
      <div className="container mx-auto text-center text-white">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="mb-6 md:mb-0 md:mr-12">
            <div className="flex items-center">
              <img className="w-8 h-8 rounded-full" src={Guille} />
              <p className="ml-2">Guillermo</p>
            </div>
            <div className="flex items-center mt-2">
              <img src={Ale} alt="Alejandro" className="w-8 h-8 rounded-full" />
              <p className="ml-2">Alejandro</p>
            </div>
            <div className="flex items-center mt-2">
              <img src={Dayanis} alt="Dayanis" className="w-8 h-8 rounded-full" />
              <p className="ml-2">Dayanis</p>  
            </div>  
          </div>

          <div className="mb-6 md:mb-0">
            <p>© 2023 Creado bajo licencia Apache 2.0. Código abierto disponible en GitHub.</p> 
          </div>

          <div>
            <p>¡Gracias por tu interés y apoyo!</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;