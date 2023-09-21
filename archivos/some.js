// some(): El método some() verifica si al menos un elemento de un array cumple con una condición específica.
//  Devuelve true si al menos un elemento cumple con la condición, de lo contrario, devuelve false.

const numbers = [1, 2, 3, 4, 5];

const hasNegativeNumber = numbers.some((number) => {
  return number < 0;
});

console.log(hasNegativeNumber); // Output: false

// En este ejemplo, some() se utiliza para verificar si hay al menos un número negativo en el array numbers.
// Como no hay ningún número negativo, some() devuelve false.
