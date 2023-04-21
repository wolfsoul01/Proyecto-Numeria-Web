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
          El método de Bisección es un método numérico utilizado para encontrar las raíces de una función matemática. Este método se basa en el Teorema del Valor Intermedio, que establece que si una función es continua en un intervalo cerrado y tiene valores distintos en los extremos del intervalo, entonces la función tiene al menos una raíz en ese intervalo.

          El método de Bisección comienza dividiendo el intervalo en dos partes iguales y evaluando la función en el punto medio. Si la función tiene valores de signo opuesto en los extremos del intervalo, entonces la función tiene una raíz en el intervalo. Se selecciona el subintervalo que tiene valores de signo opuesto y se repite el proceso de dividir el intervalo en dos partes iguales y evaluar la función en el punto medio. Este proceso se repite hasta que se encuentra una aproximación satisfactoria de la raíz.
          </p>
          <p className="mb-4">
          El método de Bisección tiene numerosas aplicaciones prácticas en diferentes campos, algunos ejemplos son:
          </p>
          <p>
          <li>En finanzas, el método de Bisección se utiliza para calcular la tasa de interés efectiva en préstamos y créditos. La tasa de interés efectiva es la tasa de interés que realmente se paga o se gana en un préstamo o inversión, y se puede calcular mediante la solución de una ecuación que involucra la tasa de interés nominal y el número de periodos. El método de Bisección se puede utilizar para encontrar la tasa de interés efectiva en tales ecuaciones.
          </li>
          <li>
          En ingeniería, el método de Bisección se utiliza para encontrar la posición de equilibrio de un sistema mecánico. Por ejemplo, en un sistema de resortes y masas, la posición de equilibrio es la posición en la que la fuerza neta en el sistema es cero. Esta posición de equilibrio puede ser encontrada mediante la solución de una ecuación que involucra la posición y la fuerza en el sistema. El método de Bisección se puede utilizar para encontrar la posición de equilibrio en tales ecuaciones.
          </li>
          <li>
          En física, el método de Bisección se utiliza para encontrar las energías permitidas en un pozo de potencial. Un pozo de potencial es un modelo matemático que describe la forma en que las partículas se comportan dentro de un potencial. Las energías permitidas son los valores de energía en los cuales las partículas pueden existir en el pozo de potencial. Estas energías pueden ser encontradas mediante la solución de una ecuación que involucra la energía y el potencial. El método de Bisección se puede utilizar para encontrar las energías permitidas en tales ecuaciones.
          </li>
          </p>
        </section>
      </div>
    </div>
  );
}

export default Documentation;