import * as rls from "readline-sync";

let nombreVendedor: string[] = ['Camila', 'Franco', 'Alicia', 'Matias', 'Sandra'];

let venCamila: number[] = [32558, 36165, 34240, 39273, 34360, 21347, 20869, 21493, 23062, 31908, 30369, 30652]; //Camila
let venFranco: number[] = [27520, 31480, 24053, 34823, 32942, 38477, 23756, 21413, 26699, 22045, 25625, 26855]; //Franco
let venAlicia: number[] = [20584, 33473, 34300, 24598, 33955, 24040, 39173, 25542, 25105, 26759, 29790, 36218]; //Alicia
let venMatias: number[] = [27243, 38774, 21246, 30691, 24542, 39771, 31807, 31641, 20850, 29837, 37182, 28006]; //Matias
let venSandra: number[] = [23334, 32687, 25217, 26844, 27033, 35244, 25702, 25781, 35525, 34874, 38842, 20562]; //Sandra*/

let ventaMaxima: number[] = new Array(5);
let ventaMinima: number[] = new Array(5);

let matriz: number[][] = crearMatriz(nombreVendedor.length, 12);
function crearMatriz(filas: number, columnas: number): number[][] {
    let matriz: number[][] = new Array(filas);
    let fila: number[];
    for (let index = 0; index < matriz.length; index++) {
        fila = new Array(columnas);
        matriz[index] = fila;
        switch (index) {
            case 0:
                matriz[index] = venCamila;
                break;
            case 1:
                matriz[index] = venFranco;
                break;
            case 2:
                matriz[index] = venAlicia;
                break;
            case 3:
                matriz[index] = venMatias;
            case 4:
                matriz[index] = venSandra;
                break
        }
    }
    return matriz;
}

//***************Principal***************//
for (let i = 0; i < nombreVendedor.length; i++) {
    console.log("Nombre del vendedor: ", nombreVendedor[i]);
    switch (i) {
        case 0:
            ventaMaxima[i] = ventaMaxYMes(venCamila);
            ventaMinima[i] = ventaMinYMes(venCamila, ventaMaxima[i]);
            promedioSemanal(venCamila);
            break;
        case 1:
            ventaMaxima[i] = ventaMaxYMes(venFranco);
            ventaMinima[i] = ventaMinYMes(venFranco, ventaMaxima[i]);
            promedioSemanal(venFranco);
            break;
        case 2:
            ventaMaxima[i] = ventaMaxYMes(venAlicia);
            ventaMinima[i] = ventaMinYMes(venAlicia, ventaMaxima[i]);
            promedioSemanal(venAlicia);

            break;
        case 3:
            ventaMaxima[i] = ventaMaxYMes(venMatias);
            ventaMinima[i] = ventaMinYMes(venMatias, ventaMaxima[i]);
            promedioSemanal(venMatias);

            break;
        case 4:
            ventaMaxima[i] = ventaMaxYMes(venSandra);
            ventaMinima[i] = ventaMinYMes(venSandra, ventaMaxima[i]);
            promedioSemanal(venSandra);
            break;
    }
}

let indiceNombre: number = 0;
let indiceMonto: number = 0;

obtenerMejorVendedorSemanal(matriz);
obtenerPeorVendedorSemanal(matriz);

function obtenerMejorVendedorSemanal(matriz: number[][]) {
    let i : number;
    let j : number;
    for (j = 0; j < matriz[0].length; j++) {
        let mejorVenta = 0;
        for (i = 0; i < matriz.length; i++) {
            if (mejorVenta < matriz[i][j]) {
                indiceNombre = i;
                indiceMonto = j;
                mejorVenta = matriz[i][j];
                //console.log(`${i} ${j}`);
            }
        }
        console.log(`Mejor vendedor semanal ${j+1} es ${nombreVendedor[indiceNombre]} - Monto: ${matriz[indiceNombre][indiceMonto]}`);
        //console.log('Mejor vendedor semanal ${j+1} es: ', nombreVendedor[indiceNombre]);
        //console.log('y el monto es: ', matriz[indiceNombre][indiceMonto]);
    }   
}
function obtenerPeorVendedorSemanal(matriz: number[][]) {
    let i : number;
    let j : number;
    for (j = 0; j < matriz[0].length; j++) {
        let peorVenta = 0;
        for (i = 0; i < matriz.length; i++) {
            if (peorVenta < matriz[i][j]) {
                indiceNombre = i;
                indiceMonto = j;
                peorVenta = matriz[i][j];
                //console.log(`${i} ${j}`);
            }
        }
        console.log(`Peor vendedor semanal ${j+1} es ${nombreVendedor[indiceNombre]} - Monto: ${matriz[indiceNombre][indiceMonto]}`);
        //console.log('Mejor vendedor semanal ${j+1} es: ', nombreVendedor[indiceNombre]);
        //console.log('y el monto es: ', matriz[indiceNombre][indiceMonto]);
    }   
}
//***************Fin Principal***************//

function ventaMaxYMes(venta: number[]): number {
    let ventaMaxPesos: number = 0;
    let ventaMaxMes: number = 0;
    for (let i = 0; i < venta.length; i++) {
        if (venta[i] > ventaMaxPesos) {
            ventaMaxPesos = venta[i];
            ventaMaxMes = i;
        }
    }
    console.log("La venta max fue: ", ventaMaxPesos);
    console.log("La venta max fue en el mes: ", ventaMaxMes + 1);
    return ventaMaxPesos;
}

function ventaMinYMes(venta: number[], ventaMax: number): number {
    let ventaMinPesos: number = 0;
    let ventaMinMes: number = 0;
    for (let i = 0; i < venta.length; i++) {
        if (venta[i] < ventaMax) {
            ventaMinPesos = venta[i];
            ventaMinMes = i;
        }
    }
    console.log("La venta min fue: ", ventaMinPesos);
    console.log("La venta min fue en el mes: ", ventaMinMes + 1);
    return ventaMinPesos;
}

function promedioSemanal(ventas: number[]) {
    let promedio: number = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 4; j++)
            promedio += ventas[i + j];
        promedio /= 4;
        console.log(`Promedio Semanal ${i + 1}: es: ${promedio}`);
        promedio = 0;
    }

}
