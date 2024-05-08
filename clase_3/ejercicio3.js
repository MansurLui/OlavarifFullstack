"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var primerNumero = readlineSync.questionInt("ingrese el primer numero:");
var segundoNumero = readlineSync.questionInt("ingrese el segundo numero:");
var tercerNumero = readlineSync.questionInt("ingrese el tercer numero:");
if (primerNumero > segundoNumero && primerNumero > tercerNumero) {
    console.log("el mayor numero es " + primerNumero);
}
else if (segundoNumero > primerNumero && segundoNumero > tercerNumero) {
    console.log("el mayor numero es " + segundoNumero);
}
else if (tercerNumero > primerNumero && segundoNumero < tercerNumero) {
    console.log("el mayor numero es " + tercerNumero);
}
