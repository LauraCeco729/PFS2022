import * as rls from 'readline-sync';

let n: number;

console.log("Divisores");
n = rls.questionInt("Ingrese un numero ('n'): ");
console.log("Cantidad de divisores de 'n': ", cantidadDeDivisores(n));

/**
 * @brief Esta función toma 2 valores y retorna si es multiplo
 * @param a : number
 * @param b : number
 * @returns true si es multiplo, false si no lo es
 */
function esMultiplo(a: number, b: number) : boolean {
    if (a % b == 0)
        return true;
    else
        return false;
}
/**
 * @brief Esta función devuelve la cantidad de divisores de un número entero
 * @param x : número
 * @returns Cantidad de divisores
 */
function cantidadDeDivisores(x: number) : number {
    let i: number;
    let cantidad: number;
    for (i = 1, cantidad = 0; i <= x; i++) {
        if (esMultiplo(x, i)) {
            cantidad++;
        }
    }
    return cantidad;
}