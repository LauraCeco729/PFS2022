import RadioReloj from "./modeloRadioReloj";

export default class arrayModelRadioReloj {

    private radioReloj: RadioReloj[];
    /**
     * Constructor de la clase. Inicia el arreglo vacio
     */
    public constructor() {
        this.radioReloj = [];
    }
    /**
     * Agregar un elemento "RadioReloj" al final del arreglo
     */
    public agregar() {
        this.radioReloj.push(new RadioReloj);
    }
    /**
     * Obtiene el elemento indicado por parámetro del array privado "radioReloj"
     * @param i elemento a buscar
     * @returns una instancia de la clase RadioReloj
     */
    public getElemento(i: number): RadioReloj {
        return this.radioReloj[i];
    }
    /**
     * Elimina todos los elementos del array
     */
    public quitarTodo(): void {
        this.radioReloj = [];
    }
}
