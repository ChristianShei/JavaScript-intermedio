

// Prototipos


let person = {
    name: "Chris",
    Age: "32",
    lenguaje: "Payton",
    
    greet(){
        console.log(`Hola, soy ${this.name}`)
    }
}


console.log( person.__proto__)
console.log(Object.getPrototypeOf(person))


person.seyAge = function(){
    console.log(`Tengo ${this.Age} años `)
}

person.seyAge()

// Herencia

let programmer = Object.create(person)
programmer.lenguaje = "javaScript"
programmer.name = "Damian"
programmer.Age= "33"
programmer.Estudio = "Programacion"

programmer.Estudiiar = function(){
    console.log("Estoy estudiando " + this.Estudio)
} 

console.log(person.name)
console.log(person.lenguaje)

console.log(programmer.name)
console.log(programmer.Age)
console.log(programmer.lenguaje)
console.log(programmer.Estudio)

person.greet()//Usa la funcion de greet:   console.log(`Hola, soy ${this.name}`)
person.seyAge()//Usa la funcion de seyAge : console.log(`Tengo ${this.Age} años `)
programmer.greet()//Usa la funcion de greet:   console.log(`Hola, soy ${this.name}`) en este caso usa el nombre del objeto de programmer

programmer.seyAge()//Usa la funcion de seyAge : console.log(`Tengo ${this.Age} años `)en este caso usa la edad del objeto de programmer
programmer.Estudiiar()
