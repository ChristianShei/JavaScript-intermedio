
// Prototipos


let person = {
    name: "Chris",
    Age: "32",
    greet(){
        console.log(`Hola, soy ${this.name}`)
    }
}


console.log( person.__proto__)
console.log(Object.getPrototypeOf(person))

person.cualquiera= function(){
    console.log(`Tengo ${this.Age} años `)
}

person.cualquiera()




//🟢 EJERCICIO 1 – Básico (prototype simple)

//Consigna:
//Creá una función constructora Auto que reciba marca y modelo.
//Agregá un método arrancar() usando prototype que muestre:


function contructora(marca, modelo){

    this.marca = marca;
    this.modelo = modelo;

};
contructora.prototype.auto = function(){
    console.log(`la marca del modelo es ${this.marca}`)
    console.log(`El año del auto es ${this.modelo}`)
};


const fiesta = new contructora ("Ford", "2006");
const toyota = new contructora ("Toyota", "2026");
 fiesta.auto();
 toyota.auto()

 function panaderia (factura, pan){
    this.factura = factura
    this.pan = pan
 }
 panaderia.prototype.Arina = function(){
    console.log(`El ${this.pan} esta muy rico`)
    console.log(`La ${this.factura} esta deliciosa`)
 }

 const Laporo = new panaderia ("mediaLuna", "panCasero")
 const Valeri = new panaderia ("Churro", "Pan")

 Laporo.Arina ()
 Valeri.Arina ()

 


