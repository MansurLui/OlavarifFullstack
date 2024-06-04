import * as rls from "readline-sync";

//  ORDENAMIENTO BURBUJA
//  FUNCION NUMERO AL AZAR
/*
    se utilizan 4 funciones (2 bucles, el i que indica la cantidad de veces que va a iterar
    y el j que dice donde empieza y donde termina el burbujeo) y la funcion de crear un numero al azar que es la que se solicita en este caso.
*/

//funcion que permite cargar arreglo, en cantidad le damos la dimension y lo va a ir cargando con numeros al azar
function cargar(arreglo:number[], cantidad:number, numeroAzar:number){
    let i:number;
    for (i = 0; i<cantidad; i++){
        arreglo[i] = Azar(numeroAzar);
    }
}

//funcion cargar numero ramdom entre 0 Y numAzar
function Azar(numAzar:number){
    return Math.floor(Math.random()*numAzar);
}

//este metodo nos permite ver el arreglo creado al azar separados por un espacio uno al lado del otro.
function escribirEnUnaLinea(arreglo:number[], cantidad:number){
    let i:number;
    let vector:string = ""; //crea una variable string vacia (si la completo con algo entre las "", va a llenar los espacios con eso)
    for (let i = 0; i<cantidad ; i++) {
        vector += `${arreglo[i]} `;
    }
    console.log(vector);
}

//este metodo intercambia los valoras de i y j del arreglo.
function intercambiar(arreglo:number[], i:number, j:number){
    let aux:number;
    aux=arreglo[i];
    arreglo[i] = arreglo [j];
    arreglo[j] = aux;
}

//aca hace una comparacion,va viendo si el valor de i = j asi empieza a acomodar los valores de las posiciones segun el resultado.
//  devuelve 0 si son iguales, 1 si i>j y -1 si i<j
function comparar(arreglo:number[], i:number, j:number){
    let comparacion:number;
    if(arreglo[i]===arreglo[j]){
        comparacion=0;
    }   else if (arreglo[i]>arreglo[j]){
        comparacion=-1;
    }   else {
        comparacion=1;
    }
    return comparacion;
}

//funcion burbuja (se utlizan todos los anteriores para componerla)
function burbuja(arreglo:number[], cantidad:number){
    let i:number, j:number;
    for (i=2; i<cantidad ;i++){       //este primer for indice es la cantidad de veces que recorre el arreglo.
        for (let j=0; j<(cantidad-1); j++) {    //este segundo for compara si uno es mayor que otro asi los intercambia y va acichando el rango a medida que se acomoda el arreglo
            if (comparar(arreglo, j ,j+1) === 1){
                intercambiar(arreglo, j, j+1);  // aca si no estan ordenados los intercambia.
            }
        }
    }
}

//RESUMEN DE TODO, este es el algoritmo que se utiliza
//algoritmo orden

let limite:number = 10;                 // aca indico cuantos elementos va a contener el array
let array:number[] = new Array(limite); // creamos el array
cargar(array, limite, 100);             // cargamos la cantidad de elementos dados en el array
escribirEnUnaLinea(array, limite);      // mostramos en consola como es el array (este paso no es necesario, aca esta para verlo desordenado)
burbuja(array, limite);                 // este ordena el array
escribirEnUnaLinea(array, limite);      // muestra el array creado, con la dimension que le asignamos, ordenado