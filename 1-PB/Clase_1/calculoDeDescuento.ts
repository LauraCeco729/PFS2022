import * as readlineSync from 'readline-sync';
let precioInicial : number = 450.50
let descuento10 : number = precioInicial * 0.1;
let calcularDescuento : number = precioInicial - descuento10
console.log ("Precio final", calcularDescuento);