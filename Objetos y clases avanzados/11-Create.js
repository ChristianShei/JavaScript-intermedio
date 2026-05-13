// - instanceof

class Car {}

const car = new Car

console.log(car instanceof Car)

// Esto nos inidica si la instancia nueva que creamos pertenece a la class Car

//- create

const anotherCar = Object.create(Car.prototype)

console.log(anotherCar instanceof Car)
console.log(anotherCar)