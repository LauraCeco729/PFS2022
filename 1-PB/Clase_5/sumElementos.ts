import * as rls from 'readline-sync';

console.log("Suma de Elementos Arreglo");
let length : number = 0;
length = rls.questionInt("Ingrese un numero para la long deseada: ");
let num: number[] = new Array(length);


//Acá cargo los valores en el arreglo//
for(let i : number = 0; i < length; i++){
    console.log('Ingrese el numero ', i + 1, ':');
    num[i] = rls.questionInt();
}
//Acá muestro los valores almacenados en el arreglo anterior//
let acumulado : number = 0;
for(let i : number = 0; i < length; i++){
    acumulado += num[i];
}
console.log('El valor acumulado del array es: ', acumulado);