// Implementa una función shuffleArray() que tome como argumento un array y lo mezcle de manera aleatoria,
//generando un nuevo array con los elementos en un orden aleatorio. El array original no debe ser modificado

function shuffleArray(arr) {
  const shuffledArray = arr.slice(); // Copia el array original

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
}

const originalArray = [1, 2, 3, 4, 5];
console.log(shuffleArray(originalArray)); // Output: [4, 2, 1, 5, 3] (orden aleatorio)
console.log(originalArray); // Output: [1, 2, 3, 4, 5] (array original sin modificar)
