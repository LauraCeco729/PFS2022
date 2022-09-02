"use strict";
exports.__esModule = true;
var fs = require("fs");
var auto_1 = require("./auto");
var file_class_1 = require("./file_class");
var registroAutomor_1 = require("./registroAutomor");
var vehiculoGrande_1 = require("./vehiculoGrande");
//Registro del Automotor de calle "9 de julio"//
var registro = new registroAutomor_1["default"]('Registro Automotor de 9 de julio');
//Registro de Auto del "primer turno" - Chevrolet Onix 2021 color rojo//
var vehiculoPrimerTurno = new auto_1["default"]('AF103AB', 'Pepe Gomez', 'Chevrolet', 'Onix', 2022, 255, 0, 0);
//Registro de Auto del "segundo turno" - Ford Focus 2017 color verde//
var vehiculoSegundoTurno = new auto_1["default"]('AB485HQ', 'Roberto Carlos', 'Ford', 'Focus', 2017, 0, 255, 0);
//Registro de camioneta del "Tercer turno" - Ford F150 2019 color azul, 2 ejes, 4500kg//
var vehiculoTercerTurno = new vehiculoGrande_1["default"](4500, 2, 'AC869GH', 'Monica Simone', 'Ford', 'F150', 2019, 0, 0, 255);
//Registro de camioneta del "Tercer turno" - Ford F150 2019 color blanco, 2 ejes, 4500kg//
var vehiculocuartoTurno = new vehiculoGrande_1["default"](12000, 4, 'AD234FD', 'Juan Perez', 'Scannia', 'X452', 2021, 0, 0, 0);
//Agregar los vehículos al registro de "9 de julio"
registro.createVehiculo(vehiculoPrimerTurno);
registro.createVehiculo(vehiculoSegundoTurno);
registro.createVehiculoGrande(vehiculoTercerTurno);
registro.createVehiculoGrande(vehiculocuartoTurno);
console.log(registro.readVehiculos());
console.log(registro.readVehiculoGrandes());
console.log("Cantidad de veh\u00EDculos registrados en el ".concat(registro.getRegistroNombre(), ": ").concat(registro.getCantidadDeVehiculosRegistrados()));
//Escribir en archivo
var autosNormal = registro.convertirStringAutoNormal('\n', ',');
var vehiculoGrande = registro.convertirStringVehiculoGrande('\n', ',');
fs.writeFileSync('autos.txt', autosNormal, 'utf-8');
fs.writeFileSync('vehiculos grandes.txt', vehiculoGrande, 'utf-8');
//Leer archivo
console.log('\nLeer los archivos');
var contenidoArchivoAuto = [];
var archivo = new file_class_1["default"]('\n', ',');
//Leer archivo autos normales
archivo.readFile('autos.txt');
contenidoArchivoAuto = archivo.getContenido();
console.log(contenidoArchivoAuto);
//Leer archivo vehículos grandes
var contenidoVehiculosGrandes = [];
archivo.readFile('vehiculos grandes.txt');
contenidoVehiculosGrandes = archivo.getContenido();
console.log(contenidoVehiculosGrandes);
