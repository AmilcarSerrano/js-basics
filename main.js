//FUNCIONES

//Declarativas
function miFuncion()
{
    return 11; //Retorna 10 solo por retornar algo
}
console.log(miFuncion());

function saludar(nombre){
    console.log(`${nombre}`); //Usando template literals
}
saludar('Amilcar');

//De expresión
let otraFuncion = function(a, b){ //Tambien llamadas funciones anónimas
    return a + b;
}
console.log(otraFuncion(10,5));

var saludito = function(name){
    console.log(`${name}`);
}
console.log('Pedrito Sola');

//SCOPE 
function alcance(nombre){
    console.log(nombre);
}

alcance('Amilcar');

let miNombre = 'Amilcar';

function nombre(){
    var miApellido = 'Serrano';
    console.log(`${miNombre} ${miApellido}`);
}

nombre();

//Hoisting (Solo sucede en versiones ES5 hacia atrás)
console.log(miNombre);
var miNombre = 'Amilcar';

hey();
function hey(){
    console.log("Hola " + miNombre);
}
var miNombre = "Diego";

//COERCIÓN
//Cambia un tipo de valor a otro tipo de valor, ejemplo:
 
//Existen dos tipos: 

//Implicita (El lenguaje cambia el tipo por nosotros)

let numero = 7;
let letra = '4';
let concatena = numero + letra;
console.log(concatena);
typeof concatena;

//Explicita (Obligamos a que una variable cambie de tipo usando String())
let a = String(20);
let b = a + '2';

console.log(a);
typeof a;

//TRUSTHY AND FALSY
//Ejemplos en los que Boolean devuelve Falso:
Boolean(0); //false
Boolean(null); //false
Boolean(NaN); //false
Boolean(undefined); //false
Boolean(false); //false
Boolean(""); //false

//Ejemplos en los que Boolean devuelve verdadero:
Boolean(1); //true para 1 o cualquier número diferente de cero (0)
Boolean("a"); //true para cualquier caracter o espacio en blanco en el string
Boolean([]); //true aunque el array esté vacío
Boolean({}); //true aunque el objeto esté vacío
Boolean(function(){}); //Cualquier función es verdadera también


//CONDICIONALES

//if, else if, else (Lo mismo que C++)
//Operador ternario en condicionales
//Condición ? true: false    (Ejemplo)

let numero = 2;

let resultado = numero === 1 ? "Soy un uno" : "No soy un uno";
console.log(resultado);
