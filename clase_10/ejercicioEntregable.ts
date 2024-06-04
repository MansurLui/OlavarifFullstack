import * as rls from "readline-sync"
//ORDENAMIENTO
//  Implemente un algoritmo de ordenamiento con modo Bubble Sort, para que ordene un arreglo de longitud N en orden descendente.

function cargar(array:number[], dimension:number, numerosCargados:number){ //esta funcion es para cargar los numero del array
    for (let i=0; i<dimension; i++ ){
        array[i] = Azar(numerosCargados);
    }
}

function Azar(numAzar:number){
    return Math.floor(Math.random()*numAzar);
}


function escribirArray(array:number[], dimension:number){  //con esta funcion hago que se vean separados por un espacio los numeros ingresados
    let i:number;
    let vector:string="";
    for (let i = 0; i < dimension; i++) {
        vector += `${array[i]} `; 
    }
    console.log(vector);
}

function intercambiar(array:number[], i:number, j:number){ //aca ordenamos los elementos
    let aux:number;
    aux=array[i];
    array[i] = array[j];
    array[j] = aux;
}

function compararNumeros(arreglo:number[], i:number, j:number){ //comparamos los valores asi empezamos a ordenarlos
    let comparacion:number;
    if(arreglo[i]===arreglo[j]){
        comparacion=0;
    }   else if (arreglo[i]>arreglo[j]){
        comparacion=1;
    }   else {
        comparacion=-1;
    }
    return comparacion;
}

function burbuja(array:number[], dimension:number){     //ordenamientos de los numeros
    let i:number, j:number;
    for (i=0; i<dimension; i++){
        for (let j=0; j<(dimension-1); j++) {
            if (compararNumeros(array, j ,j+1)=== 1){
                intercambiar(array, j, j+1);
            }
        }
    }
}

let numerosCargados:number=10;
let elementos:number[]= new Array(numerosCargados);
cargar(elementos, numerosCargados, 100);
burbuja(elementos, numerosCargados);
escribirArray(elementos, numerosCargados);
