export default class ColorDisplay {
    private colorDisplay: string;

    public setColorDisplay(color: string): void {
        this.colorDisplay = color;
    }
    public getColorDisplay(): string {
        return this.colorDisplay;
    }
}