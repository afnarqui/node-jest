// Implementa una función mergeSort() que tome un array de números como argumento y devuelva un nuevo array ordenado
//  en orden ascendente utilizando el algoritmo de ordenamiento Merge Sort.

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  let mergedArr = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      mergedArr.push(left.shift());
    } else {
      mergedArr.push(right.shift());
    }
  }

  return mergedArr.concat(left, right);
}

const nums = [8, 5, 3, 9, 1, 6, 0, 2, 7, 4];
console.log(mergeSort(nums)); // Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
