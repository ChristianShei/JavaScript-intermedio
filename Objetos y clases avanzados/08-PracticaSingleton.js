
//-1

class UserSession{
    constructor(user){
        if(UserSession.instance){
            return UserSession.instance
        }
        this.user = user
        UserSession.instance = this
    }
}

const user1 = new UserSession("chdasuarez")
console.log(user1)
const user2 = new UserSession("dgarrido")
console.log(user2)

console.log(user1 === user2)

//-2

class globalCounter {
    constructor(){
        if(globalCounter.instance){
            return globalCounter.instance
            
        }
        globalCounter.instance = this
        this.count = 0
    }
    increment(){
        this.count++
    }
    getValue(){
        return this.count
    }
}

const c1 = new globalCounter()
c1.increment()
c1.increment()
c1.increment()

const c2 = new globalCounter()
c2.increment()
c2.increment()


console.log(c1.getValue())

//-3

class appConfig {
    constructor(env){
        if(appConfig.instance){
            return appConfig.instance
        }
        this.env = env
        appConfig.instance = this
        
    }
}

const config1 = new appConfig("Prod")

const config2 = new appConfig("Dev")

console.log(config1.env)
console.log(config2.env)

// - 4


class logger{
    constructor(){
        if(logger.intance){
            return logger.intance
        }
        this.logs = []
    }
    addLog(msg){
        this.logs.push(msg)
        

    }
    showlog(){
        console.log(this.logs)
            
        };
 }


const log1 = new logger()
log1.addLog("sistema iniciado")

const log2 = new logger()
log2.addLog("Usuario logeado")

log1.showlog()

console.log(log2.logs)