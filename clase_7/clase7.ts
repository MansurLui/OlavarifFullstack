import * as rls from "readline-sync";
//EJERCICIO SUMA DE VECTORES

//aca sumamos 2 vectores que le asignamos nosotros el valor
/*
let arregloA:number[]= new Array(6);
arregloA=[1,2,3,4,5,6];
let arregloB:number[]= [7,8,9,10,11,12];

let arregloSuma:number[]=new Array(6);  //inicio un nuevo arreglo mas para guardar las sumas
arregloSuma=[0,0,0,0,0,0,0]

for (let i = 0; i < arregloA.length; i++) {
    arregloSuma[i]=arregloA[i]+arregloB[i];
    console.log(arregloSuma[i]);
}
*/

//aca sumamos 2 vectores en los que ingresamos el dato 
// este ejercicio lo resolvi yo, en la clase grabada esta parecido pero no igual, nose si esta bien pero funciona ok
let valorArreglo:number = rls.questionInt("ingrese cuantos valores quiere que tenga el arreglo: ")
let arregloA:number[]=new Array (valorArreglo);
let arregloB:number[]=new Array (valorArreglo);
let sumaArreglo:number[]=new Array (valorArreglo);

function sumarArreglos(){
    for (let i = 0; i < valorArreglo; i++) {
        arregloA[i]=rls.questionInt(`ingrese un valor de la posicion ${i+1} del arreglo 1: `);
        arregloB[i]=rls.questionInt(`ingrese un valor de la posicion ${i+1} del arreglo 2: `);
        sumaArreglo[i]=arregloA[i]+arregloB[i];
    }
    console.log("la suma de los arreglos es : "+ sumaArreglo); 
}

sumarArreglos();

//mostrar el arreglo al reves
for (i=valorArreglo-1; i >= 0; i--) {
    cadena=cadena+sumaArreglo[i]+"";
}
console.log(cadena);