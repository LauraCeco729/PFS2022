import teléfono from "./telefono";

export default class telefonoConCamara extends teléfono {
    private nombreArchivoFoto: string;
    private flash: boolean;

    constructor() {
        super();
        this.nombreArchivoFoto = "..../Android/DCIM/photo1.jpg";
        this.flash = false;
    }

    public isFlash(): boolean {
        return this.flash;
    }

    public sacarFoto(): void {
        console.log("Foto sacado con éxito!!!");
        this.nombreArchivoFoto = "..../Android/DCIM/photo2.jpg";
    }
    public usarFlash(flash: boolean): void {
        try {
            this.flash = flash;
            if (flash) {
                console.log("Flash Encedido");
            }
            else {
                console.log("Flash Apagado");
            }
        }
        catch (error) {
            switch (error) {
                case 0:
                    console.log("Error - Flash no responde");
                    break;
                case 1:
                    console.log("Batería baja - No se puede encender el Flash");
                    break;
            }

        }

    }
    public getArchivoNombreFoto(): string {
        return this.nombreArchivoFoto;
    }

}