import * as rls from "readline-sync";


// TIPOS DE NUMEROS DE ARREGLO
/*  -almacene en un arreglo de dimension N numeros(la cantidad ingresada por los usuarios)
    -muestre cuantos numeros son positivos,cuantos negativos y cuantos ceros hay. 
    (lo resoli yo,no esta igual , pero funciona ok) */


let valorArreglo:number = rls.questionInt("ingrese cuantos valores quiere que tenga el arreglo: ");
let arreglo:number[]=new Array(valorArreglo);

function ingresarArreglo(){
    for (let i = 0; i < valorArreglo; i++) {
        arreglo[i] = rls.questionInt(`ingrese el valor de la posicion${i+1} del arreglo :`);
    }   
    console.log(`el arreglo ingresado es ${arreglo}`);
}

function tiposDeNumeros(){
let positivos:number=0,negativos:number=0,ceros:number=0;
    for (let i = 0; i < valorArreglo; i++) {
        if (arreglo[i]>0){
            positivos++;
        } else if (arreglo[i]<0){
            negativos++;
        } else {
            ceros++;
        }
    }
    console.log(`la cantidad de numeros positivos son ${positivos}, la cantidad de negativos es ${negativos} y los ceros son ${ceros}.`)
}

ingresarArreglo();
tiposDeNumeros();
