// reduce(): El método reduce() ejecuta una función reductora en cada elemento de un array,
// y devuelve un único valor resultante. La función reductora toma dos parámetros:
// el acumulador y el elemento actual.

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15

// En este ejemplo, reduce() se utiliza para sumar todos los elementos del array numbers
//y devuelve el resultado de la suma. El valor inicial del acumulador se establece en 0.
