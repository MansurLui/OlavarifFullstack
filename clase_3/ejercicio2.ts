import * as readlineSync from 'readline-sync';

let tiempoDeVuelta1:number = readlineSync.questionInt("ingrese el tiempo de la primer vuelta: ");
let tiempoDeVuelta2:number = readlineSync.questionInt("ingrese el tiempo de la segunda vuelta: ");
let tiempoDeVuelta3:number = readlineSync.questionInt("ingrese el tiempo de la tercera vuelta: ");
let tiempoDeVuelta4:number = readlineSync.questionInt("ingrese el tiempo de la cuarta vuelta: ");

let tiempoDeVueltaTotal:number = tiempoDeVuelta1 + tiempoDeVuelta2 + tiempoDeVuelta3 + tiempoDeVuelta4;
let promedioDeVuelta:number = tiempoDeVueltaTotal/4;

console.log("el tiempo de total de vueltas de: "+tiempoDeVueltaTotal+" y el tiempo de vuelta parcial es de: "+ promedioDeVuelta);