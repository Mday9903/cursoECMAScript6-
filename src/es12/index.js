//ReplaceAll:
/* Nos permite reemplazar todas las coincidencias dentro de un
string. A diferencia de string.replace que sólo reemplaza a la primera
coincidencia*/

//Sintaxis: string.replaceAll("coincidenciaAReemplazar","textoAAgregar").

const string = "Javascript es maravilloso, con Javascript puedo crear el futuro de la web.";

const replacedString = string.replace("Javascript","Python");
console.log(replacedString);
//Python es maravilloso, con Javascript puedo crear el futuro de la web.

const replacedString2 = string.replaceAll("Javascript", "Python");
console.log(replacedString2);
//Python es maravilloso, con Python puedo crear el futuro de la web.





//Métodos y propiedades privados (#):

/* Ahora podemos convertir en privado un método dentro de una
clase anteponiendo al nombre del método la almohadilla "#".*/

class Message {
    #propiedadPrivada = 10;
    #show(val){
        console.log(val);
    };
}

const message = new Message();
message.show('Hola!'); 
//TypeError: message.show is not a function

message.#propiedadPrivada; /*Property '#propiedadPrivada' 
is not accessible outside class 'Message' because it has a 
private identifier.*/





//Promise.any:

/* Promise.Any([]) es un objeto global de promisse cuyo argumento va
a ser la forma de un array de promesas que vamos a pasarle gestionando
y capturando la respuesta de la primera que sea resuelta de forma
satisfactoria*/

const promise1 = new Promise((resolve,reject)=> reject("1"));
const promise2 = new Promise((resolve,reject)=> resolve("2"));
const promise3 = new Promise((resolve,reject)=> resolve("3"));

Promise.any([promise1,promise2,promise3])
    .then(response => console.log(response)); //2




//WeakRef():

/* Un objeto WeakRef le permite mantener una referencia débil a otro
objeto evitando que éste objeto sea pasado o recogido por el
garbage collector */


class anyClass {
    constructor(element){
        this.ref = new WeakRef(element)
    }
}






//Nuevos operadores de asignación:

/*Estos nuevos operadores realizan una asignación luego de 
evaluar una condición.*/

//Asignación AND lógico:
let isTrue = true;
let isFalse = false;

console.log(isTrue &&= isFalse); //false

/*Lo que está pasando en esta asignación es que pregunta:
"Si el valor de isTrue es un valor válido, entonces le 
asigna el valor de isFalse a isTrue" */
/*En este caso isTrue sí tiene un valor válido, por lo
tanto, si se realiza la asignación*/


//Asignación OR lógico
let isTrue = true;
let isFalse = false;

console.log(isTrue ||= isFalse); //true
/*Lo que está pasando en esta asignación es que pregunta:
"Si el valor de isTrue no es un valor válido, entonces le  
asigna el valor de isFalse a isTrue" */
/*Pero en este caso isTrue sí tiene un valor válido, por lo
tanto, no se realiza la asignación*/


//Asignación de anulación lógica
let isTrue = 0;
let isFalse = false;

console.log(isTrue ??= isFalse);//false
/*Lo que está pasando en esta asignación es que pregunta:
"Si el valor de isTrue es "null" o "undefined", entonces le 
asigna el valor de isFalse a isTrue" */
/*En este caso el valor de isTrue es undefined, por lo
tanto, si se realiza la asignación*/


//Un valor válido es un valor distinto de "0", null y undefined.

