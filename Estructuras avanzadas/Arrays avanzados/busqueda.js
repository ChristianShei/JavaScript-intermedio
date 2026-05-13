
// includes ()
let numeros = [ 7,13,3,4, 5, 10, 16]
let num = numeros.includes(4)
console.log(num)

//find()

let element = numeros.find( elementos => elementos % 2 == 0 )
console.log(element)

//findIndex()
//numeros  [ 7, 13, 3, 4, 5, 10, 16] = indises [0, 1, 2, 3, 4, 5, 6]
//Por eso en este caso me devuelve 3, porque el primer numero par esta en el idice 3

let index = numeros.findIndex( elementos => elementos % 2 == 0 )
console.log(index)