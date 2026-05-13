

// - Métodos estáticos y de instancia

function Person ( name, age){
    this.name = name
    this.age = age
}

Person.prototype.greet = function() {
    console.log(`hola, soy ${this.name}`)

}

let new_person = new Person("Chris", 32)
new_person.greet()