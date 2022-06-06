import * as rls from 'readline-sync';


const nChicos = 11;
let edades: number[] = new Array(11);

for (let i = 0; i < edades.length; i++){
    edades[i] = aleatorio(3, 7);
    console.log(edades[i]);
}
console.log("Promedio de edad es: ", calcularPromedio(edades));


function aleatorio(min: number, max: number): number {
    return Math.floor((Math.random() * (max - min) + min));
}

function calcularPromedio(v : number[]) : number{
    let promedio : number = 0;
    for (let i = 0; i < v.length; i++)
        promedio += v[i];
    return promedio/nChicos;
}
