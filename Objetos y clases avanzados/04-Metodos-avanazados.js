

// - asing

let person_core = {name : "Christian"}
let person_detail = {age : 37, alias : "Suarez"}

let FullPerson = Object.assign(person_core, person_detail)

console.log(FullPerson)


// key, values, entries

console.log(Object.keys(FullPerson))
console.log(Object.values(FullPerson))
console.log(Object.entries(FullPerson))