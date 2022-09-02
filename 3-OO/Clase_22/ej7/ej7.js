"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var fs = require("fs");
var gestorPublicaciones_class_1 = require("./gestorPublicaciones_class");
var publicaciones_class_1 = require("./publicaciones_class");
var file_class_1 = require("../ej1/file_class");
//Gestor de Publicaciones
var miGestorPublicaciones = new gestorPublicaciones_class_1["default"]();
//Libros 1
var nuevaPublicacion = new publicaciones_class_1["default"]('Psicologicamente Hablando', 'Adrian Triglia', 'Año 2021', publicaciones_class_1.TipoPublicacion.libro);
miGestorPublicaciones.createPublicacion(nuevaPublicacion);
//Libro 2
nuevaPublicacion = new publicaciones_class_1["default"]('Hacia una Terapia basada en Procesos (TBP)', 'Steven C. Hayes', 'Año 1997', publicaciones_class_1.TipoPublicacion.libro);
miGestorPublicaciones.createPublicacion(nuevaPublicacion);
//Libro 3
nuevaPublicacion = new publicaciones_class_1["default"]('Buenos dias alegria', 'Jesus Matos', 'Año 2017', publicaciones_class_1.TipoPublicacion.libro);
miGestorPublicaciones.createPublicacion(nuevaPublicacion);
//Diario 1
nuevaPublicacion = new publicaciones_class_1["default"]('Columna Psicologia', 'Pagina 12', 'Año 2022', publicaciones_class_1.TipoPublicacion.diario);
miGestorPublicaciones.createPublicacion(nuevaPublicacion);
//Diario 2
nuevaPublicacion = new publicaciones_class_1["default"]('Psicologas y Psicologos Online', 'www.terapiaweb.com.ar', 'Año 2022', publicaciones_class_1.TipoPublicacion.diario);
miGestorPublicaciones.createPublicacion(nuevaPublicacion);
//Revista 1
nuevaPublicacion = new publicaciones_class_1["default"]('Revista de Psicologia', 'La Revista de Psicología UNLP', 'Año 2022', publicaciones_class_1.TipoPublicacion.revista);
miGestorPublicaciones.createPublicacion(nuevaPublicacion);
//Revista 2
nuevaPublicacion = new publicaciones_class_1["default"]('Revista de Psicologia', 'Revista de Psicologia Universidad de Chile', 'Año 2022', publicaciones_class_1.TipoPublicacion.revista);
miGestorPublicaciones.createPublicacion(nuevaPublicacion);
//Imprimir todas las publicaciones
console.log(miGestorPublicaciones.readPublicaciones());
var publicacionesArchivo = miGestorPublicaciones.convertirString(';', ',');
fs.writeFileSync('publicaciones.txt', publicacionesArchivo, 'utf-8');
var buscar = rls.question('Buscar por titulo: '); //"Buenos dias, alegria"
var indice = miGestorPublicaciones.findPublicacionPorTitulo(buscar);
if (indice == -1) {
    console.log('Esa publicación no la tenemos.');
}
else {
    console.log('Si si...');
    console.log(miGestorPublicaciones.readPublicacion(indice));
}
//Leer desde archivo
var contenidoArchivo = [];
var archivo = new file_class_1["default"](';', ',');
archivo.readFile('publicaciones.txt');
contenidoArchivo = archivo.getContenido();
console.log(contenidoArchivo);
