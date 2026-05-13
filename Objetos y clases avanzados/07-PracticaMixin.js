
class Animal {
    constructor(name){
        this.name = name
        if (new.target == Animal){
            throw new Error ("no se puede instanciar una clase abstracta")
        }
        
    }
    makeSound(){
        throw new Error ("Este metodo tiene que ser implementado por la subclases")
    }

}

// subclases
const caminarMixin = {
    caminar(){
        console.log(`${this.name} esta caminando`)
    }
}
class Persona extends Animal {
    }
class Perro extends Animal {
    }

Object.assign(Persona.prototype, caminarMixin)
Object.assign(Perro.prototype, caminarMixin)

const persona = new Persona("Christian")
console.log(persona.name)
persona.caminar()
const animal = new Perro("Rocco")
console.log(animal.name)
animal.caminar()

//-2

const volarMaxin = {
    volar(){
        console.log(`${this.name} vuela y nada`)
    }
}
const nadarMaxin = {
    nadar(){
        console.log(`${this.name} nada`)
    }
}

class Pato extends Animal{
}
class Pez extends Animal{
}

Object.assign(Pato.prototype, volarMaxin)
Object.assign(Pez.prototype,nadarMaxin )

const pato = new Pato ("Lucas")
console.log(pato.name)
pato.volar()

const pez = new Pez ("Nemo")
console.log(pez.name)
pez.nadar()

// -3

const comerMexin = {
    comer(){
        console.log(`${this.name} come`)
    }
}

class Humano extends Animal {}
class Toro extends Animal {}
class Gato extends Animal {}

Object.assign(Humano.prototype, comerMexin)
Object.assign(Toro.prototype, comerMexin)
Object.assign(Gato.prototype, comerMexin)

const humano = new Humano("Valeria")
humano.comer()

const toro = new Toro("Sheila")
toro.comer()

const gato = new Gato("Sory")
gato.comer()
