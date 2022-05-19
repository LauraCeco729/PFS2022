import * as readlineSync from 'readline-sync';

let vuelta01 : number = readlineSync.questionInt ("Indique el tiempo  de la primer vuelta: ");
console.log ("el tiempo de la primer vuelta es: ", vuelta01);
let vuelta02 : number = readlineSync.questionInt ("Indique el tiempo  de la segunda vuelta: ");
console.log ("el tiempo de la segunda vuelta es: ", vuelta02);
let vuelta03 : number = readlineSync.questionInt ("Indique el tiempo  de la tercer vuelta: ");
console.log ("el tiempo de la tercer vuelta es: ", vuelta03);
let vuelta04 : number = readlineSync.questionInt ("Indique el tiempo  de la cuarta vuelta: ");
console.log ("el tiempo de la cuarta vuelta es: ", vuelta04);
let tiempoTotal = vuelta01 + vuelta02 + vuelta03 + vuelta04;
console.log ("El tiempo total de la carrera fue: ", tiempoTotal);
let promedioPorVuelta  = tiempoTotal / 4;
console.log ("El promedio por vuelta fue: ", promedioPorVuelta);
