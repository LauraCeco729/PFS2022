"use strict";
exports.__esModule = true;
var Cartuchera = /** @class */ (function () {
    function Cartuchera(dueño) {
        this.dueño = this.dueño;
        this.lapices = [];
    }
    Cartuchera.prototype.getDueño = function () {
        return this.dueño;
    };
    Cartuchera.prototype.setDueño = function (dueño) {
        this.dueño = dueño;
    };
    //CRUDF  Create-Read-Update-Delete-Find - ABMLC
    Cartuchera.prototype.createLapices = function (lapices) {
        if (lapices)
            this.lapices.push(lapices);
    };
    //Porque se lee la variable privada así????
    Cartuchera.prototype.readLapices = function () {
        var lapices = [];
        this.lapices.forEach(function (lapiz) {
            lapices.push(lapiz);
        });
        return lapices;
    };
    Cartuchera.prototype.updateLapices = function (lapiz, posicion) {
        if (lapiz)
            this.lapices[posicion] = lapiz;
    };
    Cartuchera.prototype.deleteLapices = function (posicion) {
        if (this.lapices[posicion])
            this.lapices.splice(posicion, 1);
    };
    Cartuchera.prototype.readLapicesTxt = function () {
        var textoLapices = '';
        this.lapices.forEach(function (Lapiz) {
            textoLapices += Lapiz.imprimir() + '\n';
        });
        return textoLapices;
    };
    return Cartuchera;
}());
exports["default"] = Cartuchera;
