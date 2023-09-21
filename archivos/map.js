// map(): El método map() crea un nuevo array con los resultados de aplicar
// una función a cada elemento del array original.
// No altera el array original y devuelve un nuevo array del mismo tamaño.
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((number) => {
  return number * 2;
});

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
console.log(numbers); // Output: [1, 2, 3, 4, 5]
