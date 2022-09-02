import Publicacion from "./publicaciones_class";

export default class GestorPublicaciones {
    private publicaciones: Publicacion[];

    constructor() {
        this.publicaciones = [];
    }

    //CRUDF  Create-Read-Update-Delete-Find - ABMLC
    public createPublicacion(publicacion: Publicacion): void {
        if (publicacion)
            this.publicaciones.push(publicacion);
    }
    public findPublicacion(publicacion: Publicacion): number {
        for (let i = 0; i < this.publicaciones.length; i++) {
            if (this.publicaciones[i] == publicacion)
                return i;
        }
        return -1;                                      //Publicación no encontrada                               
    }
    public findPublicacionPorTitulo(titulo: string): number {
        for (let i = 0; i < this.publicaciones.length; i++) {
            if (this.publicaciones[i].getTitulo() == titulo)
                return i;
        }
        return -1;                                      //Publicación no encontrada                               
    }
    public updatePublicacion(publicacion: Publicacion, posicion: number): void {
        if (publicacion)
            this.publicaciones[posicion] = publicacion;
    }
    /**
     * @brief Borra la Publicación en la "posicion"
     * @param posicion ïndice de la publicación a borrar
     * @returns Si la publicación fue eliminada correctamente, devuelve el número de la posición.
     *          Si no existe devuelve -1
     */
    public deletePublicacion(posicion: number): number {
        if (this.publicaciones[posicion]) {
            this.publicaciones.splice(posicion, 1);
            return posicion;
        }
        else {
            return -1;
        }

    }
    public readPublicaciones(): Publicacion[] {
        let publicaciones: Publicacion[] = [];
        this.publicaciones.forEach(Publicacion => {
            publicaciones.push(Publicacion);
        });
        return publicaciones;
    }
    public readPublicacion(posicion: number): Publicacion {
        return this.publicaciones[posicion];
    }
    /**
     * @brief Convierte la clase GestorPublicaciones en string
     * @param separadorFila Separador de Fila
     * @param separadorColumna Separador de Columna
     * @returns Cadena convertidad en texto
     */
    public convertirString(separadorFila: string, separadorColumna: string): string {
        let cadena: string = '';
        if (this.publicaciones) {
            for (let i = 0; i < this.publicaciones.length; i++) {
                cadena = cadena.concat(this.publicaciones[i].getTitulo(), separadorColumna,
                    this.publicaciones[i].getAutor(), separadorColumna,
                    this.publicaciones[i].getFecha(), separadorColumna);
                if (i != this.publicaciones.length - 1)
                    cadena = cadena.concat(this.publicaciones[i].getTipo(), separadorFila);
                else
                    cadena = cadena.concat(this.publicaciones[i].getTipo());
            }
            return cadena;
        }
        else
            return "No existen publicaciones";
    }
}