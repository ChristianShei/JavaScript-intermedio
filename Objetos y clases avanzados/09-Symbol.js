//- Symbol

const Id = Symbol("id")

class User {
    constructor(name){
        this.name = name
        this[Id] = Math.random()
    }
    getId(){
        return this[Id]
    }
}
const user = new User("Chris")
console.log(user.name)
console.log(user.Id)
console.log(user[Id])
console.log(user[Id])
user[Id] = 1234
console.log(user[Id])
console.log(user.getId())