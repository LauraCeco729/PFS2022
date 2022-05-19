import * as rls from 'readline-sync';

let precioDelproducto : number = rls.questionFloat ("Ingrese el precio del producto: ");
console.log ("El precio del producto es: ", precioDelproducto);
let cantidadDeProductos : number = rls.questionInt ("Ingrese la cantidad de productos: ");
console.log ("La cantidad de productos es: ", cantidadDeProductos);
let totalDeLaCompra : number = precioDelproducto * cantidadDeProductos;
console.log ("El total de la compra es: ", totalDeLaCompra);
if (totalDeLaCompra >=1000) {
   let descuento10 : number = totalDeLaCompra * 0.9;
   console.log ("Su pago con descuento es: ", descuento10);
} 
else {
   let totalApagar : number = totalDeLaCompra;
   console.log ("Su pago sin descuento es: ", totalApagar);
}    


