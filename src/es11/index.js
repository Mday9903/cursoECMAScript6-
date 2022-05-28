//Dinamic import: Con esta herramienta vamos a realizar una 
//importación de algún elemento de forma dinámica para 
//poder usar piezas de código.

const button = document.getElementById("btn");

button.addEventListener("click",async function(){
    const module = await import("./file.js");
    module.hello();
})




//Big Int: Nos permite trabajar con números enteros mayores a 
//2^53(dos elevado a la cincuenta y tres).

//Para trabajar con BigInt tenemos dos opciones:
//1 - Agregarle "n" al final del número:
const aBigNumber = 9007199254740991n;

//2- Con el método BigInt(número):
const anotherBigNumber = BigInt(9007199254740991);

console.log(aBigNumber); //9007199254740991n
console.log(anotherBigNumber); //9007199254740991n





//Promise.allSettled(): Esta método nos va a devolver una promesa
//que se resuelve después de que todas las promesas dadas se hayan
//cumplido o rechazado, en una serie de objeto que se describe
//el resultado de cada promesa.

const promise1 = new Promise((resolve,reject) => reject("reject"));
const promise2 = new Promise((resolve,reject) => resolve("resolve"));
const promise3 = new Promise((resolve,reject) => resolve("resolve 1"));

Promise.allSettled([promise1,promise2,promise3])
    .then(Response => console.log(Response));
// [
//     { status: 'rejected', reason: 'reject' },
//     { status: 'fulfilled', value: 'resolve' },
//     { status: 'fulfilled', value: 'resolve 1' }
//   ]






//Global this: 

console.log(window);
console.log(globalThis);






//Nullish coalescing operator (??):

/*Nos ayuda a trabajar con elementos nulos. Es un operador lógico
que nos devuelve su operando del lado derecho cuando el operador
del lado izquierdo es nulo o indefinido y de lo contrario devuelve
su operador del lado izquierdo.*/

const fooo = null ?? 'default string';
console.log(fooo); //default string

const fooo2 = "valor" ?? 'default string';
console.log(fooo2); //valor




//Optional chaining (?.):
/* Vamos a poder trabajar diferentes niveles de arrays 
y objetos. */

const user = {};
// console.log(user.profile.email);
//TypeError: Cannot read properties of undefined (reading 'email')

const user2 = {};
// console.log(user2.profile?.email);
//undefined

user?.profile?.email ? console.log('email') : console.log('fail');
//fail