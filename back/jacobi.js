import { zeros, norm, subtract } from 'mathjs';

function jacobiMethod(matrix, b, tolerance, maxIterations) {
  const n = matrix.length;
  let x = zeros(n)._data; // Convertimos el vector a un array
  let xNext = zeros(n)._data; // Convertimos el vector a un array
  let iteration = 0;

  const result = {
    iterations: [],
    solution: null,
    error: null,
    errorMessage: null
  };

  while (iteration < maxIterations) {
    for (let i = 0; i < n; i++) {
      let sum = 0;
      for (let j = 0; j < n; j++) {
        if (j !== i) {
          sum += matrix[i][j] * x[j];
        }
      }
      xNext[i] = (b[i] - sum) / matrix[i][i];
    }

    let error = norm(subtract(xNext, x), 'inf');

    result.iterations.push({
      iteration: iteration,
      x: [...xNext],
      error: error
    });

    if (error < tolerance) {
      result.solution = [...xNext];
      result.error = error;
      return result;
    }

    x = [...xNext];
    iteration++;
  }

  result.errorMessage = `El método de Jacobi no convergió después de ${maxIterations} iteraciones.`;
  return result;
}

// Ejemplo de uso:
/* const matrix = [[5, -1], [1, -3]];
const b = [4, 1];
const tolerance = 0.0001;
const maxIterations = 100;

const result = jacobiMethod(matrix, b, tolerance, maxIterations);
console.log("Resultado: ", result); */
