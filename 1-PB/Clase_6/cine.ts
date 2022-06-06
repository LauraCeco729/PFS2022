import * as rls from 'readline-sync';

const nButacas = 54;
let butacas : boolean[] = new Array(nButacas);
generateRandomButacas(butacas);


console.log("Cantidad de butacas opcupas", chequearButacasLibre(butacas));
console.log("Cantidad de butacas vacias", nButacas - chequearButacasLibre(butacas));

function generateRandomButacas(butacas : boolean[]){
    for(let i = 0; i < butacas.length; i++){
        let aleatorio : number = Math.random();
        if(aleatorio > 0.5)
            butacas[i] = true;
        else
            butacas[i] = false;
    }
    
}
function chequearButacasLibre(butacas: boolean[]): number{
    let ocupadas : number = 0;
    for(let i = 0; i < butacas.length;i++){
        if(butacas[i] == true){
            ++ocupadas;
        }
    }
    return ocupadas;
}