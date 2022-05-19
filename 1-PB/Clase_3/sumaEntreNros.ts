import * as rls from 'readline-sync';

//Declaración de variables//
let primerN, segundoN, contador, suma : number;

//Ingreso de variables//
primerN = rls.questionInt("Ingrese primer numero: ");
segundoN = rls.questionInt("Ingrese segundo numero: ");

for(contador = primerN, suma = 0; contador <= segundoN; contador++){
    suma = suma + contador;
}
console.log('La suma es', suma);