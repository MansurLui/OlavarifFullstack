import * as rls from "readline-sync";

/* ESTRUCTURAS DE DATOS - MULTIPLICACION 
    -implemente un metodo llamado "multiplicar arreglo" que recibe como parametros tres arreglos de enteros del mismo tamaño.
    -los dos primeros arreglos contienen los numeros que se quieren multiplicar.
    -el tercer arreglo almacena el calculo de la multiplicacion de cada posicion de los dos arreglos.
    -utilice este metodo para multiplicar los siguientes cuatro arreglos de tres elementos.
    v1: [1,2,3] v2: [4,5,6] v3: [2,1,2] v4: [1,2,1]     */

    /*
let valorArray:number =rls.questionInt(`Ingrese cuantos elementos va a tenes el arreglo: `);
let arreglosMultiplicados:number[] = new Array(valorArray);
let arreglo1:number[] = new Array(valorArray);
let arreglo2:number[] = new Array(valorArray);

function ingresarArreglo(){
    for (let i = 0; i < valorArray; i++) {
        arreglo1[i] = rls.questionInt(`ingrese el valor de la posicion ${i+1} del arreglo 1:`);
    }   
    for (let i = 0; i < valorArray; i++) {
        arreglo2[i] = rls.questionInt(`ingrese el valor de la posicion ${i+1} del arreglo 2:`);
    }  
    console.log(`los arreglos ingresados son ${arreglo1} y ${arreglo2}`);
}

function multiplicarArreglo(){
    for (let i = 0; i < valorArray; i++) {
        arreglosMultiplicados[i]=arreglo1[i]*arreglo2[i];
    }
    console.log(`el valor de los arreglos multiplicados es ${arreglosMultiplicados}`);
}

ingresarArreglo();
multiplicarArreglo();
*/


//multiplicar los arreglos dados

let v1:number[]=[1,2,3];
let v2:number[]=[4,5,6];
let v3:number[]=[2,1,2];
let v4:number[]=[1,2,1];

function multiplicarArreglo(){
    let arreglosMultiplicados:number[]=new Array();
    for (let i = 0; i < 3; i++) {
        arreglosMultiplicados[i]=v1[i]*v2[i]*v3[i]*v4[i];
    }
    console.log(`el valor de los arreglos multiplicados es ${arreglosMultiplicados}`);
}

multiplicarArreglo();
