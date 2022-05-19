import * as readlineSync from 'readline-sync';
let base : number = readlineSync.questionInt ("Ingrese la base: ");
console.log ("la base es", base);
let altura : number = readlineSync.questionInt ("Ingrese la altura: ");
console.log ("la altura es", altura);
let area : number = base * altura;
console.log ("el area es", area);
