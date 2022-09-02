"use strict";
exports.__esModule = true;
exports.TipoPublicacion = void 0;
var TipoPublicacion;
(function (TipoPublicacion) {
    TipoPublicacion["libro"] = "LIBRO";
    TipoPublicacion["revista"] = "REVISTA";
    TipoPublicacion["diario"] = "DIARIO";
})(TipoPublicacion = exports.TipoPublicacion || (exports.TipoPublicacion = {}));
;
var Publicacion = /** @class */ (function () {
    function Publicacion(titulo, autor, fecha, tipo) {
        this.autor = autor;
        this.fecha = fecha;
        this.titulo = titulo;
        this.tipo = tipo;
    }
    Publicacion.prototype.getAutor = function () {
        return this.autor;
    };
    Publicacion.prototype.setAutor = function (autor) {
        this.autor = autor;
    };
    Publicacion.prototype.getFecha = function () {
        return this.fecha;
    };
    Publicacion.prototype.setFecha = function (fecha) {
        this.fecha = fecha;
    };
    Publicacion.prototype.getTitulo = function () {
        return this.titulo;
    };
    Publicacion.prototype.setTitulo = function (titulo) {
        this.titulo = titulo;
    };
    Publicacion.prototype.setTipo = function (tipo) {
        this.tipo = tipo;
    };
    Publicacion.prototype.getTipo = function () {
        return this.tipo;
    };
    return Publicacion;
}());
exports["default"] = Publicacion;
