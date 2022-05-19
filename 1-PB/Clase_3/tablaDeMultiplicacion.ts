import * as rls from 'readline-sync';

//Declaración de variables//
let numero, hasta, contador : number;
//Inicialización de variables//
contador = 1;
//Ingreso de variables//
numero = rls.questionInt("Ingrese un numero entero: ");
hasta = rls.questionInt("Ingrese hasta que numero: ");
while(contador <= hasta){
    console.log(numero, ' x ' , contador, ' = ', numero * contador);
    contador++;
}


