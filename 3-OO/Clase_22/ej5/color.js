"use strict";
exports.__esModule = true;
var Color = /** @class */ (function () {
    function Color(red, green, blue) {
        this.color = -1;
        this.red = red;
        this.blue = blue;
        this.green = green;
        this.setColor();
    }
    Color.prototype.setColor = function () {
        if (this.red >= 0 && this.red < 256 || this.blue >= 0 && this.blue < 256 || this.green >= 0 && this.green < 256)
            return this.color = this.red * 65536 + this.green * 256 + this.blue;
        else
            return this.color = -1;
    };
    Color.prototype.getColor = function () {
        if (this.color >= 0)
            return this.color;
        else
            return -1;
    };
    return Color;
}());
exports["default"] = Color;
