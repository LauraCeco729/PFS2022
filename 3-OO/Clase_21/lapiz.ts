export default class Lapiz {
    private marca : string;
    private color : string;
    private grosorMina : string;
    private punta : string;
    private precio : number;
    

    constructor(marca : string, color : string, grosorMina : string, punta : string, precio : number, ) {
        this.marca = marca;
        this.color = color;
        this.grosorMina=grosorMina;
        this.punta=punta;
        this.precio=precio;
        
    }
    public getMarca(): string {
        return this.marca;
    }
    public setMarca(marca: string): void {
        this.marca = marca;
    }
    public getColor(): string {
        return this.color;
    }
    public setColor(color: string): void {
        this.color = color;
    }
    public getGrosorMina(): string {
        return this. grosorMina;
    }
    public setGrosorMina (grosorMina: string) : void {
        this.grosorMina = grosorMina;
    }
    public getPunta(): string {
        return this.punta;
    }
    public setPuta(punta: string): void {
        this.punta = punta;
    }    
    public getPrecio(): number {
        return this.precio;
    }
    public setPrecio(precio: number): void {
        this.precio = precio;
    }
    
    public imprimir() : string {
        return `Lapiz { 
            marca:${this.getMarca()}, 
            color:${this.getColor()}, 
            grosorMina: ${this.getGrosorMina ()}, 
            punta: ${this.getPunta()},precio:${this.getPrecio()}, 
            color:${this.getColor()}  
        }`
    }
}