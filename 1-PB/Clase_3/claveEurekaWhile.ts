import * as rls from 'readline-sync';

//Declaración de variables//
let clave: string;
let intentos, totalDeIntentos : number;
let claveOk: boolean;
//Inicialización de variables//
claveOk = false;
intentos = 1;
totalDeIntentos = 3;
//Ciclo de programa

while ((intentos <= totalDeIntentos) && (claveOk == false)) {
    clave = rls.question("Ingrese su clave: ");
    if (clave != 'eureka') {
        console.log("clave Incorrecta");
        intentos++;
    }
    else {
        console.log("clave Correcta. FIN");
        claveOk = true;
    }
}
if (claveOk == false){
    console.log("Agotó sus tres intentos");
}
