console.log('Todo bien');
// llamar al módulo nativo.
let fs = require('fs');
//llamar modulo de 3ros. (atenti: primero instalar)
let pmq = require('popular-movie-quotes');
let calcu = require('./calculadora/calculadora');

//console.log(fs);
console.log(pmq);
//console.log(pmq.getSomeRandom(10));

console.log(calcu.suma(200,90));


