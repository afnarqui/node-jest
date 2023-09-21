// Implementa una función duplicateElements() que tome como argumento un array y devuelva un nuevo array
// que contenga todos los elementos duplicados del array original.

function duplicateElements(arr) {
  const uniqueElements = new Set();
  const duplicateElements = [];

  for (let i = 0; i < arr.length; i++) {
    if (uniqueElements.has(arr[i])) {
      duplicateElements.push(arr[i]);
    } else {
      uniqueElements.add(arr[i]);
    }
  }

  return duplicateElements;
}

const originalArray = [1, 2, 3, 1, 4, 2, 5, 6, 3];
console.log(duplicateElements(originalArray)); // Output: [1, 2, 3] (elementos duplicados)
