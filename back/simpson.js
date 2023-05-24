const math = require("mathjs");

function gaussSeidelMethod(matrix, b, tolerance, maxIterations) {
  const n = matrix.length;
  let x = math.zeros(n)._data;
  let xNext = math.zeros(n)._data;
  let iteration = 0;

  const result = {
    iterations: [],
    solution: null,
    error: null,
    errorMessage: null,
  };

  while (iteration < maxIterations) {
    for (let i = 0; i < n; i++) {
      let sum1 = 0;
      let sum2 = 0;

      for (let j = 0; j < i; j++) {
        sum1 += matrix[i][j] * xNext[j];
      }

      for (let j = i + 1; j < n; j++) {
        sum2 += matrix[i][j] * x[j];
      }

      xNext[i] = (b[i] - sum1 - sum2) / matrix[i][i];
    }

    let error = math.norm(math.subtract(xNext, x), "inf");

    result.iterations.push({
      iteration: iteration,
      x: [...xNext],
      error: error,
    });

    if (error < tolerance) {
      result.solution = [...xNext];
      result.error = error;
      return result;
    }

    x = [...xNext];
    iteration++;
  }

  result.errorMessage =
    "El método de Gauss-Seidel no convergió después de " +
    maxIterations +
    " iteraciones.";
  return result;
}

// Ejemplo de uso:
const matrix = [
  [5, -1],
  [1, -3],
];
const b = [4, 1];
const tolerance = 0.0001;
const maxIterations = 100;

const result = gaussSeidelMethod(matrix, b, tolerance, maxIterations);
console.log("Resultado: ", result);
