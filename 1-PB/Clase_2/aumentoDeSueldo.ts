import * as rls from 'readline-sync';

let salarioActual: number = rls.questionInt("Ingrese su salario actual: ");
console.log("Su salario actual es: ", salarioActual);

if (salarioActual <= 15000) {
    console.log("Su salario con aumento del 20% será: ", salarioActual * 1.2);
}
else {
    if (salarioActual <= 20000) {
        console.log("Su salario con aumento del 10% será: ", salarioActual * 1.1);
    }
    else {
        if (salarioActual <= 25000) {
            console.log("Su salario con aumento del 5% será: ", salarioActual * 1.05);
        }
        else {
               console.log("Su salario no percibe aumento: ", salarioActual);
        }
    }
  }
