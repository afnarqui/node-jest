// Implementa una función mergeObjects() que tome como argumento dos objetos y devuelva un nuevo objeto
//que contenga las propiedades de ambos objetos combinadas. Si alguna propiedad
//se repite en ambos objetos, el valor del objeto pasado como segundo argumento debe prevalecer.

function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

const obj1 = { name: 'John', age: 30, address: '123 Main St' };
const obj2 = { age: 35, hobbies: ['reading', 'cooking'] };

console.log(mergeObjects(obj1, obj2));
/*
Output:
{
  name: 'John',
  age: 35,
  address: '123 Main St',
  hobbies: ['reading', 'cooking']
}
*/
