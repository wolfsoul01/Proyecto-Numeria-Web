import * as math from "mathjs";
import { evaluarFuncion } from "./evaluciacion";

export const mBiseccion = (f, a, b, err) => {
  let c;
  let iteracion = 0;
  let resultados = [];

  // Iteramos hasta alcanzar el error
  while (math.abs(b - a) >= err) {
    //  El punto medio del intervalo
    c = (a + b) / 2;
    iteracion++;

    // Evaluamos la función en el punto medio
    const fc = evaluarFuncion(f, c);

    // Guardamos los resultados de cada iteración en un objeto
    let resultado = {
      iteracion: iteracion,
      a: a,
      fa: evaluarFuncion(f, a),
      b: b,
      fb: evaluarFuncion(f, b),
      c: c,
      fc: fc,
    };
    resultados.push(resultado);

    // Si la función evaluada en el punto medio es cero, hemos encontrado la raíz
    if (fc === 0) {
      break;
    }

    // entonces la raíz está en el intervalo [c, b]
    if (math.sign(fc) === math.sign(evaluarFuncion(f, a))) {
      a = c;
    }

    // entonces la raíz está en el intervalo [a, c]
    else {
      b = c;
    }
  }

  // Devolve un objeto con  resultado final y  los resultados de las iteraciones
  return {
    raiz: c,
    resultados,
  };
};
