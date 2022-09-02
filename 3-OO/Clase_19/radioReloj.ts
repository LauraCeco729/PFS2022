class RadioReloj {
    //Definición de estados//
    encendido: boolean;
    am: boolean;
    volumen: number;
    frecuencia: number;
    hora: number;
    alarma: number;
    /*Deficinición de funcionalidad
    getter y setter para cada variable*/
    elegirAM(): void {
        //this.am = true => AM
        //this.am = false => FM
        this.am = !this.am;
    }
    encerderApagar(): void {
        this.encendido = !this.encendido;
    }
    subirVolumen(): void {
        this.volumen += 1;
        if (this.volumen >= 100)
            this.volumen = 100;
    }
    bajarVolumen(): void {
        this.volumen -= 1;
        if (this.volumen <= 0)
            this.volumen = 0;
    }
    subirFrecuencia(): void {
        this.frecuencia += 1;
        if (this.am) {
            if (this.frecuencia >= 160000)
                this.frecuencia = 160000;
        }
        else{
            if (this.frecuencia >= 108e6)
                this.frecuencia = 108e6;
        }
    }
    bajarFrecuencia(): void {
        this.frecuencia -= 1;
        if (this.am) {
            if (this.frecuencia <= 54000)
                this.frecuencia = 54000;
        }
        else{
            if (this.frecuencia >= 88e6)
                this.frecuencia = 88e6;
        }
    }
    entablecerHora(hora : number): void{
        this.hora = hora;
    }
    establecerAlarma(alarma : number): void{
        this.alarma = alarma;
    }
}