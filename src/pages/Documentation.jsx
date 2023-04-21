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
      <div className="container mx-auto my-8">
        <section id="funcion">
          <h2 className="text-2xl font-bold mb-4">Cálculo de un polinomio por el método de Horner</h2>
          <p className="mb-4">
            El método de Horner es una técnica para evaluar un polinomio en un punto dado de manera eficiente.
            Para utilizar este método, se requiere una expresión polinómica expresada en forma de Horner, que
            consiste en dividir sucesivamente los coeficientes del polinomio por el valor que se está evaluando,
            y luego sumar el resultado a partir del término de menor grado. De esta forma, se evita tener que
            realizar múltiples operaciones para evaluar el polinomio completo.
          </p>
          <p className="mb-4">
            El método de Horner es especialmente útil para el cálculo de polinomios de grado alto, ya que reduce
            la cantidad de operaciones necesarias para evaluarlos. En resumen, el método de Horner es una técnica
            eficiente y efectiva para evaluar polinomios en un punto dado.
          </p>
        </section>
        <section id="biseccion" className="mb-20">
          <h2 className="text-2xl font-bold mb-4">Cálculo de un polinomio por el método de Bisección</h2>
          <p className="mb-4">
            El método de Bisección es un algoritmo numérico utilizado para encontrar las raíces de una función.
            Este método se basa en el teorema del valor intermedio, que establece que si una función es continua
            en un intervalo cerrado, entonces toma todos los valores que se encuentran entre el valor de la función
            en los extremos del intervalo. El método de Bisección consiste en dividir sucesivamente el intervalo
            en dos partes iguales y determinar en cuál de ellas se encuentra la raíz buscada. Este proceso se
            repite hasta que se alcanza la precisión deseada.
          </p>
          <p className="mb-4">
            El método de Bisección es un algoritmo sencillo y robusto para encontrar raíces de una función, pero
            puede ser lento para funciones complicadas o con múltiples raíces. En general, se recomienda utilizar
            otros métodos numéricos más avanzados para problemas más complejos.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Documentation;