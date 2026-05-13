// clases abstractas

class Animal {
    constructor(name) {
        if(new.target === Animal ){
            throw new Error (" no se puede instanciar una clase abstracta")
        }
        this.name = name
    }
    makeSound () {
        throw new Error ("Este metodo tiene que ser implementado por las subclase ")
    }
}


// - Polimorfismo

class Cat extends Animal{
makeSound(){
    console.log("Miau")}
}
class Dog extends Animal{
    makeSound(){
    console.log("Guau")}

}

const cat = new Cat("Sory")
console.log(cat)
cat.makeSound()

const dog = new Dog("Sheila")
console.log(dog)
dog.makeSound()



