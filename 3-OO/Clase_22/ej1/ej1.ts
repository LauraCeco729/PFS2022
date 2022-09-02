import ParsearArchivo from './file_class';

console.log('Prueba de archivos');

let contenidoArchivo : string[][] = [];
let archivo : ParsearArchivo = new ParsearArchivo(';', ',');

archivo.readFile('1.txt');
contenidoArchivo = archivo.getContenido();
console.log(contenidoArchivo);
console.log(`Cantidad de Filas: ${archivo.getCantidadFilas()}`);
console.log(`Cantidad de Columnas tiene la Fila 0: ${archivo.getCantidadColumnas(0)}`);
//archivo.saveFile('', contenidoArchivo);
//contenidoArchivo = [];
//archivo.saveFile('prueba.txt', contenidoArchivo);
archivo.saveFile('2.txt', contenidoArchivo);