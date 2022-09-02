import telefonoConCamara from "./telefonoConCamara";
import telefonoConRadio from "./telefonoConRadio";

export default class teléfono {
    private isOn: boolean;
    private bateria: number;
    protected isLinternaOn: boolean;

    constructor(isOn?: boolean, isLinternaOn?: boolean) {

        this.bateria = 50;                      //Bateria al 50%
        if (isOn == undefined) {
            this.isOn = false;
        }
        else {
            this.isOn = isOn;
        }
        if (isLinternaOn == undefined) {
            this.isLinternaOn = false;
        }
        else {
            this.isLinternaOn = isLinternaOn;
        }
    }

    public encerderApagarPhone(): void {
        this.isOn = !this.isOn;
    }
    public getBateriaActual(): number {
        return this.bateria;
    }
    public setBateriaActual(bateria: number): void {
        this.bateria = bateria;
    }
    public encerderApagarLinterna(): void {
        this.isLinternaOn = !this.isLinternaOn;
    }

    /**
     * @brief Envia un mensaje al número dado por parámetro
     * @param mensaje Mensaje a ser enviado
     * @param numero Numero a enviar el mesaje
     * @returns true : mensaje enviado de forma exitosa
     *          false: no se pudo enviar el mensaje
     */
    public mandarMensaje(mensaje: string, numero: number): boolean {
        console.log(`MSG: ${mensaje} al #: ${numero} - Enviado con éxito`);
        return true;
    }
    /**
     * @brief Esta función llama al número dado por parámetro
     * @param numero Numero a hacer la llamada
     * @returns true : llamada exitosa
     *          false: fracaso la llamada
     */
    public hacerLlamada(numero: number): boolean {
        console.log(`Llamando al #: ${numero}`);
        return true;
    }
}