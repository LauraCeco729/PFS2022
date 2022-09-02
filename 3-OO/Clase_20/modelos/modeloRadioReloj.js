"use strict";
exports.__esModule = true;
var modeloColorDisplay_1 = require("./modeloColorDisplay");
var RadioReloj = /** @class */ (function () {
    //Constructor//
    function RadioReloj(encendidoInicial, amInicial, volumenInicial, frecuenciaInicial, horaInicial, alarmaInicial, alarmaOnIncial, colorDisplayInicial) {
        if (encendidoInicial == undefined) {
            this.encendido = false;
        }
        else {
            this.encendido = encendidoInicial;
        }
        if (amInicial == undefined) {
            this.am = true;
        }
        else {
            this.am = amInicial;
        }
        if (volumenInicial == undefined) {
            this.volumen = 5;
        }
        else {
            this.volumen = volumenInicial;
        }
        if (frecuenciaInicial == undefined) {
            this.frecuencia = 54000;
        }
        else {
            this.frecuencia = frecuenciaInicial;
        }
        if (horaInicial == undefined) {
            this.hora = 800;
        }
        else {
            this.hora = horaInicial;
        }
        if (alarmaInicial == undefined) {
            this.alarmaHora = 900;
        }
        else {
            this.alarmaHora = alarmaInicial;
        }
        if (alarmaOnIncial == undefined) {
            this.alarma = false;
        }
        else {
            this.alarma = alarmaOnIncial;
        }
        this.colorDisplay = new modeloColorDisplay_1["default"]();
        if (colorDisplayInicial == undefined) {
            this.colorDisplay.setColorDisplay('red');
        }
        else {
            this.colorDisplay.setColorDisplay(colorDisplayInicial);
        }
    }
    /*Deficinición de funcionalidad
    getter y setter para cada variable*/
    RadioReloj.prototype.encerderApagar = function () {
        this.encendido = !this.encendido;
    };
    RadioReloj.prototype.elegirAM = function () {
        //this.am = true => AM
        //this.am = false => FM
        this.am = !this.am;
    };
    RadioReloj.prototype.encerderAlarma = function () {
        this.alarma = !this.alarma;
    };
    RadioReloj.prototype.subirVolumen = function () {
        this.volumen += 1;
        if (this.volumen >= 100)
            this.volumen = 100;
    };
    RadioReloj.prototype.bajarVolumen = function () {
        this.volumen -= 1;
        if (this.volumen <= 0)
            this.volumen = 0;
    };
    RadioReloj.prototype.subirFrecuencia = function () {
        this.frecuencia += 1;
        if (this.am) {
            if (this.frecuencia >= 160000)
                this.frecuencia = 160000;
        }
        else {
            if (this.frecuencia >= 108e6)
                this.frecuencia = 108e6;
        }
    };
    RadioReloj.prototype.bajarFrecuencia = function () {
        this.frecuencia -= 1;
        if (this.am) {
            if (this.frecuencia <= 54000)
                this.frecuencia = 54000;
        }
        else {
            if (this.frecuencia >= 88e6)
                this.frecuencia = 88e6;
        }
    };
    RadioReloj.prototype.setHora = function (hora) {
        this.hora = hora;
    };
    RadioReloj.prototype.getHora = function () {
        return this.hora;
    };
    RadioReloj.prototype.setAlarma = function (alarmaHora) {
        this.alarmaHora = alarmaHora;
    };
    RadioReloj.prototype.getAlarma = function () {
        return this.alarmaHora;
    };
    RadioReloj.prototype.setColorDisplay = function (color) {
        this.colorDisplay.setColorDisplay(color);
    };
    RadioReloj.prototype.getColorDisplay = function () {
        return this.colorDisplay.getColorDisplay();
    };
    return RadioReloj;
}());
exports["default"] = RadioReloj;
