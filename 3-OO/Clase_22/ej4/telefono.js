"use strict";
exports.__esModule = true;
var teléfono = /** @class */ (function () {
    function teléfono(isOn, isLinternaOn) {
        this.bateria = 50; //Bateria al 50%
        if (isOn == undefined) {
            this.isOn = false;
        }
        else {
            this.isOn = isOn;
        }
        if (isLinternaOn == undefined) {
            this.isLinternaOn = false;
        }
        else {
            this.isLinternaOn = isLinternaOn;
        }
    }
    teléfono.prototype.encerderApagarPhone = function () {
        this.isOn = !this.isOn;
    };
    teléfono.prototype.getBateriaActual = function () {
        return this.bateria;
    };
    teléfono.prototype.setBateriaActual = function (bateria) {
        this.bateria = bateria;
    };
    teléfono.prototype.encerderApagarLinterna = function () {
        this.isLinternaOn = !this.isLinternaOn;
    };
    /**
     * @brief Envia un mensaje al número dado por parámetro
     * @param mensaje Mensaje a ser enviado
     * @param numero Numero a enviar el mesaje
     * @returns true : mensaje enviado de forma exitosa
     *          false: no se pudo enviar el mensaje
     */
    teléfono.prototype.mandarMensaje = function (mensaje, numero) {
        console.log("MSG: ".concat(mensaje, " al #: ").concat(numero, " - Enviado con \u00E9xito"));
        return true;
    };
    /**
     * @brief Esta función llama al número dado por parámetro
     * @param numero Numero a hacer la llamada
     * @returns true : llamada exitosa
     *          false: fracaso la llamada
     */
    teléfono.prototype.hacerLlamada = function (numero) {
        console.log("Llamando al #: ".concat(numero));
        return true;
    };
    return teléfono;
}());
exports["default"] = teléfono;
