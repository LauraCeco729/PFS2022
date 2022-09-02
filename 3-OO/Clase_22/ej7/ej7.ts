import * as rls from "readline-sync";  
import * as fs from 'fs'
import GestorPublicaciones from "./gestorPublicaciones_class";
import Publicacion, { TipoPublicacion } from "./publicaciones_class";
import ParsearArchivo from "../ej1/file_class";
import { arch } from "os";

//Gestor de Publicaciones
let miGestorPublicaciones = new GestorPublicaciones();
//Libros 1
let nuevaPublicacion = new Publicacion('Psicologicamente Hablando', 'Adrian Triglia', 'Año 2021', TipoPublicacion.libro);
miGestorPublicaciones.createPublicacion(nuevaPublicacion);
//Libro 2
nuevaPublicacion = new Publicacion('Hacia una Terapia basada en Procesos (TBP)', 'Steven C. Hayes', 'Año 1997', TipoPublicacion.libro);
miGestorPublicaciones.createPublicacion(nuevaPublicacion);
//Libro 3
nuevaPublicacion = new Publicacion('Buenos dias alegria', 'Jesus Matos', 'Año 2017', TipoPublicacion.libro);
miGestorPublicaciones.createPublicacion(nuevaPublicacion);
//Diario 1
nuevaPublicacion = new Publicacion('Columna Psicologia', 'Pagina 12', 'Año 2022', TipoPublicacion.diario);
miGestorPublicaciones.createPublicacion(nuevaPublicacion);
//Diario 2
nuevaPublicacion = new Publicacion('Psicologas y Psicologos Online', 'www.terapiaweb.com.ar', 'Año 2022', TipoPublicacion.diario);
miGestorPublicaciones.createPublicacion(nuevaPublicacion);
//Revista 1
nuevaPublicacion = new Publicacion('Revista de Psicologia', 'La Revista de Psicología UNLP', 'Año 2022', TipoPublicacion.revista);
miGestorPublicaciones.createPublicacion(nuevaPublicacion);
//Revista 2
nuevaPublicacion = new Publicacion('Revista de Psicologia', 'Revista de Psicologia Universidad de Chile', 'Año 2022', TipoPublicacion.revista);
miGestorPublicaciones.createPublicacion(nuevaPublicacion);
//Imprimir todas las publicaciones
console.log(miGestorPublicaciones.readPublicaciones());
let publicacionesArchivo : string = miGestorPublicaciones.convertirString(';', ',');
fs.writeFileSync('publicaciones.txt', publicacionesArchivo, 'utf-8');

let buscar = rls.question('Buscar por titulo: ');                        //"Buenos dias, alegria"
let indice = miGestorPublicaciones.findPublicacionPorTitulo(buscar);
if(indice == -1){
    console.log('Esa publicación no la tenemos.');
}
else{
    console.log('Si si...')
    console.log(miGestorPublicaciones.readPublicacion(indice));
}
//Leer desde archivo
let contenidoArchivo : string[][] = [];
let archivo : ParsearArchivo = new ParsearArchivo(';', ',');
archivo.readFile('publicaciones.txt');
contenidoArchivo = archivo.getContenido();
console.log(contenidoArchivo);

