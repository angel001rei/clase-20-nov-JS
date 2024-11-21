const prompt = require('prompt-sync')()

// let cantidadNum = parseFloat(prompt("ingrese la cantidad de numeros que quiere sumar"))

// let suma = 0

// while (cantidadNum > 0) {

//     const numero = parseFloat(prompt("ingrese un numero para sumar"))


//     suma = numero + suma

//     if (numero < 0) {
//         break
//     }
// }

// let animal = 'perro';
// let animales = ['perro', 'gato', 'liebre']


// for (let index = 0; index < animales.length; index++) {
//     console.log(animales[index])
// }

// Ejercicio 1: Recorrer un array
// Escribe un ciclo que imprima cada elemento de un array de números.

// let numeros = [1, 2, 3, 4, 5, 6,]
// for (let ordinal = 0 ; ordinal < numeros.length; ordinal++) {
//     console.log(numeros[ordinal])
// }


// Ejercicio 2: Sumar los elementos de un array
// Dado un array de números, utiliza un ciclo para calcular la suma de todos los elementos.

// numeros = [1, 2, 3, 4, 5, 6,]

// let suma = 0

// for (let ordinal = 0 ; ordinal < numeros.length; ordinal++) {
// // ordinal es 0 , entonces suma en primera instancia vale 1 , despues ordinal vale 1 , entonces suma es = a suma que es 1 ahora y le sumo 2 y asi  sucecivamente
//     suma = suma + numeros[ordinal]

// // esto hago que muestre la suma de un numero con otro 
//     console.log(suma)
// }



// Ejercicio 3: Encontrar el número mayor
// Escribe un ciclo que encuentre el número más grande en un array de números.


// numeros = [48, 2, 3,820, 4, 5, 6,133]

// let numMayor = 0

// for (let ordinal = 0 ; ordinal < numeros.length; ordinal++) {
// // este for me hace un bucle , el if me lo muestra,primero el numero mayor es = 0 despues pasa al array osea a la lista , despues declaro  a numero mayor ya no toma el valor de cero , sino que tomo el valor del mas alto y de ahi sigue buscando en el array mas numeros altos , y los numeros menores no pasa porque en la primera condicion del if lo filtra y empieza el bucle de  vuelta , despuesponer  consol.log fuera del ciclo para mostralo

//    if (numMayor<= numeros[ordinal]) {

//         numMayor = numeros[ordinal]

//    }

// }

// console.log(numMayor)

// Ejercicio 4: Invertir un array
// Dado un array de números, usa un ciclo para invertir el array (es decir, que el último elemento pase a ser el primero, y viceversa).

// let ropa = ['zapato', 'media', 'slip', 'pantalon', 'remera', 'camisa', 'moño', 'gorra',]

// let ropaInvertida = []

// ropa.push("corbata")
// for (let indumentaria = 0; indumentaria < ropa.length; indumentaria++) {


//     ropa[indumentaria]
//     //unshif me agrega un elemento al principio pero no queda todo sino que en una lista solo empieza por el principio,luego el segundo que corresponde lo coloca en el principio y el primero queda segundo y cuanel tercero lo agrega primero y asi queda en 3,2,1 , aclaracion: no en unshif no pone toda la lista y despues la invierte si no que empieza desde solo un elemento  

//     ropaInvertida.unshift(ropa[indumentaria])
    



// }

// ropaInvertida[0] = ropa[0]
// ropaInvertida[ropaInvertida.length-1] = ropa[ropa.length-1]

// console.log(ropaInvertida)



// Ejercicio 5: Contar números pares
// Dado un array de números, usa un ciclo para contar cuántos de ellos son pares.

let numerosGeneral = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
 

for (let contadorPar = 0 ;contadorPar< numerosGeneral;contadorPar++)

    console.log(numerosGeneral[numerosGeneral[0]] * 2)








// Ejercicio 6: Sumar solo los números impares
// Dado un array de números, usa un ciclo para sumar solo los números impares.

