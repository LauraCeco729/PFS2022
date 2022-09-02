"use strict";
exports.__esModule = true;
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor(nombre) {
        this.camionetas = [];
        this.vehiculos = [];
        this.nombre = nombre;
    }
    //CRUDF  Create-Read-Update-Delete-Find - ABMLC
    RegistroAutomotor.prototype.createVehiculo = function (vehiculo) {
        if (vehiculo) {
            this.vehiculos.push(vehiculo);
        }
        else {
            throw new Error('La clase "Vehículo" está vacía')
        }

    };
    RegistroAutomotor.prototype.findVehiculos = function (vehiculos) {
        for (var i = 0; i < this.vehiculos.length; i++) {
            if (this.vehiculos[i] == vehiculos)
                return i;
        }
        return -1; //Auto no encontrado                               
    };
    RegistroAutomotor.prototype.updateVehiculos = function (vehiculos, posicion) {
        if (vehiculos)
            try {
                this.vehiculos[posicion] = vehiculos;
            }
            catch (error) {
                console.log(`Ocurrió un error inesperado en la posicion : ${posicion}`);
            }
        else {
            throw new Error('La clase "Vehículo" está vacía')
        }
    };
    RegistroAutomotor.prototype.deleteVehiculos = function (posicion) {
        if (this.vehiculos[posicion]){
            try{
                this.vehiculos.splice(posicion, 1);
            }
            catch (error) {
                console.log(`Ocurrió un error inesperado en la posicion : ${posicion}`);
            }
        }
    };
    RegistroAutomotor.prototype.readVehiculos = function () {
        var vehiculos = [];
        this.vehiculos.forEach(function (Auto) {
            try{
                vehiculos.push(Auto);
            }
            catch(erro){
                console.log('Error inesperado en la inserción de la clase')
            }
        });
        return vehiculos;
    };
    RegistroAutomotor.prototype.createVehiculoGrande = function (camioneta) {
        if (this.camionetas)
            this.camionetas.push(camioneta);
    };
    RegistroAutomotor.prototype.findVehiculoGrande = function (camioneta) {
        for (var i = 0; i < this.camionetas.length; i++) {
            if (this.camionetas[i] == camioneta)
                return i;
        }
        return -1; //Auto no encontrado                               
    };
    RegistroAutomotor.prototype.updateVehiculoGrande = function (camioneta, posicion) {
        if (camioneta)
            this.camionetas[posicion] = camioneta;
    };
    RegistroAutomotor.prototype.deleteVehiculoGrande = function (posicion) {
        if (this.camionetas[posicion])
            this.camionetas.splice(posicion, 1);
    };
    RegistroAutomotor.prototype.readVehiculoGrandes = function () {
        var camioneta = [];
        this.camionetas.forEach(function (VehiculoGrande) {
            camioneta.push(VehiculoGrande);
        });
        return camioneta;
    };
    RegistroAutomotor.prototype.getCantidadDeVehiculosRegistrados = function () {
        return this.vehiculos.length + this.camionetas.length;
    };
    RegistroAutomotor.prototype.getRegistroNombre = function () {
        return this.nombre;
    };
    RegistroAutomotor.prototype.convertirStringAutoNormal = function (separadorFila, separadorColumna) {
        var cadena = '';
        if (this.vehiculos) {
            for (var i = 0; i < this.vehiculos.length; i++) {
                cadena = cadena.concat(this.vehiculos[i].getTitular(), separadorColumna, this.vehiculos[i].getPatente(), separadorColumna, this.vehiculos[i].getMarca(), separadorColumna, this.vehiculos[i].getModelo(), separadorColumna, this.vehiculos[i].getAnio(), separadorColumna);
                if (i != this.vehiculos.length - 1)
                    cadena = cadena.concat(this.vehiculos[i].getColor(), separadorFila);
                else
                    cadena = cadena.concat(this.vehiculos[i].getColor());
            }
            return cadena;
        }
        else
            return "No existen publicaciones";
    };
    RegistroAutomotor.prototype.convertirStringVehiculoGrande = function (separadorFila, separadorColumna) {
        var cadena = '';
        if (this.camionetas) {
            for (var i = 0; i < this.camionetas.length; i++) {
                cadena = cadena.concat(this.camionetas[i].getTitular(), separadorColumna, this.camionetas[i].getPatente(), separadorColumna, this.camionetas[i].getMarca(), separadorColumna, this.camionetas[i].getModelo(), separadorColumna, this.camionetas[i].getAnio(), separadorColumna, this.camionetas[i].getEjes(), separadorColumna, this.camionetas[i].getCapacidad(), separadorColumna);
                if (i != this.camionetas.length - 1)
                    cadena = cadena.concat(this.camionetas[i].getColor(), separadorFila);
                else
                    cadena = cadena.concat(this.camionetas[i].getColor());
            }
            return cadena;
        }
        else
            return "No existen publicaciones";
    };
    return RegistroAutomotor;
}());
exports["default"] = RegistroAutomotor;
