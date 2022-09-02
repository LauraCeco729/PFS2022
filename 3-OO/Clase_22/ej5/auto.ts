import { throws } from "assert";
import Color from "./color";

export default class Auto {
    private patente: string;
    private titular: string;
    private marca: string;
    private modelo: string;
    private anio: number;
    private color: Color;

    constructor(patente: string, titular: string, marca: string, modelo: string, anio: number, red: number, green: number, blue: number) {
        this.patente = patente;
        this.titular = titular;
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.color = new Color(red, green, blue);
    }

    public getPatente(): string {
        return this.patente;
    }
    public setPatente(patente: string) {
        this.patente = patente;
    }
    public getTitular(): string {
        return this.titular;
    }
    public setTitular(titular: string) {
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
    public getAnio(): string {
        return this.anio.toString();
    }
    public setAnio(anio: number): void {
        this.anio = anio;
    }
    public getColor(): string {
        return this.color.getColor().toString();
    }
    public setColor(red: number, green: number, blue: number) {
        this.color = new Color(red, green, blue);
    }
    public printAuto(): void {
        console.log(`
        Titular: ${this.titular}
        Patente: ${this.patente}
        Marca: ${this.marca}
        Modelo: ${this.modelo}
        Año: ${this.anio}
        Color RGB: ${this.color.getColor()}
        `)
    }
}