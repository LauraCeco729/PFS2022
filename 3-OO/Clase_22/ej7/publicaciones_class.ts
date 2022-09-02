export enum TipoPublicacion {
    libro = 'LIBRO',
    revista = 'REVISTA',
    diario = 'DIARIO',
};

export default class Publicacion {
    private titulo: string;
    private autor: string;
    private fecha: string;
    private tipo : TipoPublicacion;

    constructor(titulo: string, autor: string, fecha: string, tipo : TipoPublicacion) {
        this.autor = autor;
        this.fecha = fecha;
        this.titulo = titulo;
        this.tipo = tipo;
    }

    public getAutor(): string {
        return this.autor;
    }
    public setAutor(autor: string): void {
        this.autor = autor;
    }

    public getFecha(): string {
        return this.fecha;
    }
    public setFecha(fecha: string): void {
        this.fecha = fecha;
    }
    public getTitulo(): string {
        return this.titulo;
    }
    public setTitulo(titulo: string): void {
        this.titulo = titulo;
    }
    public setTipo(tipo : TipoPublicacion): void{
        this.tipo = tipo;
    }
    public getTipo() : TipoPublicacion {
        return this.tipo;
    }
}
