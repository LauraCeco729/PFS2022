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
var auto_1 = require("./auto");
var VehiculoGrande = /** @class */ (function (_super) {
    __extends(VehiculoGrande, _super);
    function VehiculoGrande(capacidad, ejes, patente, titular, marca, modelo, anio, red, green, blue) {
        var _this = _super.call(this, patente, titular, marca, modelo, anio, red, green, blue) || this;
        _this.capacidad = capacidad;
        _this.ejes = ejes;
        return _this;
    }
    VehiculoGrande.prototype.setCapacidad = function (capacidad) {
        this.capacidad = capacidad;
    };
    VehiculoGrande.prototype.getCapacidad = function () {
        return this.capacidad.toString();
    };
    VehiculoGrande.prototype.setEjes = function (ejes) {
        this.ejes = ejes;
    };
    VehiculoGrande.prototype.getEjes = function () {
        return this.ejes.toString();
    };
    return VehiculoGrande;
}(auto_1["default"]));
exports["default"] = VehiculoGrande;
