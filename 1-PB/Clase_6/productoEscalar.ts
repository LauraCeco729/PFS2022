import * as rls from 'readline-sync';

let n: number;

n = rls.questionInt("Ingrese el tamanio N del producto escalar: ");
let v1 : number[] = new Array(n);
let v2 : number[] = new Array(n);
let producto : number;

console.log("Carga de los valores del V1...");
cargarVectorNum(v1, n);
console.log("Carga de los valores del V2...");
cargarVectorNum(v2, n);
console.log("Calculo del producto escalar: ");
producto = productoEscalar(v1, v2, n);
console.log("Producto Escalar: ", producto);

function cargarVectorNum(vector : number[], n : number){
    for(let i : number = 0; i < n; i++){
        vector[i] = rls.questionInt(`Indique el numero que desea incorporar en la posicion ${i}: `);
    }
}

function productoEscalar(v1: number[], v2: number[], n: number) : number{
    let acum : number = 0;
    for(let i : number = 0; i < n; i++){
        acum += v1[i] * v2[i];
    }
    return acum;
}


