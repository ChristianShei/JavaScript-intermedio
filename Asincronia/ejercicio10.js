
// 10. Crea una simulación de un cajero automatico usando asincroni­a.
//     - La función checkBalance() tarda 1s y devuelve un saldo de 500$.
//     - La función withdrawMoney(amount) tarda 2s y retira dinero si hay suficiente saldo, o devuelve un error si no hay fondos.
//     - Usa async/await para hacer que el usuario intente retirar 300$ y luego 300$ mas.
//     
//     Posible salida esperada:
//     Saldo disponible: 500$
//     Retirando 300$...
//     Operación exitosa, saldo restante: 200$
//     Retirando 300$...
//     Error: Fondos insuficienteslet saldo = 500
let saldo = 500
function consultarSaldo() {
    return new Promise((resolve)=> {
        setTimeout(()=>{
            
            resolve("saldo disponible: " + saldo)
        },1000)
    })
    
}
function retirarDinero(cantidad){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            
            if(cantidad <= saldo){
                saldo -= cantidad
                console.log("Operación exitosa, saldo restante " + saldo)
                resolve (saldo)
                
            }else reject("No hay fondos")
            
        },2000);
    })
}

async function dinero() {
    try{

    let saldoactualizado = await consultarSaldo()
    console.log(saldoactualizado)

    console.log("Retirando 300$..")
    await retirarDinero(300)
    console.log("Retirando 300$..")
    await retirarDinero(300)

    }catch(error) {
      console.log("Error:", error);
}}

dinero()

// Crea una simulación de compra en una tienda online usando asincronía.
//
// - La variable productosDisponibles empieza en 3.
// - La función consultarStock() tarda 1 segundo y devuelve cuántos productos quedan.
// - La función comprarProducto(cantidad) tarda 2 segundos.
// - Si hay suficiente stock, resta la cantidad comprada y devuelve el stock restante.
// - Si no hay suficiente stock, devuelve un error.
//
// Usa async/await para hacer que una persona:
//
// 1. Consulte el stock.
// 2. Compre 2 productos.
// 3. Intente comprar 2 productos más.
//
// Posible salida esperada:
//
// Stock disponible: 3
// Comprando 2 productos...
// Compra exitosa, stock restante: 1
// Comprando 2 productos...
// Error: No hay suficiente stock

let productosDisponibles = 3

function consultarStock(){
    return new Promise((resuelve)=>{
        setTimeout(() => {
            resuelve("stock disponible " + productosDisponibles)
        }, 4000);
    })
}


function comprarProducto(cantidad){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(cantidad <= productosDisponibles){
                productosDisponibles -= cantidad
            console.log("compra exitosa, stock restante " + productosDisponibles)
            resolve(cantidad)
            }else {
                reject("no hay suficiente stock")
            } 
        },4000);
    })
    
}

async function consultaDeStock() {
    try{
        
        let stock = await consultarStock()
        console.log(stock)

        console.log("Comprando 2 productos...")
        await comprarProducto(2)
        console.log("Comprando 2 productos...")
        await comprarProducto(2)



    }catch(error){
        console.log( "No hay suficiente stock")
    }
    
}

consultaDeStock()
