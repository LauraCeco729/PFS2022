export default class Color {
    private red: number;
    private green: number;
    private blue: number;
    private color: number;

    constructor(red: number, green: number, blue: number) {
        this.color = -1;
        this.red = red;
        this.blue = blue;
        this.green = green;
        this.setColor();
    }
    private setColor(): number {
        if (this.red >= 0 && this.red < 256 || this.blue >= 0 && this.blue < 256 || this.green >= 0 && this.green < 256)
            return this.color = this.red * 65536 + this.green * 256 + this.blue;
        else
            return this.color = -1;
    }
    public getColor(): number {
        if (this.color >= 0)
            return this.color;
        else
            return -1;
    }

}