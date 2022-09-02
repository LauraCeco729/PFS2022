"use strict";
exports.__esModule = true;
var telefonoConCamara_1 = require("./telefonoConCamara");
var telefonoConRadio_1 = require("./telefonoConRadio");
var myTelefoConCamara = new telefonoConCamara_1["default"]();
var myTelefoConRadio = new telefonoConRadio_1["default"]();
//Sacar una foto con Flash//
myTelefoConCamara.usarFlash(true);
console.log(myTelefoConCamara.getArchivoNombreFoto());
myTelefoConCamara.sacarFoto();
console.log(myTelefoConCamara.getArchivoNombreFoto());
myTelefoConCamara.usarFlash(false);
console.log("Nivel de Bateria: ".concat(myTelefoConCamara.getBateriaActual(), "%"));
console.log("-------------- Prueba de Telefono con Radio -------------- ");
//Encender, subir, vol, frecuencia....
//Obtener los valores del constructor por defecto//
console.log('Valores iniciales');
myTelefoConRadio.imprimirTelefonoConRadio();
myTelefoConRadio.encendidoRadio(true); //Prendo la radio//
myTelefoConRadio.subirVolumen();
console.log("Volumen actual:".concat(myTelefoConRadio.getVolumen()));
myTelefoConRadio.subirVolumen(15);
console.log("Volumen actual:".concat(myTelefoConRadio.getVolumen()));
myTelefoConRadio.bajarFrecuencia();
console.log("Nueva frecuenca :".concat(myTelefoConRadio.verFrecuenciaActual()));
myTelefoConRadio.encendidoRadio(false); //Apago la radio//
