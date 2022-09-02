import Auto from "./auto";

export default class registroAutomotor {
    private vehiculos: Auto[];

    //CRUDF  Create-Read-Update-Delete-Find - ABMLC
    public createVehiculo(vehículos: Auto): void {
        if (this.vehiculos)
            this.vehiculos.push(vehículos);
    }
    public findVehiculos(vehículos: Auto): number { 
        for (let i = 0; i < this.vehiculos.length; i++) {
            if (this.vehiculos[i] == vehículos)
                return i;                           
        }
        return -1;                                      //Auto no encontrado                               
    }
    public updateVehiculos(vehículos: Auto, posicion: number): void {
        if (vehículos)
            this.vehiculos[posicion] = vehículos;
    }
    public deleteVehiculos(posicion: number): void {
        if (this.vehiculos[posicion])
            this.vehiculos.splice(posicion, 1);
    }
    public readVehiculos () : Auto [] {
        let vehiculos: Auto [] = [];
        this.vehiculos.forEach(Auto => {
            vehiculos.push(Auto)
        });
        return vehiculos;
    }
}





