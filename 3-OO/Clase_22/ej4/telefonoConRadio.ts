import teléfono from "./telefono";

export default class telefonoConRadio extends teléfono {
    private isOnRadio: boolean;
    private frecuencia: number;
    private volumen: number;

    constructor(isOnRadio?: boolean, frecuencia?: number, volumen?: number) {
        super();
        if (isOnRadio == undefined) {
            this.isOnRadio = false;
        }
        else {
            this.isOnRadio = isOnRadio;
        }
        if (frecuencia == undefined)
            this.frecuencia = 95.1e6;
        else
            this.frecuencia = frecuencia;
        if (volumen == undefined) {
            this.volumen = 10;
        }
        else {
            this.volumen = volumen;
        }

    }
    public getIsOnRadio(): boolean {
        return this.isOnRadio;
    }
    private setIsOnRadio(on: boolean) {
        this.isOnRadio = on;
    }
    public encendidoRadio(on: boolean): void {
        this.setIsOnRadio(on);
        if (on) {
            console.log("Radio encendida");
        }
        else {
            console.log("Radio apagada");
        }
    }
    public verFrecuenciaActual(): number {
        return this.frecuencia;
    }
    public subirFrecuencia(): void {
        this.frecuencia += 10e6;
    }
    public bajarFrecuencia(): void {
        this.frecuencia -= 10e6;
    }
    public getVolumenActual(): number {
        return this.volumen;
    }
    public subirVolumen(volumen?: number): void {
        if (volumen == undefined) {
            this.volumen += 1;
            if (this.volumen >= 100)
                this.volumen = 100;
        }
        else
            this.volumen = volumen;
    }
    public getVolumen(): number {
        return this.volumen;
    }

    public bajarVolumen(): void {
        this.volumen -= 1;
        if (this.volumen <= 0)
            this.volumen = 0;
    }
    public imprimirTelefonoConRadio(): void {
        console.log(`Radio encendida? ${this.getIsOnRadio()}, Volumen: ${this.getVolumenActual()}, Frecuencia: ${this.verFrecuenciaActual()}`);
    }
}