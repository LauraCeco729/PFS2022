import * as rls from 'readline-sync';

console.log("Es multiplo?");
let a : number = rls.questionInt("Ingrese el primer numero ('a'): ");
let b : number = rls.questionInt("Ingrese el segundo numero ('b'): "); 

if(esMultiplo(a, b)){
    console.log("a es multiplo de b");
}
else{
    console.log("a no es multiplo de b");
}

function esMultiplo(a: number, b : number) : boolean{
    if(a % b == 0)
        return true;
    else
        return false;
}