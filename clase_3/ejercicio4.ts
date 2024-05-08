import * as readlineSync from 'readline-sync';

let numeroIngresado:number = readlineSync.questionInt("ingrese el numero que desea saber si es par o impar: ");

if (numeroIngresado == 0){
    console.log("el numero es 0");
} else if (numeroIngresado % 2 == 0 ){
    console.log("el numero es par");
} else {
    console.log("el numero es impar");
}