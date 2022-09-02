import Color from "./color";

export default class Auto {
    private patente: string;
    private titular: string;
    private marca: string;
    private modelo: string;
    private anio: number;
    private color: Color;

    constructor(patente: string, titular: string, marca: string, modelo: string, anio: number,) {
        this.patente = patente;
        this.titular = titular;
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }

    public getPatente(): string {
        return this.patente;
    }
    public setPatente (patente: string) {
        this.patente = patente;
    }
    public getTitular(): string {
        return this.titular;
    }
    public setTitular (titular: string) {
        this.titular = titular;
    }
    public getMarca(): string {
        return this.marca;
    }
    public setMarca(marca: string) {
        this.marca = marca;
    }
    public getModelo(): string {
        return this.modelo;
    }
    public setModelo(modelo: string) {
        this.modelo = modelo;
    }
    public getAnio(): number {
        return this.anio;
    }
    public setAnio(anio: number): void {
        this.anio = anio;
    }

}