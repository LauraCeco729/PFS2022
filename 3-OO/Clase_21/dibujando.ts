import Cartuchera from "./cartuchera";
import Lapiz from "./lapiz";

let azul : Lapiz = new Lapiz('faber','azul','2B','si', 100);
let negro : Lapiz = new Lapiz('maped','negro','3B','no', 200);
let rojo : Lapiz = new Lapiz('bic','rojo','4B','si', 300);

let miCartuchera : Cartuchera = new Cartuchera('Cartuchera de Laura');

miCartuchera.createLapices(azul);
miCartuchera.createLapices(negro);
miCartuchera.createLapices(rojo);

console.log(miCartuchera);
console.log(miCartuchera.readLapicesTxt());

//miCartuchera.updateLapices(azul, 1);
//console.log(miCartuchera.readLapices());

console.log(miCartuchera.readLapicesTxt());

miCartuchera.deleteLapices(1);

console.log(miCartuchera.readLapicesTxt());