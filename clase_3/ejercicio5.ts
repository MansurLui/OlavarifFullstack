import * as rls from "readline-sync";

let esOctubre:string = rls.question("en que mes estamos? ");
let precioProducto:number = rls.questionInt("cuanto vale el producto que llevas? ");
let cantProducto:number = rls.questionInt("cuantas unidades llevas del mismo producto? ");
let precioTotal:number = precioProducto*cantProducto;
let precioTotalOctubre:number = precioTotal*.85;

if (esOctubre=="Octubre" || esOctubre=="octubre"){
    console.log("El precio de tus productos es de:$"+precioTotalOctubre)
} else {
    console.log("El precio de tus productos es de:$"+precioTotal)
};