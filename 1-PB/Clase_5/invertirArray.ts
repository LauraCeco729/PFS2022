import * as rls from 'readline-sync';

let length : number = 0;
length = rls.questionInt("Ingrese un numero para la long deseada: ");
let num: number[] = new Array(length);
let numInv: number[] = new Array(length);

for(let i : number = 0; i < length; i++){
    console.log('Ingrese el numero para la posicion', i + 1, ': ');
    num[i] = rls.questionInt();
}
for(let i : number = 0; i < length; i++){
    numInv[i] = num[length-i-1];
}

for(let i : number = 0; i < 6; i++){
    console.log('num[', i + 1, ']: ', num[i],' - numInv[', i + 1, ']: ', numInv[i]);
}