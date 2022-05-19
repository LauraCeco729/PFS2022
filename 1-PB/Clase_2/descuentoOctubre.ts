import * as rls from 'readline-sync';

let precioDelproducto : number = rls.questionFloat ("Ingrese el precio del producto: ");
console.log ("El precio del producto es: ", precioDelproducto);
let cantidadDeProductos : number = rls.questionInt ("Ingrese la cantidad de productos: ");
console.log ("La cantidad de productos es: ", cantidadDeProductos);
let totalDeLaCompra : number = precioDelproducto * cantidadDeProductos;
console.log ("El total de la compra es: ", totalDeLaCompra);
let mesDeLaCompra : string = rls.question ("Ingrese el mes de la compra: ");
console.log ("El mes es: ", mesDeLaCompra)

if (mesDeLaCompra == 'octubre') {
   let descuento15 : number = totalDeLaCompra - totalDeLaCompra * 0.15;
   console.log ("Su pago con descuento es: ", descuento15);
} 
else {
   console.log ("Su pago es: ", totalDeLaCompra);
}    