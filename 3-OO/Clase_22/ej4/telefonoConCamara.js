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
var telefonoConCamara = /** @class */ (function (_super) {
    __extends(telefonoConCamara, _super);
    function telefonoConCamara() {
        var _this = _super.call(this) || this;
        _this.nombreArchivoFoto = "..../Android/DCIM/photo1.jpg";
        _this.flash = false;
        return _this;
    }
    telefonoConCamara.prototype.isFlash = function () {
        return this.flash;
    };
    telefonoConCamara.prototype.sacarFoto = function () {
        console.log("Foto sacado con éxito!!!");
        this.nombreArchivoFoto = "..../Android/DCIM/photo2.jpg";
    };
    telefonoConCamara.prototype.usarFlash = function (flash) {
        try {
            this.flash = flash;
            if (flash) {
                console.log("Flash Encedido");
            }
            else {
                console.log("Flash Apagado");
            }
        }
        catch (error) {
            switch (error) {
                case 0:
                    console.log("Error - Flash no responde");
                    break;
                case 1:
                    console.log("Batería baja - No se puede encender el Flash");
                    break;
            }
        }
    };
    telefonoConCamara.prototype.getArchivoNombreFoto = function () {
        return this.nombreArchivoFoto;
    };
    return telefonoConCamara;
}(telefono_1["default"]));
exports["default"] = telefonoConCamara;
