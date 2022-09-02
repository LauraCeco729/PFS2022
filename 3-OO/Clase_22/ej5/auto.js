"use strict";
exports.__esModule = true;
var color_1 = require("./color");
var Auto = /** @class */ (function () {
    function Auto(patente, titular, marca, modelo, anio, red, green, blue) {
        this.patente = patente;
        this.titular = titular;
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.color = new color_1["default"](red, green, blue);
    }
    Auto.prototype.getPatente = function () {
        return this.patente;
    };
    Auto.prototype.setPatente = function (patente) {
        this.patente = patente;
    };
    Auto.prototype.getTitular = function () {
        return this.titular;
    };
    Auto.prototype.setTitular = function (titular) {
        this.titular = titular;
    };
    Auto.prototype.getMarca = function () {
        return this.marca;
    };
    Auto.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Auto.prototype.getModelo = function () {
        return this.modelo;
    };
    Auto.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Auto.prototype.getAnio = function () {
        return this.anio.toString();
    };
    Auto.prototype.setAnio = function (anio) {
        this.anio = anio;
    };
    Auto.prototype.getColor = function () {
        return this.color.getColor().toString();
    };
    Auto.prototype.setColor = function (red, green, blue) {
        this.color = new color_1["default"](red, green, blue);
    };
    Auto.prototype.printAuto = function () {
        console.log("\n        Titular: ".concat(this.titular, "\n        Patente: ").concat(this.patente, "\n        Marca: ").concat(this.marca, "\n        Modelo: ").concat(this.modelo, "\n        A\u00F1o: ").concat(this.anio, "\n        Color RGB: ").concat(this.color.getColor(), "\n        "));
    };
    return Auto;
}());
exports["default"] = Auto;
