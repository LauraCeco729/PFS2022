import * as rls from 'readline-sync';

let primerNumero: number = rls.questionInt("Ingrese el primer numero: ");
let segundoNumero: number = rls.questionInt("Ingrese el segundo numero: ");
let tercerNumero: number = rls.questionInt("Ingrese el tercer numero: ");

if (primerNumero > segundoNumero && primerNumero > tercerNumero) {
    console.log("El mayor de tres es: ", primerNumero);
}
else {
    if (segundoNumero > primerNumero && segundoNumero > tercerNumero) {
        console.log("El mayor de tres es: ", segundoNumero);
    }
    else {
        if (tercerNumero > primerNumero && tercerNumero > segundoNumero) {
            console.log("El mayor de tres es: ", tercerNumero);
        }
    }
  }
