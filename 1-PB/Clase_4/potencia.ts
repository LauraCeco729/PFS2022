import * as rls from 'readline-sync';

console.log("Calculo de potencia");
let base: number = rls.questionInt("Ingrese un numero para la base: ");;
let exponente: number = rls.questionInt("Ingrese un numero para el exponente: ");


if (Potencia(base, exponente) != -1)
    console.log("El resultado es: ", Potencia(base, exponente));
else
    console.log("ERROR. La base o la potencia son menor que 0");


function Potencia(base: number, exponente: number): number {
    let acumulado, i: number;

    if (base >= 0 && exponente >= 0) {
        for (acumulado = 1, i = 0; i < exponente; i++) {
            acumulado *= base;
        }
        return acumulado;
    }
    else {
        return -1;
    }
}




