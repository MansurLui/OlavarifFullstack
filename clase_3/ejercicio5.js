"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var esOctubre = rls.question("en que mes estamos?");
var precioProducto = rls.questionInt("cuanto vale el producto que llevas?");
var cantProducto = rls.questionInt("cuantas unidades llevas del mismo producto?");
var precioTotal = precioProducto * cantProducto;
var precioTotalOctubre = precioTotal * .85;
if (esOctubre == "Octubre" || esOctubre == "octubre") {
    console.log("El precio de tus productos es de: $" + precioTotalOctubre);
}
else {
    console.log("El precio de tus productos es de: $" + precioTotal);
}
;
