import Lapiz from './lapiz'

export default class Cartuchera {
    private dueño: string;
    private lapices: Lapiz[];

    constructor(dueño: string) {
        this.dueño = this.dueño;
        this.lapices = [];
    }
    public getDueño(): string {
        return this.dueño;
    }
    public setDueño(dueño: string): void {
        this.dueño = dueño;
    }
    //CRUDF  Create-Read-Update-Delete-Find - ABMLC
    public createLapices(lapices: Lapiz): void {
        if (lapices)
            this.lapices.push(lapices);
    }

    public findLapices(lapices: Lapiz): number { //boolean en las buenas practicas
        for (let i = 0; i < this.lapices.length; i++) {
            if (this.lapices[i] == lapices)
                return i; //true en las buenas practicas
        }
        return -1; //false en las buenas practicas
    }
   
    public updateLapices(lapiz: Lapiz, posicion: number): void {
        if (lapiz)
            this.lapices[posicion] = lapiz;
    }

    public deleteLapices(posicion: number): void {
        if (this.lapices[posicion])
            this.lapices.splice(posicion, 1);
    }

    public readLapicesTxt(): string {
        let textoLapices: string = '';
        this.lapices.forEach(Lapiz => {
            textoLapices += Lapiz.imprimir() + '\n'
        });
        return textoLapices;
    }
}

 //Porque se lee la variable privada así????
 //public readLapices() : Lapiz[] {
 // let lapices: Lapiz[] = [];
 // this.lapices.forEach(lapiz => {
 //   lapices.push(lapiz)
 // });
 //  return lapices;