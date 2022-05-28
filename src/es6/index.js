// ---------------------------------CLASE 2 ------------------------------
//Parámetros predeterminados (Default Params)

//Versiones anteriores

function newFunction (name, age, country){
    var name = name || 'Oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
}

//es6

function newFunction2(name = 'Oscar', age = 32, country = 'MX'){
    console.log(name, age, country);
}

newFunction2();
newFunction2('Ricardo', 23, 'CO');


//Templates literals de concatenación 

//Versiones anteriores

let hello = "Hello";
let World = "World";
let epicPhrase = hello + '' + World;
console.log(epicPhrase);


//es6

let epicPhrase2 = `${hello} ${World}` 
console.log(epicPhrase2);

// ---------------------------------CLASE 2 ------------------------------

// ---------------------------------CLASE 3 ------------------------------

//Seguimos con los templates de concatenación


//Versiones anteriores
let lorem = "Lorem ipsum dolor sit amet consectetur. \n"
 + "Otra frase que necesitabamos agregar.";


//es6
//Nos permiten agregar un salto de línea solo con el ENTER.
let lorem2 = `Otra frase que necesitabamos agregar
ahora es otra frase
`;

console.log(lorem);
console.log(lorem2);


//Destructuracion de elementos

//Versiones anteriores

let person = {
    'name' : 'oscar',
    'age' : 32,
    'country': 'MX'
}
console.log(person.name, person.age);

//es6
//Podemos accerder a varios campos de nuestro objeto con esta sintaxis
//que es más amigable.

let {name, age} = person;
console.log(name,age); 



//SPREAD OPERATOR (Operador de propagación)
//Nos permite unir arrays en un solo elemento.

//Versiones anteriores

let team1 = ['Oscar','Julian','Ricardo'];
let team2 = ['Valeria','Yesica','Camila'];

let education1 = ['David', 'Oscar','Julian','Ricardo',
'Valeria','Yesica','Camila'];

console.log(education1);

//es6
//Nos permite unir diferentes elementos de forma más amigable.
let education2 = ['David', ...team1, ...team2];

console.log(education2);



//LET (nueva palabra reservada para declarar variables)

{
    var globalVar = 'Global Var';
}

{
    let globalLet = 'Global Let';
}

console.log(globalVar);
console.log(globalLet);
// En este caso sólo se imprimirá en la consola la variable globalVar.
//ya que no podemos llamar a globalLet fuera del bloque donde fué declarada.


//CONST (nueva palabra reservada para declarar constantes)

const a = 'b';

a = 'c';


// ---------------------------------CLASE 3 ------------------------------

// ---------------------------------CLASE 4 ------------------------------

//Propiedad de objetos mejorada


//Versiones anteriores

let name = 'Marcos';
let age = 31;

obj1 = {name:name, age:age};
console.log(obj1);

//es6

obj2 = {name,age};
console.log(obj2);





//Arrow Functions (funciones flechas)
//Por ejemplo vamos a recorrer un array y mostrar la propiedad
//name de cada elemento:
const names = [
    {name:'Marcos',age:31},
    {name:'Yesica',age:27}
]

//Versiones anteriores
    let listOfNames = names.map(function (item){
        console.log(item.name);
    })

//es6
    let listOfNames2 = names.map(item => console.log(item.name));

    //Otra forma en la que podemos representar las arrow functions:
    const listOfNames3 = (name,age) => {
        console.log(item.name)
    }

    //Si queremos pasar sólo un parámetro podemos hacerlo así:
    const listOfNames4 = name => {
        console.log(item.name)
    }

    //Podemos además escribirlas de esta otra forma:
    //Vamos a multiplicar un número por si mismo 
    //y retornar el valor a una constante.

    const square = num => num * num;


//Promesas

const helloPromise = () => {
    return new Promise((resolve,reject) => {
        if (true){
            resolve('Hey!');
        }else {
            reject('Ups!!');
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('hola'))
    .catch(error => console.log(error));

// ---------------------------------CLASE 4 ------------------------------

// ---------------------------------CLASE 5 ------------------------------


//Clases, módulos y generadores.
// Crearemos una clase:
class calculator{
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA,valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

//Creamos una istancia de la clase:
const calc = new calculator;

console.log(calc.sum(2,2));

//Importamos un módulo ubicado en el archivo module.js:
const hello = require('./module');

console.log(hello());

//Creamos un generator:
//Generator es una función especial que retorna una serie de
//valores según el algoritmo definido.
function* helloWorld() {
    //Crearemos un primer valor para el caso de que sea true:
    if (true){
        yield 'Hello, ';
    // La palabra clave "yield" se utiliza para pausar y reanudar
    //una función generadora.
    }
    //Y ahora creamos el segundo valor que retornará en el caso
    //de que sea true.
    if (true){
        yield 'World';
    }
};

const generatorHello = helloWorld();
// console.log(generatorHello.next().value);//"Hello"
// console.log(generatorHello.next().value);//"World"
// console.log(generatorHello.next().value);//undefined


//Si solo llamaramos a la función next() obtendriamos un objeto
//como el siguiente:
console.log(generatorHello.next());//"{ value: 'Hello, ', done: false }"










// ---------------------------------CLASE 5 ------------------------------