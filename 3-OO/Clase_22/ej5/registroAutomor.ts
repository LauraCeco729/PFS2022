import Auto from "./auto";
import VehiculoGrande from "./vehiculoGrande";

export default class RegistroAutomotor {
    private vehiculos: Auto[];
    private camionetas: VehiculoGrande[];
    private nombre: string;

    constructor(nombre: string) {
        this.camionetas = [];
        this.vehiculos = [];
        this.nombre = nombre;
    }

    //CRUDF  Create-Read-Update-Delete-Find - ABMLC
    public createVehiculo(vehiculo: Auto): void {
        if (vehiculo) {
            try {
                this.vehiculos.push(vehiculo);

            }
            catch (error) {
                throw new Error('Error en la inserción de la clase');
            }
        }
        else {
            throw new Error('La clase "Vehículo" está vacía');
        }

    }
    public findVehiculos(vehiculos: Auto): number {
        for (let i = 0; i < this.vehiculos.length; i++) {
            if (this.vehiculos[i] == vehiculos)
                return i;
        }
        return -1;                                      //Auto no encontrado                               
    }
    public updateVehiculos(vehiculos: Auto, posicion: number): void {
        if (vehiculos) {
            try {
                this.vehiculos[posicion] = vehiculos;
            }
            catch (error) {
                throw new Error(`Error en la posición ${posicion}`);
            }
        }
    }
    public deleteVehiculos(posicion: number): void {
        if (this.vehiculos[posicion]) {
            try {
                this.vehiculos.splice(posicion, 1);
            }
            catch (error) {
                throw new Error(`Error en la posición ${posicion}`);
            }
        }
        else {
            throw new Error(`Error en la posición ${posicion}`);
        }
    }

    public readVehiculos(): Auto[] {
        let vehiculos: Auto[] = [];
        this.vehiculos.forEach(Auto => {
            vehiculos.push(Auto);
        });
        return vehiculos;
    }

    public createVehiculoGrande(camioneta: VehiculoGrande): void {
        if (this.camionetas) {
            try {
                this.camionetas.push(camioneta);
            }
            catch (error) {
                throw new Error(`Error en la inserción`);
            }
        }
    }
    public findVehiculoGrande(camioneta: VehiculoGrande): number {
        for (let i = 0; i < this.camionetas.length; i++) {
            if (this.camionetas[i] == camioneta)
                return i;
        }
        return -1;                                      //Auto no encontrado                               
    }
    public updateVehiculoGrande(camioneta: VehiculoGrande, posicion: number): void {
        if (camioneta)
            this.camionetas[posicion] = camioneta;
        else {
            throw new Error(`Error en update`);
        }
    }
    public deleteVehiculoGrande(posicion: number): void {
        if (this.camionetas[posicion]) {
            try {
                this.camionetas.splice(posicion, 1);
            }
            catch (error) {
                throw new Error(`Error en la posición ${posicion}`);
            }
        }
    }
    public readVehiculoGrandes(): VehiculoGrande[] {
        let camioneta: VehiculoGrande[] = [];

        this.camionetas.forEach(VehiculoGrande => {
            camioneta.push(VehiculoGrande);
        });
        return camioneta;
    }
    public getCantidadDeVehiculosRegistrados(): number {
        try {
            return this.vehiculos.length + this.camionetas.length;

        }
        catch (error) {
            throw new Error(`Error inesperado`);
            return -1;
        }
    }
    public getRegistroNombre(): string {
        return this.nombre;
    }
    public convertirStringAutoNormal(separadorFila: string, separadorColumna: string): string {
        let cadena: string = '';
        if (this.vehiculos) {
            for (let i = 0; i < this.vehiculos.length; i++) {
                cadena = cadena.concat(this.vehiculos[i].getTitular(), separadorColumna,
                    this.vehiculos[i].getPatente(), separadorColumna,
                    this.vehiculos[i].getMarca(), separadorColumna,
                    this.vehiculos[i].getModelo(), separadorColumna,
                    this.vehiculos[i].getAnio(), separadorColumna);
                if (i != this.vehiculos.length - 1)
                    cadena = cadena.concat(this.vehiculos[i].getColor(), separadorFila);
                else
                    cadena = cadena.concat(this.vehiculos[i].getColor());
            }
            return cadena;
        }
        else
            return "No existen publicaciones";
    }
    public convertirStringVehiculoGrande(separadorFila: string, separadorColumna: string): string {
        let cadena: string = '';
        if (this.camionetas) {
            for (let i = 0; i < this.camionetas.length; i++) {
                cadena = cadena.concat(this.camionetas[i].getTitular(), separadorColumna,
                    this.camionetas[i].getPatente(), separadorColumna,
                    this.camionetas[i].getMarca(), separadorColumna,
                    this.camionetas[i].getModelo(), separadorColumna,
                    this.camionetas[i].getAnio(), separadorColumna,
                    this.camionetas[i].getEjes(), separadorColumna,
                    this.camionetas[i].getCapacidad(), separadorColumna
                );
                if (i != this.camionetas.length - 1)
                    cadena = cadena.concat(this.camionetas[i].getColor(), separadorFila);
                else
                    cadena = cadena.concat(this.camionetas[i].getColor());
            }
            return cadena;
        }
        else
            return "No existen publicaciones";
    }
}





