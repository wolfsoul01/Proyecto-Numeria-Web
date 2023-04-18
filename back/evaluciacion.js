import * as math from 'mathjs';

export const evaluarFuncion = (p, px=1, py=1) => {
  const f = math.parse(p).compile();
  const scope={x:px}
   return f.evaluate(scope);
};

export const crearFuncion = (p) => {
    return  math.parse(p).compile();
  };
  


