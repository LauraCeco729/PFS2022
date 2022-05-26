import * as rls from 'readline-sync';

let v1: number[] = new Array(6);
let v2: number[] = new Array(6);
let suma: number[] = new Array(6);

for(let i : number = 0; i < 6; i++){
    console.log('Ingrese el numero para la posicion', i + 1, 'para el V1: ');
    v1[i] = rls.questionInt();
    console.log('Ingrese el numero para la posicion', i + 1, 'para el V2: ');
    v2[i] = rls.questionInt();
}

for(let i : number = 0; i < 6; i++){
    suma[i] = v1[i] + v2[i];
}

for(let i : number = 0; i < 6; i++){
    console.log('vSuma[', i + 1, '] = v1[', i +1, '] + v2 [', i+1, '] = ' , suma[i]);
}