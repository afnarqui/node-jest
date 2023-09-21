// Escriba una función en javascript que recibe un arraglo y devuelva un número mayor de dicho arreglo.
//  El arreglo de entrada solo puede ser iterado una vez y no se podrá usar FOR ni WHILE
// function findMaxNumber(array) {
//   if (array.length === 0) {
//     throw new Error("El arreglo está vacío.");
//   }

//   return Math.max(...array);
// }

// const values = findMaxNumber([2,120,3,4,5,150,3,8])
// console.log(values)

function bigger(array) {

	return array.reduce((c,e) => {

	return c > e ? c:e;
	},0);
}

const values = bigger([2,120,3,4,5,150,3,8])
console.log(values)
