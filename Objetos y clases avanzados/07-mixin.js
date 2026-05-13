  
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
  //- Mixins

const FlyMixin = {
    fly(){
        console.log( `${this.name} está volando`)
    }
     }

class Bird extends Animal {}
class Dragon  extends Animal {}

Object.assign(Bird.prototype, FlyMixin)

Object.assign(Dragon.prototype, FlyMixin)


const bird = new Bird("Christian")
console.log(bird.name)
bird.fly()

const dragon = new Dragon("Damian")
console.log(dragon.name)
dragon.fly()