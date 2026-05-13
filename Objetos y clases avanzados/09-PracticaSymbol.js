//- Practica de Symbol
// 1

const a =  Symbol("Id")
const b =  Symbol("Id")

console.log( a === b)
// 2

const Password = Symbol("password")

const User = {
    name : "Christian",
    [Password] : "1234"
}
console.log(User.Password)
console.log(User[Password])
// 3
const _salary = Symbol("salary")

class employe{
    constructor(name, salary){
        this.name = name
        this[_salary] = salary
    }
    getSalary(){
        return this[_salary]
    }
}
 const emp = new employe("juan", 50000)
 console.log(emp.getSalary())
 console.log(emp[_salary])
  console.log(emp.salary)