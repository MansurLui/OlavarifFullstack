"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var precioProducto = readlineSync.questionInt("ingrese el precio del producto: $");
var precioDescuento = precioProducto * 0.1;
var precioFinal = precioProducto - precioDescuento;
console.log("El descuento que se le aplica es de : $" + precioDescuento);
console.log("el precio del producto con descuento es de: $" + precioFinal);
