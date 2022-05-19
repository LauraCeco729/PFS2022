import * as rls from 'readline-sync';

let numero: number = rls.questionInt("Ingrese un numero: ");

if (numero == 0) {
    console.log ("El numero ingresado es 0 ");
}
else {
    if (numero % 2 == 0) {
        console.log ("El numero ingresado es PAR ");
    }
       else {
      console.log ("El numero ingresado es IMPAR ");
  }  
}