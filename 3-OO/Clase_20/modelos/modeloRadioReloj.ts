import ColorDisplay from "./modeloColorDisplay";

export default class RadioReloj {
    //Definición de estados//
    private encendido: boolean;
    private am: boolean;
    private alarma: boolean;
    private volumen: number;
    private frecuencia: number;
    private hora: number;
    private alarmaHora: number;
    private colorDisplay: ColorDisplay;

    //Constructor//
    public constructor(
        encendidoInicial?: boolean,
        amInicial?: boolean,
        volumenInicial?: number,
        frecuenciaInicial?: number,
        horaInicial?: number,
        alarmaInicial?: number,
        alarmaOnIncial?: boolean,
        colorDisplayInicial?: string,
    ) {
        if (encendidoInicial == undefined) {
            this.encendido = false;
        }
        else {
            this.encendido = encendidoInicial;
        }
        if (amInicial == undefined) {
            this.am = true;
        }
        else {
            this.am = amInicial;
        }
        if (volumenInicial == undefined) {
            this.volumen = 5;
        }
        else {
            this.volumen = volumenInicial;
        }
        if (frecuenciaInicial == undefined) {
            this.frecuencia = 54000;
        }
        else {
            this.frecuencia = frecuenciaInicial;
        }
        if (horaInicial == undefined) {
            this.hora = 800;
        }
        else {
            this.hora = horaInicial;
        }
        if (alarmaInicial == undefined) {
            this.alarmaHora = 900;
        }
        else {
            this.alarmaHora = alarmaInicial;
        }
        if (alarmaOnIncial == undefined) {
            this.alarma = false;
        }
        else {
            this.alarma = alarmaOnIncial;
        }
        this.colorDisplay = new ColorDisplay();

        if (colorDisplayInicial == undefined) {
            this.colorDisplay.setColorDisplay('red');
        }
        else {
            this.colorDisplay.setColorDisplay(colorDisplayInicial);
        }
    }
    /*Deficinición de funcionalidad
    getter y setter para cada variable*/
    public encerderApagar(): void {
        this.encendido = !this.encendido;
    }
    public elegirAM(): void {
        //this.am = true => AM
        //this.am = false => FM
        this.am = !this.am;
    }
    public encerderAlarma(): void {
        this.alarma = !this.alarma;
    }
    public subirVolumen(): void {
        this.volumen += 1;
        if (this.volumen >= 100)
            this.volumen = 100;
    }
    public bajarVolumen(): void {
        this.volumen -= 1;
        if (this.volumen <= 0)
            this.volumen = 0;
    }
    public subirFrecuencia(): void {
        this.frecuencia += 1;
        if (this.am) {
            if (this.frecuencia >= 160000)
                this.frecuencia = 160000;
        }
        else {
            if (this.frecuencia >= 108e6)
                this.frecuencia = 108e6;
        }
    }
    public bajarFrecuencia(): void {
        this.frecuencia -= 1;
        if (this.am) {
            if (this.frecuencia <= 54000)
                this.frecuencia = 54000;
        }
        else {
            if (this.frecuencia >= 88e6)
                this.frecuencia = 88e6;
        }
    }
    public setHora(hora: number): void {
        this.hora = hora;
    }
    public getHora(): number {
        return this.hora;
    }
    public setAlarma(alarmaHora: number): void {
        this.alarmaHora = alarmaHora;
    }
    public getAlarma(): number {
        return this.alarmaHora;
    }
    public setColorDisplay(color: string) {
        this.colorDisplay.setColorDisplay(color);
    }
    public getColorDisplay(): string {
        return this.colorDisplay.getColorDisplay();
    }
    
}

