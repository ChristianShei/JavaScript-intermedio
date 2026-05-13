// 1. Crea una funciÃ³n que retorne a otra funciÃ³n

// 2. Implementa una funciÃ³n currificada que multiplique 3 nÃºmeros

// 3. Desarrolla una funcion recursiva que calcule la potencia de un numero elevado a un exponente

// 4. Crea una funciÃ³n createCounter() que reciba un valor inicial y retorne un objeto con mÃ©todos para increment(), decrement() y getValue(), utilizando un closure para mantener el estado

// 5. Crea una funciÃ³n sumManyTimes(multiplier, ...numbers) que primero sume todos los nÃºmeros (usando parÃ¡metros Rest) y luego multiplique el resultado por multiplier

// 6. Crea un Callback que se invoque con el resultado de la suma de todos los nÃºmeros que se le pasan a una funciÃ³n

// 7. Desarrolla una funciÃ³n parcial

// 8. Implementa un ejemplo que haga uso de Spread

// 9. Implementa un retorno implÃ­cito

// 10. Haz uso del this lÃ©xico

3//


function factorial(n){

    if (n == 1){
        return 1
    }
    return n * factorial (n - 1)
}
console.log(factorial(5))




function potencia(base, exponente) {
    if (exponente === 0) {
        return 1
    }
    return base * potencia(base, exponente - 1)
}

console.log(potencia(2, 4))
console.log(potencia(5, 2))

