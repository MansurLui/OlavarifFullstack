// TRATAMIENTOS DE CADENAS

//FALTAN LOS ANTERIORES

//lastIndexOf(textoBuscado)
let texto2 : string = "tengo que hacer y hacer muchos ejercicios";
console.log(texto2.lastIndexOf(`hacer`));

//substring(inicio,final)
console.log(texto2.substring(10.15));

//substr(inicio,largo)
console.log(texto2.substr(10,5));

//toLowerCase & toUpperCase  (pasa todo el texto a miniscula o a mayuscula)
let textoCombinado : string = "AaAaA" // pongo algunas en minusculas y otras en mayusculas

console.log(textoCombinado.toLowerCase()); //todo minuscula
console.log(textoCombinado.toUpperCase()); //todo mayuscula

//toString (se aplica a los numeros y los convierte en cadena)
let numero : number = 234;

console.log(numero); //aca va como numero
console.log(numero.toString()); //aca como string
console.log(typeof numero.toString()); //aca muestra que es un string

//parseInt (convierte string en number)
let numeroString : string = "234";

console.log(parseInt(numeroString));
let numeroNumber: number = parseInt(numeroString); //aca devuelve el anterior que era  
console.log(typeof parseInt(numeroString)); //aca se muestra que es tipo number

//parseFloat (pasa los numeros en decimales)
let numDecimalString:string = "3.22";

console.log(parseFloat(numDecimalString)); //aca imprime el numero con decimal

//split (recibe un parametro y separa en espacios por cada una de las posiciones que tenga)
let arrayDeNumeros:string[] = numeroString.split("");
console.log(arrayDeNumeros);

    //otro ejemplo
    let numeroString2:string ="24526528";
    let arrayDeNumeros2:string []= numeroString2.split("5"); //aca pongo el numero 5 de ej para mostrar que separa el string hasta el valor que se le asigna y continua
    console.log(arrayDeNumeros2);
    //otro ejemplo
    let arrayPalabras:string ="tengo que hacer muchos ejercicios";
    let arraySplit:string []= arrayPalabras.split(" "); //aca lso separo con el espacio que hay entre cada una
    console.log(arraySplit);