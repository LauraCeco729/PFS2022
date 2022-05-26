import * as rls from 'readline-sync';

let length: number = 0;
let ceros: number = 0;
let neg: number = 0;
let pos: number = 0;
length = rls.questionInt("Ingrese un numero para la long deseada: ");
let num: number[] = new Array(length);

for (let i: number = 0; i < length; i++) {
    console.log('Ingrese el numero para la posicion', i + 1, ': ');
    num[i] = rls.questionInt();
}
for (let i: number = 0; i < length; i++) {
    console.log('num[', i + 1, ']: ', num[i]);
    if (num[i] == 0) {
        ceros++;
    }
    else if (num[i] < 0) {
        neg++;
    }
    else {
        pos++;
    }
}
console.log('Positivos: ', pos, 'Negativos: ', neg, 'Ceros: ', ceros);
