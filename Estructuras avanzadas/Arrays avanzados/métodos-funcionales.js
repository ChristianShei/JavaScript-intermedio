


let number = [1, 2, 3, 4, 5]

// forEach ( Eb este caso me dice cada elemento que tengo en al array)
number.forEach(element  => { console.log(element)

})
// map (  En este caso me multiplica cada elemento del array por 2)
let  Mult = number.map( element => element * 2 )
console.log(Mult)

// filter  ( En este caso me da todos los numeros pares)

let fil = number.filter( element => element % 2 === 0)
console.log(fil)

//reduce me retorna a un unico valor ( en este caso la suma de todos los valores de array)

let reduc = number.reduce((valorPrevio, Current) => valorPrevio + Current,0)
console.log(reduc)
