"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
ESTRUCTURA DE UN ARREGLO/ARRAY

let (nombre del arreglo):(tipo del arreglo)[] = new array(longitud del array);
let  cantidadClientes:number[] = new array(30);
*/
/*
EJEMPLO:
//array de los meses del año

let mesesDelAno:string[] = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
let numeroMes:number = rls.questionInt("indique el mes que le interesa:"); //consultamos que mes quieren saber

let indice:number = numeroMes-1 //tiene que ser -1 porque los array arrancan en 0
console.log("El mes es",mesesDelAno[indice]);
*/
/*
EJEMPLO 2: (clase)
    -crear arreglo de numeros y que se los muestre al usuario.
    -el arreglo se tiene que llamar num
    -los numeros del arreglo son 20,14,0,8,5,19,24.
    -mostrar los valores del arreglo.

//forma facil
let num:number[] = [20,14,0,8,5,19,24];
console.log(num);

//forma larga
let num:number[] = new Array(7);

let indice:number=0;
num[0]=20;
num[1]=14;
num[2]=0;
num[3]=8;
num[4]=5;
num[5]=19;
num[6]=24;
while(indice<7){
    console.log("el numero posicion",indice," es ",num[indice]);
    indice++;
}
*/
/*
EJEMPLO 3:(clase)
    -construya un algoritmo que tenga dimension 5 y llenelo con los numeros que el usuario desee.
    -muestre los numeros del arreglo al usuario

let numeroIngresado:number[] = new Array(5);
let numero:number, indice:number;
for (let indice = 0; indice < 5; indice++) {
    numero=rls.questionInt(`ingrese el numero que desea incorporar en la posicion ${indice}:`);
    numeroIngresado[indice]=numero;
}
for (let indice = 0; indice < 5; indice++) {
    console.log(`el numero ingresado en la posicion ${indice} es ${numeroIngresado[indice]}`);
}
*/
/*
EJEMPLO 4:(clase)
    -construya un algoritmo que tenga dimension deseada por el usuario y llenelo con los nombres que le usuario desee.
    -crear un arreglo de las posiciones que desee el usuario y llenarlo con nombres de personas.

let dimensionArreglo:number = rls.questionInt(`ingrese la cantidad de nombres que va a ingresar:`);
let nombreIngresados:string[] = new Array(dimensionArreglo);
let indice:number;
for (let indice = 0; indice < dimensionArreglo; indice++) {
    nombreIngresados[indice]=rls.question(`ingrese el nombre que desea ingresar en la posicion ${indice}:`);
}
for (let indice = 0; indice < dimensionArreglo; indice++) {
    console.log(`el nombre ingresado en la posicion ${indice} es ${nombreIngresados[indice]}`);
}
*/
/*
EJEMPLO 5:(clase)
    -construya un algoritmo que tenga 2 arreglos, uno que almecene 2 nombres y otro que almecene 3 numeros, ambos ingresados por el usuario
    -al final imprimir los valores por consola.

let arregloNombre:string[] = new Array(2);
let arregloNumeros:number[] = new Array(3);
let indice:number;
for (let indice = 0; indice < 2; indice++) {
    arregloNombre[indice]=rls.question(`ingrese el nombre de la posicion ${indice} `);
}
for (let indice = 0; indice < 3; indice++) {
    arregloNumeros[indice]=rls.questionInt(`ingrese el numero de la posicion ${indice} `);
}
for(indice=0 ; indice<2 ; indice++){
    console.log(`el nombre ingresado en la posicion ${indice} es ${arregloNombre[indice]}`);
}
for(indice=0 ; indice<3 ; indice++){
    console.log(`el numero ingresado en la posicion ${indice} es ${arregloNumeros[indice]}`);
}
*/
/*
EJEMPLO 6: (clase)
    -construya un algoritmo que sume todos los elementos de un arreglo de tamaño N.
    -la dimension del arreglo es ingresada por el usuario.
    -los elementos (numeros) del arreglo son ingresados por el usuario.

let dimensionArreglo:number = rls.questionInt(`ingrese la dimension del arreglo: `);
let arreglo:number[] =new Array(dimensionArreglo);
let indice:number;
let resultado:number = 0;
for (indice=0 ; indice<dimensionArreglo ; indice++){
    arreglo[indice] = rls.questionInt(`ingrese el numero que va en la posicion ${indice} `);
    resultado += arreglo[indice];
}
for(indice=0 ; indice<dimensionArreglo ; indice++){
    console.log(`el numero ingresado en la posicion ${indice} es ${arreglo[indice]}`);
}
console.log(`la suma del arreglo es: ${resultado}`);
*/
