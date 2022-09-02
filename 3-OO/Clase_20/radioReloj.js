"use strict";
exports.__esModule = true;
//import RadioReloj from "./modeloRadioReloj";
var modeloArrayRadioReloj_1 = require("./modelos/modeloArrayRadioReloj");
//encedido = OFF, AM, volumen = 10, frec = 84.7kHz
//let radioReloj1: RadioReloj = new RadioReloj(false, true, 10, 84700);
//encedido = ON, FM, volumen = 20, frec = 93.7MHz, hora = 00:00, alarma = 00:00        
//let radioReloj2: RadioReloj = new RadioReloj(true, true, 20, 93.7e6, 0, 0);
//encedido = ON, FM, volumen = 20, frec = 103.3MHz, hora = 00:00, alarma = 00:00, alarma apagada
//let radioReloj3: RadioReloj = new RadioReloj(true, true, 20, 103.3e6, 1200, 0, false);
/*radioReloj1.setAlarma(1200);
radioReloj2.setAlarma(1500);
radioReloj2.encerderAlarma();

if(radioReloj2.getColorDisplay() == "red"){
    radioReloj2.setColorDisplay("green");
}

console.log(`Hora RadioReloj3 del constructor: ${radioReloj3.getHora()}`);
let horaRadioReloj3: number;
horaRadioReloj3 = radioReloj3.getHora();
if (horaRadioReloj3 == 1200) {
    radioReloj3.setHora(1500);
}
console.log(`Hora RadioReloj3 modificada: ${radioReloj3.getHora()}`);*/
var myRadioReloj = new modeloArrayRadioReloj_1["default"]();
console.log("====================== Crear ========================");
console.log(myRadioReloj.getElemento(0));
myRadioReloj.agregar();
console.log(myRadioReloj.getElemento(0));
myRadioReloj.agregar();
console.log(myRadioReloj.getElemento(1));
myRadioReloj.quitarTodo();
console.log("=================== Remover todos ===================");
console.log(myRadioReloj.getElemento(0));
