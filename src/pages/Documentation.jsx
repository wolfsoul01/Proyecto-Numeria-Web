import React from 'react';

function Documentation() {
  return (
    <div className="relative md:px-14">
      <div className="container mx-auto text-center py-4">
        <h1 className="text-4xl font-bold my-8 text-orange-500">Documentación</h1>
      </div>
      <div className="fixed bottom-0 left-0 w-full bg-gray-800 py-2">
        <div className="container  mx-auto flex justify-center text-white text-sm">
          <a href="#funcion" className="px-4 hover:text-gray-300">
            Función
          </a>
          <a href="#biseccion" className="px-4 hover:text-gray-300">
            Bisección
          </a>
        </div>
      </div>
      <div className="container mx-auto my-8 px-2">
        <section id="funcion">
          <h2 className="text-2xl font-bold mb-4">1.Evaluación de expresiones matemáticas</h2>
          <p className="mb-4">
          La evaluación de expresiones matemáticas es un método utilizado en matemáticas para calcular el valor de una expresión matemática. Este método se basa en el uso de reglas algebraicas y operaciones matemáticas para simplificar y evaluar expresiones matemáticas complejas.
          La evaluación de expresiones matemáticas se utiliza comúnmente en áreas de las matemáticas como el cálculo y el análisis matemático, así como en otras áreas de la ciencia y la ingeniería donde se requiere el cálculo de valores numéricos a partir de expresiones matemáticas complejas.

          </p>
          <p className="mb-4">
          Un ejemplo práctico de la evaluación de expresiones matemáticas es en la resolución de ecuaciones y sistemas de ecuaciones. Al utilizar la evaluación de expresiones matemáticas, es posible calcular los valores de las variables en una ecuación o sistema de ecuaciones, lo que permite resolver problemas complejos en áreas como la física, la ingeniería y la economía.
          </p>
        </section>
        <section id="biseccion" className="mb-20">
          <h2 className="text-2xl font-bold mb-4">2.Cálculo de un polinomio por el método de Bisección</h2>
          <p className="mb-4">
            
          </p>
          <p className="mb-4">
            
          </p>
        </section>
      </div>
    </div>
  );
}

export default Documentation;