import * as rls from 'readline-sync';

let texto: string;

texto = rls.question("Ingrese el texto a modificar en camelCase': ");
texto = texto.toLowerCase();                    //normalizamos el texto//
console.log("El texto en camelCase es: ", camelCaseMethod(texto, texto.length));


/**
 * @brief Esta función convierte una cadena de caracteres con espacios,
 *        en un nombre, sin espacios, y en camel case por palabra.
 * @param texto 
 * @param length 
 * @returns La cadena convertida en camel case.
 */
function camelCaseMethod(texto: string, length: number): string {
    let camel: string = "";
    for (let i = 0; i < length; i++) {

        if (texto[i] == " ") {
            i++;
            camel += texto[i].toUpperCase();
        }
        else {
            camel += texto[i];
        }
    }
    return camel;
}





