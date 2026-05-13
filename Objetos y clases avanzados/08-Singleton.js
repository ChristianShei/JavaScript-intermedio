class Session {
    constructor(name){
    if (Session.instance){
        return Session.instance
    }
    this.name = name
    Session.instance = this
}
}

const session1 = new Session("Christian")
console.log(session1.name)

const session2 = new Session()
console.log(session2.name)
