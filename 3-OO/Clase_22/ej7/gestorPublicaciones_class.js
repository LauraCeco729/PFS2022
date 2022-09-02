"use strict";
exports.__esModule = true;
var GestorPublicaciones = /** @class */ (function () {
    function GestorPublicaciones() {
        this.publicaciones = [];
    }
    //CRUDF  Create-Read-Update-Delete-Find - ABMLC
    GestorPublicaciones.prototype.createPublicacion = function (publicacion) {
        if (publicacion)
            this.publicaciones.push(publicacion);
    };
    GestorPublicaciones.prototype.findPublicacion = function (publicacion) {
        for (var i = 0; i < this.publicaciones.length; i++) {
            if (this.publicaciones[i] == publicacion)
                return i;
        }
        return -1; //Publicación no encontrada                               
    };
    GestorPublicaciones.prototype.findPublicacionPorTitulo = function (titulo) {
        for (var i = 0; i < this.publicaciones.length; i++) {
            if (this.publicaciones[i].getTitulo() == titulo)
                return i;
        }
        return -1; //Publicación no encontrada                               
    };
    GestorPublicaciones.prototype.updatePublicacion = function (publicacion, posicion) {
        if (publicacion)
            this.publicaciones[posicion] = publicacion;
    };
    /**
     * @brief Borra la Publicación en la "posicion"
     * @param posicion ïndice de la publicación a borrar
     * @returns Si la publicación fue eliminada correctamente, devuelve el número de la posición.
     *          Si no existe devuelve -1
     */
    GestorPublicaciones.prototype.deletePublicacion = function (posicion) {
        if (this.publicaciones[posicion]) {
            this.publicaciones.splice(posicion, 1);
            return posicion;
        }
        else {
            return -1;
        }
    };
    GestorPublicaciones.prototype.readPublicaciones = function () {
        var publicaciones = [];
        this.publicaciones.forEach(function (Publicacion) {
            publicaciones.push(Publicacion);
        });
        return publicaciones;
    };
    GestorPublicaciones.prototype.readPublicacion = function (posicion) {
        return this.publicaciones[posicion];
    };
    GestorPublicaciones.prototype.convertirString = function (separadorFila, separadorColumna) {
        var cadena = '';
        if (this.publicaciones) {
            for (var i = 0; i < this.publicaciones.length; i++) {
                cadena = cadena.concat(this.publicaciones[i].getTitulo(), separadorColumna, this.publicaciones[i].getAutor(), separadorColumna, this.publicaciones[i].getFecha(), separadorColumna);
                if (i != this.publicaciones.length - 1)
                    cadena = cadena.concat(this.publicaciones[i].getTipo(), separadorFila);
                else
                    cadena = cadena.concat(this.publicaciones[i].getTipo());
            }
            return cadena;
        }
        else
            return "No existen publicaciones";
    };
    return GestorPublicaciones;
}());
exports["default"] = GestorPublicaciones;
