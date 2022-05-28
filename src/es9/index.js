// ---------------------------------CLASE 9 ------------------------------

//Operador de reposo

const obj = {
    name: 'oscar',
    age: 32,
    country: 'MX'
};

//Extrae el valor de "country" y muestra todo lo demás. 
let { country, ...all} = obj;
console.log(all); //{ name: 'oscar', age: 32 }



//Spread Operator (para unir varios objetos):

const obj = {
    name: 'Oscar',
    age:32
}

const obj1 = {
    ...obj,
    country: 'MX'
}

console.log(obj1); //{ name: 'Oscar', age: 32, country: 'MX' }


//promise.finally()

//El método finally() nos sirve para realizar alguna función
//una vez terminada y ejecutada una promesa.

const HelloWorld = () =>{
    return new Promise((resolve,reject) =>{
        (true)
        ? setTimeout(() => resolve('Hello World'), 3000)
        :reject(new Error('Test Error'))
    });
};

HelloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizo'))



//RegEx
//Nueva característica que nos permite trabajar desde un regex
//hasta un grupo (nueva forma de poder agrupar bloques de regex
//y poder acceder a cada uno de ellos.)

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/

const match = regexData.exec('2018-04-20');

const year = match[1];
const month = match[2];
const day = match[3];

console.log(year,month,day);











// ---------------------------------CLASE 9 ------------------------------

