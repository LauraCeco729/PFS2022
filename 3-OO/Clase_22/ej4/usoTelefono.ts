import telefonoConCamara from "./telefonoConCamara";
import telefonoConRadio from "./telefonoConRadio";

let myTelefoConCamara = new telefonoConCamara();
let myTelefoConRadio = new telefonoConRadio();

//Sacar una foto con Flash//
myTelefoConCamara.usarFlash(true);
console.log(myTelefoConCamara.getArchivoNombreFoto());
myTelefoConCamara.sacarFoto();
console.log(myTelefoConCamara.getArchivoNombreFoto());
myTelefoConCamara.usarFlash(false);
console.log(`Nivel de Bateria: ${myTelefoConCamara.getBateriaActual()}%`);

console.log(`-------------- Prueba de Telefono con Radio -------------- `);
//Encender, subir, vol, frecuencia....
//Obtener los valores del constructor por defecto//
console.log('Valores iniciales');
myTelefoConRadio.imprimirTelefonoConRadio();
myTelefoConRadio.encendidoRadio(true);              //Prendo la radio//
myTelefoConRadio.subirVolumen();
console.log(`Volumen actual:${myTelefoConRadio.getVolumen()}`);
myTelefoConRadio.subirVolumen(15);
console.log(`Volumen actual:${myTelefoConRadio.getVolumen()}`);
myTelefoConRadio.bajarFrecuencia();
console.log(`Nueva frecuenca :${myTelefoConRadio.verFrecuenciaActual()}`);
myTelefoConRadio.encendidoRadio(false);              //Apago la radio//
