import * as rls from 'readline-sync';

let nAlumnos: number;
const nCantidadNotas = 3;

nAlumnos = rls.question("Cantidad de alumnos a ingresar: ");
console.log('==================================================');
let nombreAlumnos: string[] = new Array(nAlumnos);
let promedioAlumnos: number[] = new Array(nAlumnos);

cargarAlumnos(nAlumnos, nombreAlumnos, promedioAlumnos, nCantidadNotas);
for(let i : number = 0; i < nAlumnos; i++)
{
    console.log('==================================================');
    console.log('Nombre del alumno: ', nombreAlumnos[i]);
    console.log('Su promedio es: ', promedioAlumnos[i]);
}

function cargarAlumnos(nAlumnos: number, nombreAlumnos: string[], promedioAlumnos: number[], nCantidadNotas: number) {
    let acum: number = 0;
    let notas: number[] = new Array(nCantidadNotas);
    for (let i: number = 0; i < nAlumnos; i++) {
        nombreAlumnos[i] = rls.question("Ingrese el nombre del Alumno: ");
        notas = cargarNotas(nCantidadNotas);
        promedioAlumnos[i] = calcularPromedio(notas, nCantidadNotas);
        console.log('==================================================');
    }
}

function cargarNotas(nCantidadNotas: number): number[] {
    let notas: number[] = new Array(nCantidadNotas);
    for (let i: number = 0; i < nCantidadNotas; i++) {
        notas[i] = rls.questionFloat(`Nota ${i + 1} Trimestre: `);
    }
    return notas;
}

function calcularPromedio(notas: number[], nCantidadNotas: number) : number{
    let acum: number = 0;
    for (let i: number = 0; i < nCantidadNotas; i++) {
        acum += notas[i];
    }
    acum = acum / nCantidadNotas;
    return acum;
}