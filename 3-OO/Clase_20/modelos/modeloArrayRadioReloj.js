"use strict";
exports.__esModule = true;
var modeloRadioReloj_1 = require("./modeloRadioReloj");
var arrayModelRadioReloj = /** @class */ (function () {
    /**
     * Constructor de la clase. Inicia el arreglo vacio
     */
    function arrayModelRadioReloj() {
        this.radioReloj = [];
    }
    /**
     * Agregar un elemento "RadioReloj" al final del arreglo
     */
    arrayModelRadioReloj.prototype.agregar = function () {
        this.radioReloj.push(new modeloRadioReloj_1["default"]);
    };
    /**
     * Obtiene el elemento indicado por parámetro del array privado "radioReloj"
     * @param i elemento a buscar
     * @returns una instancia de la clase RadioReloj
     */
    arrayModelRadioReloj.prototype.getElemento = function (i) {
        return this.radioReloj[i];
    };
    /**
     * Elimina todos los elementos del array
     */
    arrayModelRadioReloj.prototype.quitarTodo = function () {
        this.radioReloj = [];
    };
    return arrayModelRadioReloj;
}());
exports["default"] = arrayModelRadioReloj;
