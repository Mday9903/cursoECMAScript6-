// ---------------------------------CLASE 10 ------------------------------

//Nuevos métodos con arrays

//Array.flat()

let array =[1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(0));//[ 1, 2, 3, [ 1, 2, 3, [ 1, 2, 3 ]]]
console.log(array.flat(1));//[ 1, 2, 3, 1, 2, 3, [ 1, 2, 3 ] ]
console.log(array.flat(2));//[1, 2, 3, 1, 2,3, 1, 2, 3]

//Array.flat() nos permite aplanar un array enviandole como
//parámetro la profundidad a la que queremos trabajar.



//Array.flatMap()

//flatMap() nos va a permitir mapear cada elemento de un array,
// después pasarle una función y aplanarlo según el resultado.

let array =[1,2,3,4,5];

console.log(array.flatMap(value => [value, value * 2]));
//[1, 2, 2, 4, 3, 6, 4, 8, 5, 10]



//Nuevos métodos con string

//String.trimStart()

//El método trimStart() nos va a permitir borrar los espacios 
//en blancoque contenga un String al principio.

let hello = '                hello world'

console.log(hello);
console.log(hello.trimStart());
//                hello world
//hello world


//String.trimEnd()

//El método trimEnd() nos va a permitir borrar los espacios 
//en blancoque contenga un String al final.

let hello = 'hello world               ';
console.log(hello);
console.log(hello.trimEnd());
//hello world               |
//hello world


//Array.fromEntries()

//El método fromEntries() nos sirve para transformar clave valor en un 
//objeto. Útil cuando estas trabajando con arrays y quieres
//transformarlo a objeto.

let entries = [
    ["name","oscar"],
    ["age",32]
];

console.log(Object.fromEntries(entries));
//{ name: 'oscar', age: 32 }



//Symbol().description
//Symbol.description nos permite acceder a una
//descripción de un objeto de tipo simbolo.

let mySymbol = 'My Symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description);
//My Symbol