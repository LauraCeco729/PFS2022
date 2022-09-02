"use strict";
exports.__esModule = true;
var Lapiz = /** @class */ (function () {
    function Lapiz(marca, color, grosorMina, punta, precio) {
        this.marca = marca;
        this.color = color;
        this.grosorMina = grosorMina;
        this.punta = punta;
        this.precio = precio;
    }
    Lapiz.prototype.getMarca = function () {
        return this.marca;
    };
    Lapiz.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Lapiz.prototype.getColor = function () {
        return this.color;
    };
    Lapiz.prototype.setColor = function (color) {
        this.color = color;
    };
    Lapiz.prototype.getGrosorMina = function () {
        return this.grosorMina;
    };
    Lapiz.prototype.setGrosorMina = function (grosorMina) {
        this.grosorMina = grosorMina;
    };
    Lapiz.prototype.getPunta = function () {
        return this.punta;
    };
    Lapiz.prototype.setPuta = function (punta) {
        this.punta = punta;
    };
    Lapiz.prototype.getPrecio = function () {
        return this.precio;
    };
    Lapiz.prototype.setPrecio = function (precio) {
        this.precio = precio;
    };
    Lapiz.prototype.imprimir = function () {
        return "Lapiz { \n            marca:".concat(this.getMarca(), ", \n            color:").concat(this.getColor(), ", \n            grosorMina: ").concat(this.getGrosorMina(), ", \n            punta: ").concat(this.getPunta(), ",precio:").concat(this.getPrecio(), ", \n            color:").concat(this.getColor(), "  \n        }");
    };
    return Lapiz;
}());
exports["default"] = Lapiz;
