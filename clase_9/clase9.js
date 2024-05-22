// TRATAMIENTOS DE CADENAS
//FALTAN LOS ANTERIORES
//lastIndexOf(textoBuscado)
var texto2 = "tengo que hacer y hacer muchos ejercicios";
console.log(texto2.lastIndexOf("hacer"));
//substring(inicio,final)
console.log(texto2.substring(10.15));
//substr(inicio,largo)
console.log(texto2.substr(10, 5));
//toLowerCase & toUpperCase  (pasa todo el texto a miniscula o a mayuscula)
var textoCombinado = "AaAaA"; // pongo algunas en minusculas y otras en mayusculas
console.log(textoCombinado.toLowerCase()); //todo minuscula
console.log(textoCombinado.toUpperCase()); //todo mayuscula
//toString (se aplica a los numeros y los convierte en cadena)
var numero = 234;
console.log(numero); //aca va como numero
console.log(numero.toString()); //aca como string
console.log(typeof numero.toString()); //aca muestra que es un string
//parseInt (convierte string en number)
var numeroString = "234";
console.log(parseInt(numeroString));
var numeroNumber = parseInt(numeroString); //aca devuelve el anterior que era  
console.log(typeof parseInt(numeroString)); //aca se muestra que es tipo number
///parseFloat (pasa los numeros en decimales)
var numDecimalString = "3.22";
console.log(parseFloat(numDecimalString)); //aca imprime el numero con decimal
