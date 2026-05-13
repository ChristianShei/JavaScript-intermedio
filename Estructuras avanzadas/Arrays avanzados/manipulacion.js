

// manipulacion 

//flat 

let num = [1,[2,[3,[4]]]]
console.log
let aplana = num.flat(1)
console.log(aplana)
aplana = num.flat(2)
console.log(aplana)
aplana = num.flat(3)
console.log(aplana)


//flatMap

let frases = ["Hola mundo", "Adios mundo"]
let wors = frases.flatMap(palabra => palabra.split(" "))
console.log(wors)




