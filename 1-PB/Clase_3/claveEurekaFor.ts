import * as rls from 'readline-sync';

//Declaración de constantes//
const pass = 'eureka';
const totalDeIntentos = 3;
//Declaración de variables//
let clave: string;
let intentos : number;
let claveOk: boolean;
//Ciclo de programa
for(intentos = 1, claveOk = false ; (intentos <= totalDeIntentos) && !claveOk; intentos++)  

 {
    clave = rls.question("Ingrese su clave: ");
    if (clave != pass) {
        console.log("clave Incorrecta");
    }
    else {
        console.log("clave Correcta. FIN");
        claveOk = true;
    }
}
if (claveOk == false){
    console.log("Agotó sus tres intentos");
}
