import * as rls from 'readline-sync';

const verde = 35;
const azul = 40;
const amarillo = 30;

let alumnos : number;
alumnos = rls.questionInt('Ingrese la cantidad de alumnos: ')

if(alumnos < 40 && alumnos > 35){
    console.log("Aula azul");
}
else if(alumnos > 30){
    console.log("Aula verde");
} else if(alumnos < 30){
    console.log("Aula amarilla")
}
else{
    console.log('>40 alumnos');
}
