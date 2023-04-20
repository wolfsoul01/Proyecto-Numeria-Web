export const mBiseccion = (p, a, b, err) => {
    let c;
    let iteracion = 0;
    let resultados = [];
  
    // Iteramos hasta alcanzar el error
    while (math.abs(b - a) > err) {
      //  El punto medio del intervalo
      c = (a + b) / 2;
      iteracion++;
  
      // Evaluamos la función en el punto medio
      const fc = f(c);
  
      // Guardamos los resultados de cada iteración en un objeto
      let resultado = {
        iteracion: iteracion,
        a: a,
        b: b,
        c: c,
        fc: fc
      };
      resultados.push(resultado);
  
      // Si la función evaluada en el punto medio es cero, hemos encontrado la raíz
      if (fc === 0) {
        break;
      }
  
      // entonces la raíz está en el intervalo [c, b]
      if (math.sign(fc) === math.sign(f(a))) {
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
      iteraciones: resultados
    };
  };