"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var numeroIngresado = readlineSync.questionInt("ingrese el numero que desea saber si es par o impar: ");
if (numeroIngresado == 0) {
    console.log("el numero es 0");
}
else if (numeroIngresado % 2 == 0) {
    console.log("el numero es par");
}
else {
    console.log("el numero es impar");
}
