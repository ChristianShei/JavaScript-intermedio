

// sets avanzados


// - Operaciones

// Eliminacion de duplicados

let numbersArray = [1, 2, 2, 3, 4, 5, 6, 6]
numbersArray = [...new Set(numbersArray)]
console.log(numbersArray )

// - Union

const setA = new Set([1, 2, 3])
const setB = new Set([2, 3, 4, 5])
const union = [new Set([...setA, ...setB])]
console.log(union)

// - interseccion

const interseccion = new Set([...setA].filter(element  => setB.has(element)))
console.log(interseccion)

// - Diferencia

const difference = new Set([...setA].filter(element =>!setB.has(element)))
console.log(difference)