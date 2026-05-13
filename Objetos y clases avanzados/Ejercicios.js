// -1 Agregar una funcion al prototipo de un objeto


function hijos (perra, perro){
    this.perra = perra
    this.perro = perro
}
    
hijos.prototype.comen = function(){
    
  if(this.perra === "Sheila") {
     console.log("Sheila come carne")
}
else {console.log("Rocco come comida Balanceada")}
} 

const hijos1 = new hijos("Sheila", "Rocco")

hijos1.comen()

hijos1.perra = "Vela"
hijos1.comen()





// -2 Crea un objeto que herede de otro

let Hermanas = {
 hermanaMyor : "Noe",
 hermanaMenor : "Isabel"
}

const familiares = Object.create(Hermanas)

familiares.hermanaMenor = "Noelia"

console.log(familiares)

// -3 Define un metodo  de instancia en un objeto

function Regaños (a, b, c){
  this.a = a
  this.b = b
  this.c = c

  this.palmada = function(){
   if (a === "muerde")
    console.log("Palmada en el trasero")
  else if (b === "ladra"){
    console.log("Decile basta")
  }
  else {console.log("Achicarle la correa")}
  }
}

let Palma = new Regaños ("muerde", "ladra", "Corre")

Palma.palmada()


// -4 Haz uso de get y set en un objeto

let Perros = {
    _edad: 20,
    get edad(){
       return this._edad 
    },
    set edad(valor){
      if(valor < 0){
        console.log("Es imposible")
      }
      else{ this._edad = valor}
    }}

   Perros.edad = 5 
   console.log(Perros.edad )

   Perros.edad = -5
   console.log(Perros.edad)

  // -5 Utiliza la operacion assing  en un objeto
   
  let Sheila = {
    perra : "Sheila",
    Edad : 1,
    Color : "blanco"
}

  let R0cc0 = {
    perro : "Rocco",
    Años : 17,
    colorDePelo : "blanco y negro"
  }
   let Hijos =  Object.assign(Sheila, R0cc0)
console.log(Hijos)

// -6 Crea una clase abstracta

class Cursos {
  constructor(name){
    if(new.target === Cursos){
      throw new  Error ("no se puede instanciar una clase abstracta")
    }
    this.name = name
  }
 Indices(){
  throw new Error("Esto lo define la subclase")
 }
}

class Matematica extends Cursos {
  Indices(){
    console.log("vamos a ver logaritmos")
  }
}

// -7 Utiliza polimorfismo en dos clases diferentes
class Programacion extends  Cursos {
  Indices(){
    console.log("Vamos a programar con javaScrip")
  }
}

let Java = new Programacion("javaScript")
Java.Indices()
console.log(Java)

let mate = new Matematica("Matematica")
mate.Indices()
console.log(mate)
// -8 Implementa un Mixin

const CursosMaxin = {
  funcion(){
  console.log(`la ${this.name} es cara`)

}}

Object.assign(Programacion.prototype,CursosMaxin)
Object.assign(Matematica.prototype,CursosMaxin)

Java.funcion()
mate.funcion()

// -9 Crea un Singleton (se usa para instanciar la clase una sola ves por mas que se cree otra, siempre va a ser la misma)

class usuarioEmail {
  constructor(name){
  if(usuarioEmail.instance){
  return  usuarioEmail.instance
  }
this.name = name

usuarioEmail.instance = this}
}

let gmail = new usuarioEmail("christianbigchange@gmail.com")

console.log(gmail)

let yaagoo = new usuarioEmail("carla.laFea@gmail.com")
console.log(yaagoo)

console.log(gmail === yaagoo)

// -10 Desarolla un Proxys

const proxy = {
  get(target, property){
    console.log(`el usuario mas lindo es ${property}`)

    return target[property]
  },
  set(target, property, value){
    if(property === "usuario" &&  value === "carlitos"){
      throw new Error("Quien es carlito, hijo de puta")}
      target[property] = value
  }
}
class losMasLindos{
  constructor(usuario){
    this.usuario = usuario
  }
}

const Suarez = new Proxy(new losMasLindos, proxy)

Suarez.usuario= "Christian"
console.log(Suarez)
Suarez.Christian


 

