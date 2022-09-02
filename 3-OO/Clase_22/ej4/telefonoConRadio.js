"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var telefono_1 = require("./telefono");
var telefonoConRadio = /** @class */ (function (_super) {
    __extends(telefonoConRadio, _super);
    function telefonoConRadio(isOnRadio, frecuencia, volumen) {
        var _this = _super.call(this) || this;
        if (isOnRadio == undefined) {
            _this.isOnRadio = false;
        }
        else {
            _this.isOnRadio = isOnRadio;
        }
        if (frecuencia == undefined)
            _this.frecuencia = 95.1e6;
        else
            _this.frecuencia = frecuencia;
        if (volumen == undefined) {
            _this.volumen = 10;
        }
        else {
            _this.volumen = volumen;
        }
        return _this;
    }
    telefonoConRadio.prototype.getIsOnRadio = function () {
        return this.isOnRadio;
    };
    telefonoConRadio.prototype.setIsOnRadio = function (on) {
        this.isOnRadio = on;
    };
    telefonoConRadio.prototype.encendidoRadio = function (on) {
        this.setIsOnRadio(on);
        if (on) {
            console.log("Radio encendida");
        }
        else {
            console.log("Radio apagada");
        }
    };
    telefonoConRadio.prototype.verFrecuenciaActual = function () {
        return this.frecuencia;
    };
    telefonoConRadio.prototype.subirFrecuencia = function () {
        this.frecuencia += 10e6;
    };
    telefonoConRadio.prototype.bajarFrecuencia = function () {
        this.frecuencia -= 10e6;
    };
    telefonoConRadio.prototype.getVolumenActual = function () {
        return this.volumen;
    };
    telefonoConRadio.prototype.subirVolumen = function (volumen) {
        if (volumen == undefined) {
            this.volumen += 1;
            if (this.volumen >= 100)
                this.volumen = 100;
        }
        else
            this.volumen = volumen;
    };
    telefonoConRadio.prototype.getVolumen = function () {
        return this.volumen;
    };
    telefonoConRadio.prototype.bajarVolumen = function () {
        this.volumen -= 1;
        if (this.volumen <= 0)
            this.volumen = 0;
    };
    telefonoConRadio.prototype.imprimirTelefonoConRadio = function () {
        console.log("Radio encendida? ".concat(this.getIsOnRadio(), ", Volumen: ").concat(this.getVolumenActual(), ", Frecuencia: ").concat(this.verFrecuenciaActual()));
    };
    return telefonoConRadio;
}(telefono_1["default"]));
exports["default"] = telefonoConRadio;
