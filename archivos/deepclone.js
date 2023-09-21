// Implementa una función deepClone() que tome como argumento un objeto y devuelva una copia profunda
// (deep copy) del mismo. La copia profunda debe incluir
// cualquier objeto o array anidado dentro del objeto original.

function deepClone(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  let clone;

  if (Array.isArray(obj)) {
    clone = [];
    for (let i = 0; i < obj.length; i++) {
      clone[i] = deepClone(obj[i]);
    }
  } else {
    clone = {};
    for (let key in obj) {
      clone[key] = deepClone(obj[key]);
    }
  }

  return clone;
}

const obj = {
  name: 'John',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'New York',
    country: 'USA'
  },
  hobbies: ['reading', 'cooking']
};

const clone = deepClone(obj);
clone.address.city = 'Boston';
console.log(obj.address.city); // Output: New York
console.log(clone.address.city); // Output: Boston
