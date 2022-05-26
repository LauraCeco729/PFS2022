import * as rls from 'readline-sync';

let nombres: string[] = new Array(2);
let num: number[] = new Array(3);


//Acá cargo los valores en el arreglo//
for(let i : number = 0; i < 2; i++){
    console.log('Ingrese el nombre ', i + 1, ':');
    nombres[i] = rls.question();
}
for(let i : number = 0; i < 3; i++){
    console.log('Ingrese el numero ', i + 1, ':');
    num[i] = rls.question();
}
//Acá muestro los valores almacenados en el arreglo anterior//
for(let i : number = 0; i < 2; i++){
    console.log('El nombre almacenado para el indice', i + 1, '=' , nombres[i]);
}
for(let i : number = 0; i < 3; i++){
    console.log('El numero almacenado para el indice', i + 1, '=' , num[i]);
}