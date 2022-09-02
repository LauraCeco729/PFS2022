"use strict";
exports.__esModule = true;
var fs = require("fs");
var ParsearArchivo = /** @class */ (function () {
    function ParsearArchivo(separadorFila, separadorColumna) {
        this.info = []; //datos parseados por filas y por columnas info[fila][columna]//
        this.separadorColumna = separadorColumna;
        this.separadorFila = separadorFila;
    }
    /**
     * @brief Lee el archivo dado
     * @param fileName Nombre del archivo a leer
     */
    ParsearArchivo.prototype.readFile = function (fileName) {
        var texto;
        //acá va un try and catch//
        texto = fs.readFileSync(fileName, 'utf-8');
        if (texto) { //si el fileName tiene texto entonces...
            var filas = void 0;
            filas = texto.split(this.separadorFila);
            for (var i = 0; i < filas.length; i++) {
                this.info.push(filas[i].split(this.separadorColumna));
            }
        }
        //else error throw ("El archivo está vacio")
    };
    /**
     * @brief Guarda un archivo con el nombre dado por parámetro 'fileName'
     * @param fileName Nombre del archivo
     * @param info Información a guardar en el archivo
     */
    ParsearArchivo.prototype.saveFile = function (fileName, info) {
        var data = "";
        if (fileName != "" && info.length > 0) { //si el nombre del archivo no está vacio y tiene informacion/contenido entonces...
            for (var i = 0; i < info.length; i++) {
                for (var j = 0; j < info[i].length; j++) {
                    if (j == info[i].length - 1) {
                        data = data.concat(info[i][j]);
                    }
                    else {
                        data = data.concat(info[i][j], this.separadorColumna);
                    }
                }
                if (i != info.length - 1)
                    data = data.concat(this.separadorFila);
            }
            fs.writeFileSync(fileName, data, 'utf-8');
        }
        else {
            console.log('Error al guardar el archivo.');
            //lanzar un error
        }
    };
    /**
     * @brief Obtiene la cantidad de Filas obtenidad por el parseador
     * @returns Cantidad de Filas
     */
    ParsearArchivo.prototype.getCantidadFilas = function () {
        return this.info.length;
    };
    /**
     * @brief Obtiene la cantidad de columnas de una fila dada por parámetro
     * @param index Indice de la fila a obtener la cantidad de columnas
     * @returns Cantidad de columnas de una fila
     */
    ParsearArchivo.prototype.getCantidadColumnas = function (index) {
        return this.info[index].length;
    };
    /**
     * @brief Obtiene el/los valor/es de la fila dada por parámetro (obtiene columnas)
     * @param index Indice de la fila a ser leída
     * @returns Un arreglo de String
     */
    ParsearArchivo.prototype.getFila = function (index) {
        return this.info[index];
    };
    /**
     * @brief Limpia la data leída del archivo
     */
    ParsearArchivo.prototype.clearData = function () {
        this.info = [];
    };
    /**
     * @brief Imprime en pantalla el contenido del archivo parseado
     */
    ParsearArchivo.prototype.printContenido = function () {
        console.log(this.info);
    };
    /**
     * @brief Devuelve el contenido del archivo parseado
     * @returns Arreglo de string con los datos parseados por filas y columnas
     */
    ParsearArchivo.prototype.getContenido = function () {
        return this.info;
    };
    return ParsearArchivo;
}());
exports["default"] = ParsearArchivo;
