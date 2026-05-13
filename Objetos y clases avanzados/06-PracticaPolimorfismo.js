class Vehiculo {
    constructor (type){
        if (new.target === Vehiculo){
            throw new Error ("No se puede instanciar una clase Abstracta")
        }
        this.type = type
    }


    mover(){
        throw new Error ("Este metodo tiene que ser implementado por las subclase ")
    }
}

class Auto extends Vehiculo {
    mover(){
        console.log("El auto avanza a 80 km/h")
    }
}

class Bicicleta extends Vehiculo {
    mover(){
        console.log("La vicicleta avanza a 20 km/h")
    }
}
class Avion extends Vehiculo {
    mover(){
        console.log("el avion avanza a 800 km/h")
    }
}

// Uso del polimorfismo

const auto = new Auto ("toyota")
const bicicleta = new Bicicleta ("torna")
const avion = new Avion ("Vale")

const vehiculos = [auto, bicicleta, avion]

vehiculos.forEach(vehicle => {
    vehicle.mover();
});
// - 2
// Consigna

//Crear una clase abstracta Empleado
//Método obligatorio calcularSueldo()

//Subclases:

//EmpleadoFijo

//EmpleadoPorHora

//Cada uno calcula el sueldo de forma distinta.


class Empleado {
    constructor(nombre){
        if(new.target === Empleado){
         throw new Error ("No se puede instanciar una clase Abstracta")
        }
        this.nombre = nombre
    }
calcularSueldo(){
    throw new Error ("No se puede instanciar una clase Abstracta")
}
}

class EmpleadoFijo extends Empleado {
    calcularSueldo(){
        return 150000
    }

}

class EmpleadoPorHora extends Empleado{
    constructor(nombre, horasTrabajadas){
        super(nombre)
        this.horasTrabajadas = horasTrabajadas
    }
    calcularSueldo(){
        return (this.horasTrabajadas  * 2) 
    }

}
const emp1 = new EmpleadoFijo("Juan");
const emp2 = new EmpleadoPorHora("Ana", 80);

const empleados = [emp1, emp2];

empleados.forEach(resultado => {
    console.log(
        resultado.nombre + " cobra $" + resultado.calcularSueldo()
    );
});


