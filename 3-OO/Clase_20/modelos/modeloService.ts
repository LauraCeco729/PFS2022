
import RadioReloj from "./modeloRadioReloj";
enum STATUS {
    Ingreso = 0,
    Revisado,
    EnReparacion,
    Reparado = 3,
    Egresado = 4,
}

export default class Service {

    //Definición de estados//
    private _equipo: RadioReloj;
    private _marca: string;
    private _status: number;
    private _ot: number;
    private _fechaIngreso: string;
    private _fechaEgreso: string;
    private _precio: number;
    private _detalle: string;

    //Constructor//
    public constructor(
        marca?: string,
        fechaIngreso?: string,
        fechaEgreso?: string,
        precio?: number,
        detalle?: string) {
        this._precio = 0;
        this._ot = 0;
        this._equipo = new RadioReloj;
        this._status = STATUS.Ingreso;
        marca == undefined ? this._marca = "Marca X" : this._marca = marca;
        fechaIngreso == undefined ? this._fechaIngreso = "xx/xx/xxxx" : this._fechaIngreso = fechaIngreso;
        fechaEgreso == undefined ? this._fechaEgreso = "xx/xx/xxxx" : this._fechaEgreso = fechaEgreso;
        precio == undefined ? this._precio = 0 : this._precio = precio;
        detalle == undefined ? this._detalle = "x" : this._detalle = detalle;
    }

    /*Deficinición de funcionalidad
   getter y setter para cada variable*/

    public getEquipo(): RadioReloj {
        return this._equipo;
    }
    public setEquipo(value: RadioReloj) {
        this._equipo = value;
    }
    public getMarca(): string {
        return this._marca;
    }
    public setMarca(value: string) {
        this._marca = value;
    }
    public getStatus(): number {
        return this._status;
    }
    public setStatus(value: number) {
        this._status = value;
    }
    public getOt(): number {
        return this._ot;
    }
    public setOt(value: number) {
        this._ot = value;
    }
    public getFechaIngreso(): string {
        return this._fechaIngreso;
    }
    public setFechaIngreso(value: string) {
        this._fechaIngreso = value;
    }
    public getFechaEgreso(): string {
        return this._fechaEgreso;
    }
    public setFechaEgreso(value: string) {
        this._fechaEgreso = value;
    }
    public getPrecio(): number {
        return this._precio;
    }
    public setPrecio(value: number) {
        this._precio = value;
    }
    public getDetalle(): string {
        return this._detalle;
    }
    public setDetalle(value: string) {
        this._detalle = value;
    }

    /**
     * @brief esta función ingresa un equipo del tipo radioreloj
     * @param equipo /el ingreso de un radioreloj al service
     * @param marca /la marca del radioreloj que ingresó al service
     * @param status /el estado que posee ese radioreloj dentro del service
     * @param fechaIngreso /la fecha de ingreso al service
     * @param detalle /la descripción de lo que habria que hacerle como service
     */
    public ingresoEquipo(
        equipo: RadioReloj,
        marca: string,
        status: number,
        fechaIngreso: string,
        detalle: string) {
        this._equipo = equipo;
        this._marca = marca;
        this._status = STATUS.Ingreso;
        this._fechaIngreso = fechaIngreso;
        this._detalle = detalle;

    }

/**
 * @brief  función para el egreso del equipo radioreloj
 * @param status /el estado que posee ese radioreloj dentro del service
 * @param detalle /la descripción de lo que se le hizo en el service
 * @param precio /el costo del service
 * @param fechaEgreso /la fecha de egreso del service
 */
    public egresoEquipo(
        status: number,
        detalle: string,
        precio: number,
        fechaEgreso: string,
    ) {
        this._status = STATUS.Egresado;
        this._detalle = detalle;
        this._precio = this.getPrecio();
        this._fechaEgreso = fechaEgreso;
    }




}



