// función en Javascript cuyos parámetros de entrada sean dos números cualquiera y
// la salida sea la multiplicación de esos números. La función no puede usar la operación por(*)

function multiplyWithoutOperator(num1, num2) {
  let result = 0;

  for (let i = 0; i < Math.abs(num2); i++) {
    result += Math.abs(num1);
  }

  // Verificar el signo del resultado
  if ((num1 < 0 && num2 > 0) || (num1 > 0 && num2 < 0)) {
    result = -result;
  }

  return result;
}
let values = multiplyWithoutOperator(3,-5)
console.log(values)


