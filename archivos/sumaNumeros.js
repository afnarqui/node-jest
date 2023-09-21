// const sumNumbers = (limit) => {
//   let sum = 0

//   for (let i = 0; i< limit; i++) {
//     sum += i
//   }

//   return sum
// }

// console.log(sumNumbers(100000000000000))
const memoizedSumNumbers = (() => {
  const cache = {};

  return (limit) => {
    if (limit in cache) {
      return cache[limit];
    }

    let sum = 0;

    for (let i = 0; i < limit; i++) {
      sum += i;
    }

    cache[limit] = sum;
    return sum;
  };
})();

console.log(memoizedSumNumbers(10000000000));
