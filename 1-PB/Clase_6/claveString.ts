import * as rls from 'readline-sync';

let palabra: string;
let clave: string = "";

palabra = rls.question("Ingrese palabra a 'encriptar': ");

for (let i = 0; i < palabra.length; i++) {
    switch (palabra[i]) {
        case 'a':
            clave += '.';
            break;
        case 'e':
            clave += ',';
            break;
        case 'i':
            clave += ';';
            break;
        case 'o':
            clave += ':';
            break;
        case 'u':
            clave += '!';
            break;
        default:
            if(palabra[i] >= 'a' && palabra[i] <= 'z'){
               clave += palabra[i].toUpperCase();
            }
            else if(palabra[i] >= 'A' && palabra[i] <= 'Z'){
                clave += palabra[i].toLowerCase();
            }
            else{
                clave += palabra[i];
            }
    }
}

console.log("Palabra encriptada: ", clave);