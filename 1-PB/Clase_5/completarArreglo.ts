import * as rls from 'readline-sync';

let num: number[] = new Array(10);
for(let i : number = 0; i < 10; i++){
    num[i] = Math.random() * 100;
}

for(let i : number = 0; i < 10; i++){
    console.log('Los numeros generados ', i + 1, '=' , num[i].toFixed());
}