// 1. Crea una funciÃ³n que retorne a otra funciÃ³n

// 2. Implementa una funciÃ³n currificada que multiplique 3 nÃºmeros

// 3. Desarrolla una funciÃ³n recursiva que calcule la potencia de un nÃºmero elevado a un exponente

// 4. Crea una funcion createCounter() que reciba un valor inicial y retorne un objeto con metodos para increment(), decrement() y getValue(), utilizando un closure para mantener el estado

// 5. Crea una funciÃ³n sumManyTimes(multiplier, ...numbers) que primero sume todos los nÃºmeros (usando parÃ¡metros Rest) y luego multiplique el resultado por multiplier

// 6. Crea un Callback que se invoque con el resultado de la suma de todos los nÃºmeros que se le pasan a una funciÃ³n

// 7. Desarrolla una funcion parcial

// 8. Implementa un ejemplo que haga uso de Spread

// 9. Implementa un retorno implÃ­cito

// 10. Haz uso del this lÃ©xico

//4


// 4 clousure        ejercisicio resuelto por el  profesor /////////////////////////////////////////////////////
function createCounter(initialValue = 0 ) {
    let count = initialValue
    return {
        increment: function() {
            count++
            return count
        },
        decrement: function() {
            count--
            return count
        },
        getValue: function() {
            return count
        }
    }
}

const myCounter = createCounter(5)
console.log(myCounter.getValue())

myCounter.increment()
console.log(myCounter.getValue())


myCounter.decrement()
console.log(myCounter.getValue())

// 5 parametro rest  Ejercicio por el profesor ////////////////////////////////////////////////////////////////////////////

function sumManyTimes(multiplier, ...numbers) {
    

    const sum = numbers.reduce((total, num) => total + num, 0)
    return sum * multiplier

    }

console.log(sumManyTimes(2, 5, 10))

 //6 callback

 function sum(...num){
    let result = 0 
    for (let number of num)
        result += number 
    return result
}
 function suma (dato, callback){
    const result = sum(...dato)
    callback(result)

 }
function resultado (result){
    console.log(result)
}


 suma([1, 2, 3], resultado)
 suma([2, 2, 2],(result) => {console.log(`El resultado es  ${result}`)})

 // 6 callback por el profesor ///////////////////////////////////////////////////////////////////////////////////////

function calculateSum(numbers, callback) {
    const sum = numbers.reduce((total, num) => total + num, 0)
    callback(sum)
}

function displayResult(result) {
    console.log(`La suma de los numeros es: ${result}`)
}

calculateSum([1, 2, 3, 4], displayResult)

calculateSum([5, 10, 15], function(result) {
    console.log(`El resultado es: ${result}`)
})

// Con arrow function
calculateSum([2, 4, 6, 8], (result) => {
    console.log(`Total: ${result}`)
})
7//

function PartialSum(a){
    return function (b, c){
        return sum (a, b, c)
    }
}
let sumWitch = PartialSum(4)
console.log (sumWitch(5, 3))