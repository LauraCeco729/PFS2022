import Auto from "./auto";

export default class VehiculoGrande extends Auto {
    private capacidad: number;
    private ejes: number;

    constructor(capacidad: number, ejes: number, patente: string,
        titular: string, marca: string, modelo: string,
        anio: number, red: number, green: number, blue: number) {
        super(patente, titular, marca, modelo, anio, red, green, blue);
        this.capacidad = capacidad;
        this.ejes = ejes;
    }
    public setCapacidad(capacidad: number) {
        this.capacidad = capacidad;
    }
    public getCapacidad(): string {
        return this.capacidad.toString();
    }
    public setEjes(ejes: number) {
        this.ejes = ejes;
    }
    public getEjes(): string {
        return this.ejes.toString();
    }
}
