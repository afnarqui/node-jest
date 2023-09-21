// every(): El método every() verifica si todos los elementos de un array cumplen con una condición específica.
// Devuelve true si todos los elementos cumplen con la condición, de lo contrario, devuelve false.

const numbers = [1, 2, 3, 4, 5];

const allPositive = numbers.every((number) => {
  return number > 0;
});

console.log(allPositive); // Output: true

// En este ejemplo, every() se utiliza para verificar si todos los números en el array numbers son mayores que cero.
// Como todos los números cumplen con esta condición, every() devuelve true.
