//Algoritmo secreto
import * as rls from "readline-sync";  //faltó la línea que permite asociar el nombre readlineSync al lector

let elem, nro, ocu: number;       // faltó mencionar el tipo de las variables
elem = rls.questionInt("Ingrese tamaño: ");
let arr: number[] = new Array(elem);    // correción de la sintaxis del arreglo

cargar(arr);   //Carga valores aleatorios entre 0 y 100 utilizando la función RAMDOM

nro = rls.questionInt("Ingrese numero para encontrar su recurrencia: ");

ocu = funcion(arr, nro);     //Buscar si existe una ocurrencia en el Array

console.log(`El numero ${nro} es ${ocu}`);         //Muestra el nro y la cantidad de ocurrencia del mismo y agrega texto para clarificar
mostrar(arr);                                       //Se elimina 'elem'

/**
 * Carga valores aleatorios entre 0 y 100 utilizando la función RAMDOM
 * @param v 
 * @note Se recomienda cambiar el nombre de la función 'cargar' por un nombre más representativo
 *       Ej: cargarValoresAleatoreos(...)
 */
function cargar(v) {
    for (let i = 0; i < v.length; i++)
        v[i] = Math.floor(Math.random() * 100);
}
/**
 * @brief Muestra el vector separado por un espacio
 * @param v 
 * @note Se recomienda cambiar el nombre de mostrar a un nombre más presentativo como ser "mostrarVector(...)"
 */
//function mostrar(v, n) {         //Error en declaración de array y variable que no se utiliza
function mostrar(v : number[]) {   //Se elimina n porque no se utiliza
    let c = "";
    for (let i = 0; i < v.length; i++)
        c += v[i] + " ";
    console.log(c);
}
/**
 * @brief Busca la ocurrencia en el vector v y número 'n'
 * @param v 
 * @param n 
 * @returns Devuelve la cantidad de ocurrencia del número 'm'
 * @note Se recomienda cambiar el nombre de la función 'funcion' por un nombre más representativo
 *       Ej: encontrarOcurrencia(...)
 */
function funcion(v: number[], n: number): number {
    let o = 0;
    for (let i = 0; i < v.length; i++)
        if (v[i] == n)
            o += 1;
    return o;
}