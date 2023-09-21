// Implementa una función groupByProperty() que tome como argumento un array de objetos y una propiedad
// y devuelva un objeto donde las claves son los valores únicos de la propiedad y
// los valores son subarrays de objetos que comparten el mismo valor en esa propiedad.
function groupByProperty(arr, property) {
  return arr.reduce((acc, obj) => {
    const value = obj[property];
    if (!acc[value]) {
      acc[value] = [];
    }
    acc[value].push(obj);
    return acc;
  }, {});
}

const data = [
  { id: 1, category: 'fruits', name: 'apple' },
  { id: 2, category: 'fruits', name: 'banana' },
  { id: 3, category: 'vegetables', name: 'carrot' },
  { id: 4, category: 'fruits', name: 'orange' },
  { id: 5, category: 'vegetables', name: 'tomato' },
];

console.log(groupByProperty(data, 'category'));
/*
Output:
{
  fruits: [
    { id: 1, category: 'fruits', name: 'apple' },
    { id: 2, category: 'fruits', name: 'banana' },
    { id: 4, category: 'fruits', name: 'orange' }
  ],
  vegetables: [
    { id: 3, category: 'vegetables', name: 'carrot' },
    { id: 5, category: 'vegetables', name: 'tomato' }
  ]
}
*/
