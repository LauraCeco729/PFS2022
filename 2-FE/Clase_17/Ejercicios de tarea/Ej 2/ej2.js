'uso estricto';

//Genere una cadena con los números del 1 al 100 (usando ciclos), y agreguelos mediante Javascript 
//al cuerpo de la página al presionar un botón.

let boton = document.getElementById("btn");
let ramdomDivisor = document.getElementById("divisor");

boton.addEventListener('click', () => {
    let myCustomColor = ramdomColor();
    let myCustomHeight = ramdomPorcentaje();
    let myCustomWidth = ramdomPorcentaje();
    let localContainer = document.createElement("div");
    
    localContainer.id = 'myContainer';
    localContainer.innerHTML = `Color: ${myCustomColor}, Height: ${myCustomHeight}, Width:  ${myCustomWidth}`;
    localContainer.style.backgroundColor = myCustomColor;
    localContainer.style.height = myCustomHeight;
    localContainer.style.width = myCustomWidth
    ramdomDivisor.replaceChildren(localContainer);

});

function ramdomPorcentaje() {
    let customHeight = Math.floor(Math.random() * 100) + "%";
    console.log(customHeight);
    return customHeight;
}

function ConvertRGBtoHex(red, green, blue) {
    let customColor = "#" + ColorToHex(red) + ColorToHex(green) + ColorToHex(blue);
    console.log(customColor);
    return customColor;
}
function ColorToHex(color) {
    let hexadecimal = color.toString(16);
    return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
}
function ramdomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    return ConvertRGBtoHex(red, green, blue);
}

