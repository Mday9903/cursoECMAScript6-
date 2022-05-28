// ---------------------------------CLASE 7 ------------------------------

//Entries (Object.entries)

const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana',
}

const entries = Object.entries(data);
console.log(entries);
/*[
    [ 'frontend', 'Oscar' ],
    [ 'backend', 'Isabel' ],
    [ 'design', 'Ana' ]
  ]*/
console.log(entries.length); //3



//Values (Object.values)

const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana',
}

const values = Object.values(data);
console.log(values); //[ 'Oscar', 'Isabel', 'Ana' ]


//pad
//String.padStart(numeroTotalDeElementos, textoParaAñadir) 
//y String.padEnd(numeroTotalDeElementos, textoParaAñadir)

const string = 'hello';

console.log(string.padStart(7,'hi'));  //hihello
console.log(string.padEnd(12,' -----')); //hello ----- 
console.log('food'.padEnd(12,'  -----')); //food  ----- 


// ---------------------------------CLASE 7 ------------------------------