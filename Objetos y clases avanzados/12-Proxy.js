// - Proxy

const proxy = {
    get(target, property){
    console.log(`se accede a la propiedad ${property}`)
    return target[property]
    },

    set(target, property, value){
        if(property === "balance" && value < 0){
            throw new Error ("El saldo no puede ser negativo")
        }
        target[property] = value
    }
}

class BnakAccount{
    constructor(balance){
        this.balance = balance
    }
}

const account = new Proxy(new BnakAccount(100), proxy)
console.log(account.balance)

account.balance = 50
console.log(account.balance)

account.balance = 10
console.log(account.balance)


