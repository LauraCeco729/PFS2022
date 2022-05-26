//let <identificador> :  tipo [] = new Array (<maxl>);
import * as rls from 'readline-sync';

let length : number = 0;
length = rls.questionInt("Ingrese un numero para la long deseada: ");
let nombres: string[] = new Array(length);

//Acá cargo los valores en el arreglo//
for(let i : number = 0; i < length; i++){
    console.log('Ingrese el nombre ', i + 1);
    nombres[i] = rls.question();
}
//Acá muestro los valores almacenados en el arreglo anterior//
for(let i : number = 0; i < length; i++){
    console.log('El nombre almacenado para el indice', i + 1, '=' ,nombres[i]);
}