//let <identificador> :  tipo [] = new Array (<maxl>);
import * as rls from 'readline-sync';

let num: number[] = new Array(5);

//Acá cargo los valores en el arreglo//
for(let i : number = 0; i < 5; i++){
    console.log('Ingreso un numero para el indice', i + 1);
    num[i] = rls.questionInt();
}
//Acá muestro los valores almacenados en el arreglo anterior//
for(let i : number = 0; i < 5; i++){
    console.log('El numero almacenado para el indice', i + 1, '=' ,num[i]);
}

