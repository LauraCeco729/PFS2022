import * as fs from 'fs'
import Auto from './auto';
import ParsearArchivo from './file_class';
import RegistroAutomotor from "./registroAutomor";
import VehiculoGrande from "./vehiculoGrande";

//Registro del Automotor de calle "9 de julio"//
let registro : RegistroAutomotor = new RegistroAutomotor('Registro Automotor de 9 de julio');

//Registro de Auto del "primer turno" - Chevrolet Onix 2021 color rojo//
let vehiculoPrimerTurno = new Auto('AF103AB', 'Pepe Gomez', 'Chevrolet', 'Onix', 2022, 255, 0, 0);
//Registro de Auto del "segundo turno" - Ford Focus 2017 color verde//
let vehiculoSegundoTurno = new Auto('AB485HQ', 'Roberto Carlos', 'Ford', 'Focus', 2017, 0, 255, 0);
//Registro de camioneta del "Tercer turno" - Ford F150 2019 color azul, 2 ejes, 4500kg//
let vehiculoTercerTurno = new VehiculoGrande(4500, 2, 'AC869GH', 'Monica Simone', 'Ford', 'F150', 2019, 0, 0, 255);
//Registro de camioneta del "Tercer turno" - Ford F150 2019 color blanco, 2 ejes, 4500kg//
let vehiculocuartoTurno = new VehiculoGrande(12000, 4, 'AD234FD', 'Juan Perez', 'Scannia', 'X452', 2021, 0, 0, 0);

//Agregar los vehículos al registro de "9 de julio"
registro.createVehiculo(vehiculoPrimerTurno);
registro.createVehiculo(vehiculoSegundoTurno);
registro.createVehiculoGrande(vehiculoTercerTurno);
registro.createVehiculoGrande(vehiculocuartoTurno);

console.log(registro.readVehiculos());
console.log(registro.readVehiculoGrandes());
console.log(`Cantidad de vehículos registrados en el ${registro.getRegistroNombre()}: ${registro.getCantidadDeVehiculosRegistrados()}`);

//Escribir en archivo
let autosNormal : string = registro.convertirStringAutoNormal('\n', ',');
let vehiculoGrande : string = registro.convertirStringVehiculoGrande('\n', ',');

fs.writeFileSync('autos.txt', autosNormal, 'utf-8');
fs.writeFileSync('vehiculos grandes.txt', vehiculoGrande, 'utf-8');

//Leer archivo
console.log('\nLeer los archivos');
let contenidoArchivoAuto : string[][] = [];
let archivo : ParsearArchivo = new ParsearArchivo('\n', ',');
//Leer archivo autos normales
archivo.readFile('autos.txt');
contenidoArchivoAuto = archivo.getContenido();
console.log(contenidoArchivoAuto);

//Leer archivo vehículos grandes
let contenidoVehiculosGrandes : string[][] = [];
archivo.readFile('vehiculos grandes.txt');
contenidoVehiculosGrandes = archivo.getContenido();
console.log(contenidoVehiculosGrandes);
