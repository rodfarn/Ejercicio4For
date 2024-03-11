// Ejercicio 1
//Crea un programa que imprima en consola los números impares del 1 al 50.
/*
for (index = 1; index <= 50; index++) {

    if (index % 2 == 0) {
        console.log(index);
    }
}
*/

// Ejercicio 2
// Crea un programa que pregunte al usuario un número.
// Usando el archivo de arreglo de Pokémons, mostrar solo los nombres de
// los Pokémons cuyos números que son múltiplos de 5 desde 1 hasta el número
// introducido por el usuario.
/*
import { pokemons } from './pokemon.js';
var numIngresado = parseInt(prompt("Ingresa un número"));

for (var num = 1; num <= numIngresado; num++) {

    if (num % 5 == 0) {
        console.log(pokemons[num])
    }
}
*/

// Ejercicio 3

/*
var nuevoArray = [4, "dos", 8, "tres", 5, 9, 1, "cero"];

for (var i = 0; i < nuevoArray.length; i++) {
    if (typeof nuevoArray[i] === 'number' && !isNaN(nuevoArray[i])) {
        console.log(nuevoArray[i]);
    }
}
*/


