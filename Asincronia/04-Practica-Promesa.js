

//-1
console.log("Empezemos")
function numeros (numero){
   return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (numero > 10){
                resolve("bueno") 
            } else {
                reject("malo")
            }
        },1000)
    } )
    }
numeros(15)
.then(respuesta => {
    console.log(respuesta)
})
.catch(respuesta => {
    console.log(respuesta)
})


console.log("Terminamos")

//-2

function usuarios(usuario, password){
    return new Promise((resolve, reject)=>{
        setTimeout (()=>{
            if(usuario === "admin" && password === "1234"){
            resolve("Bienvenido")
        }
        else {
            reject("Credenciales incorrectas")
        }

        }, 1000)
    })
    
}

usuarios("admin", "1234")
.then(usus => {console.log(usus)})
.catch(usus => {console.log(usus)})

//-3

function obtenciónUsuario (usuario){
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
        if(usuario){
            resolve ({nombre: usuario})
        }else {
            reject ("Usuario Vacio")
        }
    },1000)}
    )
}

obtenciónUsuario("chris")
.then( dato => console.log(dato))
.catch(error => console.log(error))

function obtenciónDePedidos(usuario){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (usuario.nombre){
                resolve ([37,660,882])
            } else reject("Error")
        },1000)
    })
}

obtenciónDePedidos({nombre:"chris"})
.then (pedido =>{console.log(pedido)})
.catch (error =>{console.log(error)})

function mostrarPedidos(pedidos){
    return new Promise ((resolve, reject)=> {
        setTimeout(() => {
            if(pedidos.length){
                resolve(`tiene ${pedidos.length} pedidos`)
            } else{
                reject("Error")
            }
            
        },1000)}
)}

obtenciónUsuario("chris")
.then(usuario => obtenciónDePedidos(usuario))
.then(pedidos => mostrarPedidos(pedidos))
.then(resultadoFinal => console.log(resultadoFinal)
)
.catch(error => console.log(error))

//-4

function obtenerNumero(numero){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if(numero){
                resolve(numero)
            }else reject ("Error")
            
        },1000);
    })
}

obtenerNumero(5)
.then(dato => dato * 2)
.then(dato => dato + 10)
.then(dato => dato - 3)
.then(dato => dato * 2)
.then(dato => console.log(dato))

.catch(error => console.log(error))

//-5

 function obtenUsuario(usuario){
    return new Promise((resolve, reject)=>
    setTimeout(() => {
        if(usuario.nombre){
            resolve(usuario.nombre)
        }else reject("Error")
    },1000))
 }
 obtenUsuario({nombre:"Sheila"})
 .then(dato => console.log(dato))
 .catch(error => console.log(error))

 function obtenSaldo(usuario){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if(usuario){
                resolve(8000)
            }else reject("Saldo insuficiente")
        },1000);
    })
 }
obtenSaldo({nombre:"Sheila"})
.then (dato => console.log(dato))
.catch (error => console.log(error))

function comprarProducto(saldo){
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            if(saldo > 3000){
                resolve("Compra realizada")
            }else reject("Saldo insufisiente")

        }, 1000);
    })
}


obtenUsuario({nombre:"Sheila"})
.then(usuario => obtenSaldo(usuario))
.then(saldo => comprarProducto(saldo) )
.then (compra => console.log(compra))
.catch(error => console.log(error))