"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var clave, intentos, claveCorrecta;
intentos = 3;
(clave = "eureca"), "Eureca", "EURECA";
for (var contador = 0; contador < intentos; contador++) {
    claveCorrecta = rls.question("ingrese la clave: ");
    if (claveCorrecta == clave) {
        console.log("la clave ingresada es la correcta!");
    }
    else {
        console.log("clave incorrecta le quedan " + (intentos - contador - 1) + " intentos.");
    }
}
