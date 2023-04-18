import * as math from "mathjs";

// Crear y evaluar la funcion a la vez 
export const evaluarFuncion = (p, px = 1, py = 1) => {
  const f = math.parse(p).compile();
  const scope = { x: px }; // es alcanze de kas variables que controla 
  return f.evaluate(scope);
};
// para crear un funcion sola 
export const crearFuncion = (p) => {
  return math.parse(p).compile();
};


/*  const expr = 'a^2 + b^2';
const scope = { a: 3, b: 4 };
const result = math.evaluate(expr, scope);

 */
