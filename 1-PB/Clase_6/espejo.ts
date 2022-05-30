import * as rls from 'readline-sync';

let palabra: string;
let espejo : string = "";

palabra = rls.question("Ingrese palabra a 'espejar': ");

for(let i = 0; i < palabra.length; i++){
    espejo += palabra[palabra.length - i - 1];
}

console.log("Palabra espejada: ", palabra);