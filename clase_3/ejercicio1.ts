import * as readlineSync from 'readline-sync';

let precioProducto = readlineSync.questionInt("ingrese el precio del producto: $");
let precioDescuento = precioProducto*0.1;
let precioFinal: number = precioProducto-precioDescuento;

console.log ("El descuento que se le aplica es de : $"+precioDescuento);
console.log("el precio del producto con descuento es de: $"+ precioFinal);
